import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'

import 'style/reset.css'
import 'style/border.css'
import 'style/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
