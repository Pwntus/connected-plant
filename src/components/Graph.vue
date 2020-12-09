<template lang="pug">
.chart(:class="{ visible: config.data !== null }")
  highcharts.hc(
    :options="chartOptions"
    ref="chart"
  )
</template>

<script>
import { merge } from 'lodash-es'
import Highcharts from '@/components/Highcharts'
import config from '@/config'

export default {
  name: 'Chart',
  props: ['config'],
  components: { Highcharts },
  data: () => ({
    globalOptions: JSON.parse(JSON.stringify(config.HIGHCHARTS_GLOBAL)),
    chartOptions: {}
  }),
  watch: {
    config: {
      deep: true,
      handler() {
        this.setOptions()
      }
    }
  },
  methods: {
    setOptions() {
      const localOptions = {
        title: {
          text: this.config.title,
          style: {
            color: this.config.color,
            fontSize: '15px'
          }
        },
        series: [
          {
            name: 'Data',
            type: 'spline',
            data: this.config.data
          }
        ],
        colors: [this.config.color],
        plotOptions: {
          spline: {
            lineWidth: 1,
            turboThreshold: 0,
            animation: {
              duration: 0
            },
            marker: {
              radius: 2,
              enabledThreshold: 3
            },
            dataLabels: {
              enabled: true,
              format: '{point.y} ' + this.config.suffix,
              color: this.config.color,
              backgroundColor: 'transparent',
              padding: 15,
              style: {
                textOutline: 0
                // textOutline: '1px #bbb'
              }
            }
          }
        },
        tooltip: {
          enabled: true,
          animation: false,
          valueDecimals: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          hideDelay: 0,
          shadow: false,
          padding: 16,
          useHTML: true,
          borderWidth: 0,
          borderRadius: 5,
          headerFormat: '',
          pointFormat: `
            <table cellspacing="0" cellpadding="0" style="border:none;color:#000">
              <tr>
                <td style="padding-right:8px;text-align:right">{series.name}:</td>
                <td style="font-weight:bold;text-align:left;color:#0c2231">{point.y} NOK</td>
              </tr>
              <tr>
                <td style="padding:4px 8px 0 0;text-align:right">I omløp (ca):</td>
                <td style="padding-top:4px;font-weight:bold;text-align:left;color:#0c2231">{point.n}st</td>
              </tr>
            </table>`
        },
        xAxis: {
          type: 'datetime',
          tickColor: this.config.color,
          labels: {
            style: {
              color: this.config.color
            }
          }
        },
        yAxis: {
          min: this.config.min,
          max: this.config.max,
          endOnTick: false,
          labels: {
            style: {
              color: this.config.color
            }
          }
        }
      }
      this.chartOptions = merge(this.globalOptions, localOptions)
    }
  }
}
</script>

<style lang="stylus" scoped>
.chart
  width 100%
  height 100px
  opacity 0

  -webkit-transition opacity 1s ease-in-out
  -moz-transition opacity 1s ease-in-out
  -ms-transition opacity 1s ease-in-out
  -o-transition opacity 1s ease-in-out
  transition opacity 1s ease-in-out

  &.visible
    opacity 1

  .hc
    height 100%
</style>
