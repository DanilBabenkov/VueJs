import Vue from 'vue'
import store from './store'
import Vuex from 'vuex'
import MyPlugin from './components/Func'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'
import jQuery from "jquery"

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/material-dashboard.css'
import './assets/css/material-dashboard-rtl.css'
import './assets/css/main.css'
//sdsdxcfdg
Vue.use(Vuex);
Vue.use(MyPlugin);
// const anime = require('anime');
window.axios = axios
Vue.use(VueResource)
Vue.config.productionTip = false
window.$ = window.jQuery = jQuery;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
