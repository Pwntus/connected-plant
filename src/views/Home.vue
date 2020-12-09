<template lang="pug">
v-container
  init-app

  v-row.py-6(
    align="center"
    justify="center"
  )
    v-img(
      :src="require('../assets/logo.png')"
      max-width="250"
      contain
    )

  v-row.pt-12(
    align="center"
    justify="center"
  )
    v-col(cols="12" md="3")
      gauge.square(:config="gauge_soil_moisture")
    v-col(cols="12" md="3")
      gauge.square(:config="gauge_soil_temperature")
    v-col(cols="12" md="3")
      gauge.square(:config="gauge_air_humidity")
    v-col(cols="12" md="3")
      gauge.square(:config="gauge_air_temperature")

  v-row.pt-12.pb-6(
    align="center"
    justify="center"
  )
    v-chip(
      v-if="last_updated"
      color="#61aa02"
      outlined small
    )
      v-icon(left small) mdi-refresh
      | Updated {{ last_updated }}

  v-row.py-12(
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

      this.last_updated = 'now'
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
    }
  },
  mounted() {
    this.last_updated_timeout = setInterval(() => {
      if (this.latest.timestamp)
        this.last_updated = moment.unix(this.latest.timestamp).fromNow()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.last_updated_timeout)
  }
}
</script>

<style lang="stylus" scoped>
.container
  .square
    width 200px
    height 200px

  .rectangle
    height 200px
</style>
