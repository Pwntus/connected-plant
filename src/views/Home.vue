<template lang="pug">
v-container
  init-app

  v-row.py-12.mb-12(justify="center")
    v-col(cols="3")
      video(autoplay loop muted)
        source(
          src="../assets/logo.webm"
          type="video/webm"
        )
        img(src="../assets/logo.png")
    v-col(cols="12" md="9" lg="6")
      .text-h2.font-weight-bold.mb-3 Hi, I'm an LTE-M connected plant.
      .text-h6.font-weight-light.grey--text.text--lighten-2.mb-6 I send data every 30s about my surroundings and well-being so that my human can hopefully take care of me.
      a.text-h6.font-weight-bold(
        href="https://github.com/Pwntus/connected-plant"
        title="Pwntus/connected-plant"
        target="_new"
      )
        v-icon.mb-1(left dark large) mdi-github
        | Check out how I was made on GitHub
    v-spacer

  v-row.mb-6(no-gutters)
    v-col
      .text-h4.font-weight-bold My current stats
    v-col.text-right
      v-chip(
        v-if="last_updated"
        color="grey"
        outlined small
      )
        v-icon(left small) mdi-refresh
        | Updated {{ last_updated }}
    v-col(cols="12")
      .text-subtitle-1.font-weight-light.grey--text.text--lighten-2 Latest reported value, updated live

  v-row.pb-12(
    align="center"
    justify="center"
  )
    v-col(cols="12" sm="6" md="3")
      gauge.square(:config="gauge_soil_moisture")
    v-col(cols="12" sm="6" md="3")
      gauge.square(:config="gauge_soil_temperature")
    v-col(cols="12" sm="6" md="3")
      gauge.square(:config="gauge_air_humidity")
    v-col(cols="12" sm="6" md="3")
      gauge.square(:config="gauge_air_temperature")

  v-row.pt-12.mt-6.mb-4(no-gutters)
    v-col
      .text-h4.font-weight-bold Stats over time
    v-col.text-right
      v-chip(
        v-if="last_updated_histogram"
        color="grey"
        outlined small
      )
        v-icon(left small) mdi-refresh
        | Updated {{ last_updated_histogram }}
    v-col(cols="12")
      .text-subtitle-1.font-weight-light.grey--text.text--lighten-2 As viewed over 24h, aggregated over 5m

  v-row.pb-12(
    align="center"
    justify="center"
  )
    v-col.my-6(cols="12" md="6")
      graph.rectangle(:config="graph_soil_moisture")
    v-col(cols="12" md="6")
      graph.rectangle(:config="graph_soil_temperature")
    v-col(cols="12" md="6")
      graph.rectangle(:config="graph_air_humidity")
    v-col(cols="12" md="6")
      graph.rectangle(:config="graph_air_temperature")
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
import InitApp from '@/components/InitApp'
import Gauge from '@/components/Gauge'
import Graph from '@/components/Graph'

export default {
  name: 'Home',
  components: {
    InitApp,
    Gauge,
    Graph
  },
  data: () => ({
    last_updated: null,
    last_updated_histogram: null,
    last_updated_timeout: null,
    gauge_soil_moisture: {
      value: null,
      min: 0.0,
      max: 100.0,
      title: 'Soil Moisture',
      suffix: '%',
      thresholds: [
        { th: 100, text: 'Very wet', color: '#61aa02' },
        { th: 75, text: 'Wet', color: '#ff9900' },
        { th: 50, text: 'Dry', color: '#ff0000' },
        { th: 25, text: 'Very dry', color: '#990099' }
      ]
    },
    gauge_soil_temperature: {
      value: null,
      min: 0.0,
      max: 60.0,
      title: 'Soil Temperature',
      suffix: '°C',
      thresholds: [
        { th: 100, text: 'Warm', color: '#ff0000' },
        { th: 22, text: 'Moderate', color: '#61aa02' },
        { th: 20, text: 'Cold', color: '#071b54' },
        { th: 15, text: 'Very cold', color: '#990099' }
      ]
    },
    gauge_air_humidity: {
      value: null,
      min: 0.0,
      max: 100.0,
      title: 'Air Humidity',
      suffix: '%',
      thresholds: [
        { th: 100, text: 'Very humid', color: '#071b54' },
        { th: 75, text: 'Humid', color: '#ff9900' },
        { th: 50, text: 'Comfortable', color: '#61aa02' },
        { th: 30, text: 'Dry', color: '#990099' }
      ]
    },
    gauge_air_temperature: {
      value: null,
      min: 0.0,
      max: 60.0,
      title: 'Air Temperature',
      suffix: '°C',
      thresholds: [
        { th: 100, text: 'Warm', color: '#ff0000' },
        { th: 22, text: 'Moderate', color: '#61aa02' },
        { th: 20, text: 'Cold', color: '#071b54' },
        { th: 15, text: 'Very cold', color: '#990099' }
      ]
    },
    graph_soil_moisture: {
      data: null,
      title: 'Soil Moisture',
      suffix: '%',
      color: '#61aa02',
      min: 0,
      max: 100
    },
    graph_soil_temperature: {
      data: null,
      title: 'Soil Temperature',
      suffix: '°C',
      color: '#61aa02',
      min: 0,
      max: 60
    },
    graph_air_humidity: {
      data: null,
      title: 'Air Humidity',
      suffix: '%',
      color: '#61aa02',
      min: 0,
      max: 100
    },
    graph_air_temperature: {
      data: null,
      title: 'Air Temperature',
      suffix: '°C',
      color: '#61aa02',
      min: 0,
      max: 60
    }
  }),
  computed: mapState('App', ['latest', 'histogram']),
  watch: {
    latest(val) {
      this.gauge_soil_moisture.value = val.soil_moisture
      this.gauge_soil_temperature.value = val.soil_temperature
      this.gauge_air_humidity.value = val.air_humidity
      this.gauge_air_temperature.value = val.air_temperature

      this.last_updated = moment.unix(val.timestamp).fromNow()
    },
    histogram(val) {
      this.graph_soil_moisture.data = val.map(
        ({ timestamp, soil_moisture }) => ({ x: timestamp, y: soil_moisture })
      )
      this.graph_soil_temperature.data = val.map(
        ({ timestamp, soil_temperature }) => ({
          x: timestamp,
          y: soil_temperature
        })
      )
      this.graph_air_humidity.data = val.map(({ timestamp, air_humidity }) => ({
        x: timestamp,
        y: air_humidity
      }))
      this.graph_air_temperature.data = val.map(
        ({ timestamp, air_temperature }) => ({
          x: timestamp,
          y: air_temperature
        })
      )

      if (val.length <= 0) return
      const { timestamp } = val[val.length - 1]
      this.last_updated_histogram = moment.unix(timestamp / 1000).fromNow()
    }
  },
  mounted() {
    this.last_updated_timeout = setInterval(() => {
      if (this.latest.timestamp)
        this.last_updated = moment.unix(this.latest.timestamp).fromNow()

      if (this.histogram.length <= 0) return
      const { timestamp } = this.histogram[this.histogram.length - 1]
      if (timestamp)
        this.last_updated_histogram = moment.unix(timestamp / 1000).fromNow()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.last_updated_timeout)
  }
}
</script>

<style lang="stylus" scoped>
.container
  color #ffffff

  a, a:visited, a:active
    text-decoration none
    color #FFF

  video
    width 100%
    max-width 250px

  .square
    width 200px
    height 200px
    margin 0 auto

  .rectangle
    height 200px
</style>
