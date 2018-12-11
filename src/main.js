// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Login from './views/login'
import router from './router'
import store from './store'

import './assets/css/style.css'

Vue.config.productionTip = false

//axios
import axios from 'axios'
import vueAxios from 'vue-axios'
import './lib/ajax.js'
Vue.use(vueAxios,axios)
//end

///localStorage
import Local from './lib/localstorage.js'
Vue.use(Local)
//end


new Vue({
  el: '#app',
  router,
  store,
  components: { 
    App,
    Login
   },
  template: '<App/>'
})
