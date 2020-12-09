/*
 * My Monstera.
 */

#include <MKRNB.h>
#include <OneWire.h>
#include <DallasTemperature.h>

#include "DHT.h"
#include "coap.h"
#include "arduino_secrets.h"

char pinnumber[] = SECRET_PINNUMBER;
char gprs_apn[] = SECRET_GPRS_APN;
uint32_t coap_ip = SECRET_COAP_IP;
char coap_endpoint[] = SECRET_COAP_ENDPOINT;
uint32_t coap_port = SECRET_COAP_PORT;
uint32_t rat = SECRET_RAT;
uint32_t cops = SECRET_COPS;
bool debug = true;

NB nbAccess(debug);
GPRS gprsAccess;
NBUDP Udp;
Coap coap(Udp);
IPAddress iotgw_ip(coap_ip);

// Sensor
OneWire oneWire(DS18B12_PIN);
DallasTemperature sensors(&oneWire);
DHT dht(DHT_PIN, DHT_TYPE);

// Packet
MESSAGE last_message;
char buffer[256];
char str_temp0[6];
char str_temp1[6];
char str_temp2[6];
char str_temp3[6];

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, HIGH);

  // Open serial communication and wait for port to open
  Serial.begin(115200);
  //while (!Serial)
  //  ;

  /**
   * Issue a series of AT commands to the modem.
   * 
   *    - Wait for it to get ready
   *    - Disconnect from any connected networks
   *    - Set RAT (NB-IoT or LTE-M)
   *    - Apply changes and save configuration
   *    - Turn radio on
   *    - Check attachment
   *    - Set operator
   */

  Serial.print("Waiting for modem to get ready...");
  MODEM.begin();
  while (!MODEM.noop())
    ;
  Serial.println("done.");

  Serial.print("Disconnecting from network...");
  MODEM.send("AT+COPS=2");
  MODEM.waitForResponse(2000);
  Serial.println("done.");

  Serial.print("Setting Radio Access Technology to NB-IoT or LTE-M (7 is for LTE-M and 8 is for NB-IoT)...");
  MODEM.sendf("AT+URAT=%d", rat);
  MODEM.waitForResponse(2000);
  Serial.println("done.");

  Serial.print("Applying changes and saving configuration...");
  MODEM.send("AT+CFUN=15");
  do
  {
    delay(100);
    Serial.print(".");
    MODEM.noop();
  } while (MODEM.waitForResponse(1000) != 1);
  Serial.println("done.");

  // SARA R4 AT Command Manual Section 5.3: +CFUN response time UP TO 3 MIN
  Serial.print("Modem ready, turn radio on in order to configure it...");
  MODEM.send("AT+CFUN=1");
  do
  {
    delay(100);
    Serial.print(".");
    MODEM.noop();
  } while (MODEM.waitForResponse(1000) != 1);
  Serial.println("done.");

  Serial.print("Check attachment until CSQ RSSI indicator is less than 99...");
  String response;
  int status = 99;
  while (status > 31)
  {
    MODEM.send("AT+CSQ");
    MODEM.waitForResponse(2000, &response);

    // Parse response: +CSQ: <signal_power>,<qual>
    int delimeterIndex = response.indexOf(",");
    if (delimeterIndex != -1)
    {
      String sub = response.substring(6, delimeterIndex);
      status = sub.toInt(); // Will return 0 if no valid number is found
    }
    delay(1000);
  }
  Serial.println("done.");

  Serial.print("Set operator to Telenor...");
  MODEM.sendf("AT+COPS=1,2,\"%d\"", cops);
  MODEM.waitForResponse(4000);
  Serial.println("done.");

  // Check if connected and if not, reconnect
  if (nbAccess.status() != NB_READY || gprsAccess.status() != GPRS_READY)
  {
    connectNB();
  }

  // Initialize CoAP client
  coap.start();

  // Initialize DHT sensor
  dht.begin();

  digitalWrite(LED_BUILTIN, LOW);
}

void loop()
{
  digitalWrite(LED_BUILTIN, HIGH);

  // Check if connected and if not, reconnect
  if (nbAccess.status() != NB_READY || gprsAccess.status() != GPRS_READY)
  {
    connectNB();
  }

  Serial.print("Send packet to Telenor MIC... ");
  sendPacket();
  Serial.println("done.");

  // Continue CoAP operations (handle ACK, send response)
  // coap.loop();

  Serial.println("Wait 30s before sending again...");
  digitalWrite(LED_BUILTIN, LOW);
  delay(30000);
}

bool connectNB()
{
  Serial.print("Attempting to connect to the cellular network...");
  // Failed, retry
  while (nbAccess.begin(pinnumber, gprs_apn) != NB_READY || gprsAccess.attachGPRS() != GPRS_READY)
  {
    Serial.print(".");
    delay(1000);
  }
  Serial.println("done.");

  return true;
}

/**
 * FC-28 Soil Moisture sensor.
 */
void fc_28()
{
  int output_value = analogRead(FC_28_PIN);
  last_message.fc_28 = map(output_value, 0, FC_28_ANALOG_MAX, FC_28_ANALOG_MIN, 100);
}

/**
 * DS18B12 Soil temperature sensor.
 */
void ds18b12()
{
  sensors.requestTemperatures();
  last_message.ds18b12 = sensors.getTempCByIndex(0);
}

/**
 * DS18B12 Relative Humidity and Temperature sensor.
 */
void dht11()
{
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  // Check if any reads failed and exit early (to try again).
  if (isnan(h) || isnan(t))
  {
    Serial.println(F("Failed to read from DHT sensor!"));
    h = 0.0;
    t = 0.0;
  }

  // Compute heat index in Celsius (isFahreheit = false)
  float hic = dht.computeHeatIndex(t, h, false);

  last_message.dht11_t = t;
  last_message.dht11_h = h;
  last_message.dht11_hic = hic;
}

char *dtostrf(double val, signed char width, unsigned char prec, char *sout)
{
  char fmt[20];
  sprintf(fmt, "%%%d.%df", width, prec);
  sprintf(sout, fmt, val);
  return sout;
}

uint16_t sendPacket()
{
  // Get sensor readings
  fc_28();
  ds18b12();
  dht11();

  // Float to String
  dtostrf(last_message.ds18b12, 4, 2, str_temp0);
  dtostrf(last_message.dht11_t, 4, 2, str_temp1);
  dtostrf(last_message.dht11_h, 4, 2, str_temp2);
  dtostrf(last_message.dht11_hic, 4, 2, str_temp3);

  uint32_t buf_size = snprintf(buffer, sizeof(buffer), "%d,%s,%s,%s,%s",
                               last_message.fc_28,
                               str_temp0,
                               str_temp1,
                               str_temp2,
                               str_temp3);

  Serial.println(buffer);

  // Send a CoAP POST message to Telenor IoT Gateway
  uint16_t msgid = coap.send(
      iotgw_ip,          // IP address
      coap_port,         // Port
      coap_endpoint,     // CoAP endpoint
      COAP_CON,          // CoAP packet type (con, noncon, ack, reset)
      COAP_POST,         // CoAP method
      NULL,              // CoAP token
      0,                 // CoAP token length
      (uint8_t *)buffer, // Message payload
      buf_size           // Message payload length
  );

  return msgid;
}
