// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Css from './assets/css/style.css'
import Local from './lib/localstorage.js'
Vue.config.productionTip = false

Vue.use(Local)
Vue.prototype.$penglei='penglei的原型'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
