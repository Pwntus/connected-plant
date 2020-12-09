<template lang="pug">
#init-app
</template>

<script>
import { mapActions } from 'vuex'
import config from '@/config'
import { MQTT } from '@/lib/MQTT'

export default {
  name: 'InitApp',
  data: () => ({
    proc: null,
    timeout: null
  }),
  methods: {
    ...mapActions('Cognito', ['signInUser']),
    ...mapActions('App', ['message', 'getLatest', 'getHistogram'])
  },
  async mounted() {
    try {
      // Sign in user if possible
      if (
        process.env.VUE_APP_MIC_USERNAME &&
        process.env.VUE_APP_MIC_PASSWORD
      ) {
        await this.signInUser({
          username: process.env.VUE_APP_MIC_USERNAME,
          password: process.env.VUE_APP_MIC_PASSWORD
        })
        MQTT.subscribe([config.MQTT_TOPIC], ({ value }) => {
          try {
            const topic = Object.getOwnPropertySymbols(value).map(
              s => value[s]
            )[0]
            this.message({ topic, value })
          } catch (e) {
            console.log(e)
          }
        })
        await this.getLatest()
        await this.getHistogram()
        this.proc = async () => {
          try {
            await this.getHistogram()
          } catch (e) {
            console.log(e)
          }
        }
        this.timeout = setInterval(this.proc, 5 * 60 * 1000)
      }
    } catch (e) {
      console.log(e)
      alert('Failed to init app!')
    }
  },
  beforeDestroy() {
    clearInterval(this.timeout)
  }
}
</script>
