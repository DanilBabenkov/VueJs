import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'
// // import jQuery from "jquery"
// import '/node_modules/bootstrap/dist/js/bootstrap.js'
// import './assets/css/material-dashboard.css'
// import './assets/css/main.css'


window.axios = axios
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
