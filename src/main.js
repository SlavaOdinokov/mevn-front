import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.min.css'

library.add(faUserSecret)
library.add(faShoppingCart)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
