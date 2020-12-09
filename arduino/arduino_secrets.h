// Network related configuration
#define SECRET_PINNUMBER     ""              // SIM card PIN number
#define SECRET_GPRS_APN      "telenor.iotgw" // Telenor IoT Gateway APN
#define SECRET_COAP_IP       0x012010AC      // Telenor IoT Gateway IP address (172.16.32.1)
#define SECRET_COAP_ENDPOINT "/"             // Telenor IoT Gateway CoAP endpoint
#define SECRET_COAP_PORT     5683            // Telenor IoT Gateway CoAP port
#define SECRET_RAT           7               // Radio Access Technology (7 is for LTE-M and 8 is for NB-IoT)
#define SECRET_COPS          24201           // Telenor network shortname

#define FC_28_PIN            A6
#define FC_28_ANALOG_MIN     0.70
#define FC_28_ANALOG_MAX     1043
#define DS18B12_PIN          0
#define DHT_PIN              1
#define DHT_TYPE             DHT11

typedef struct {
  int fc_28;
  float ds18b12;
  float dht11_t;
  float dht11_h;
  float dht11_hic;
} MESSAGE;
