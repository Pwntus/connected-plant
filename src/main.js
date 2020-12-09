import Vue from 'vue'
import router from '@/router'
import store from '@/store'

// Styles
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

// Libs
import '@/lib/registerServiceWorker'
import '@/lib/Amplify'

// Plugins
import vuetify from '@/plugins/vuetify'

// Misc.
import App from '@/App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
