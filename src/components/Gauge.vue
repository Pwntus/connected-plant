<template lang="pug">
.gauge(:class="{ visible: config.value !== null }")
  vue-circle(
    :progress="percent"
    :fill="{ color: threshold.color }"
    :size="300"
    :thickness="15"
    line-cap="round"
    empty-fill="rgba(0, 0, 0, .3)"
    insert-mode="append"
    :show-percent="false"
    ref="roundGauge"
  )
    .font-weight-light(:style="{ color: threshold.color }")
      | {{ threshold.text }}
      br
      b {{ config.value }} {{ config.suffix }}
  .font-weight-light {{ config.title }}
</template>

<script>
import VueCircle from 'vue2-circle-progress/src/index.vue'

export default {
  name: 'Gauge',
  props: ['config'],
  components: { VueCircle },
  watch: {
    config: {
      deep: true,
      handler() {
        this.$refs.roundGauge.updateProgress(this.percent)
        this.$refs.roundGauge.updateFill(this.threshold.color)
      }
    }
  },
  computed: {
    percent() {
      let pc = this.config.value / this.config.max
      pc = pc > 100 ? 100 : pc
      return pc * 100
    },
    threshold() {
      let th = { text: '', class: 'green' }
      for (let cur of this.config.thresholds) {
        if (this.config.value < cur.th) th = cur
      }
      return th
    }
  }
}
</script>

<style lang="stylus">
.gauge
  width 100%
  height 100%
  position relative
  text-align center
  font-size 15px
  color #FFF
  opacity 0

  -webkit-transition opacity 1s ease-in-out
  -moz-transition opacity 1s ease-in-out
  -ms-transition opacity 1s ease-in-out
  -o-transition opacity 1s ease-in-out
  transition opacity 1s ease-in-out

  &.visible
    opacity 1

  .font-weight-light
    line-height 10px
    display block

  .circle
    width 100%
    height 100%
    position relative

    canvas
      max-width calc(100% - 30px)
      max-height calc(100% - 30px)

      // f*** u flexbox
      padding 0
      margin auto
      display block
      position absolute
      top 0
      bottom 0
      left 0
      right 0

    .font-weight-light
      font-size 12px
      line-height 22px
      margin 0
      padding 0

      b
        font-size 20px
</style>
