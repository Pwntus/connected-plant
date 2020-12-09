/**
 * Highcharts options docs:
 * https://api.highcharts.com/highcharts/
 */
const HIGHCHARTS_GLOBAL = {
  chart: {
    backgroundColor: 'transparent'
  },
  boost: {
    seriesThreshold: 50
  },
  title: null,
  tooltip: { enabled: false },
  credits: { enabled: false },
  legend: {
    enabled: false,
    itemStyle: {
      fontWeight: 'normal',
      color: '#FFF'
    },
    itemHoverStyle: {
      color: '#FFF'
    }
  },
  time: {
    timezoneOffset: -60 // UTC+1
  },
  xAxis: {
    lineColor: '#252624',
    gridLineColor: '#252624',
    labels: {
      style: {
        color: '#FFF'
      }
    }
  },
  yAxis: {
    title: null,
    lineColor: '#252624',
    gridLineColor: '#252624',
    labels: {
      style: {
        color: '#FFF'
      }
    }
  },
  colors: ['#FFF']
}

const dev = {
  HIGHCHARTS_GLOBAL,
  MQTT_TOPIC: `thing-update/telenor.no/Tuvas/${process.env.VUE_APP_MIC_THING_NAME}`
}

const prod = {
  HIGHCHARTS_GLOBAL,
  MQTT_TOPIC: `thing-update/telenor.no/Tuvas/${process.env.VUE_APP_MIC_THING_NAME}`
}

const config = process.env.NODE_ENV === 'development' ? dev : prod

export default {
  ...config
}
