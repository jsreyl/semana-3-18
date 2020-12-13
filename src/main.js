import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const base = axios.create({
  // baseURL : 'https://glacial-everglades-74306.herokuapp.com' //Professor
  // baseURL : 'http://localhost:3000/'
  // baseURL : 'https://peaceful-river-55991.herokuapp.com' //Class
  baseURL : 'https://glacial-cove-40185.herokuapp.com/' //Semana-3-18 repo
})
Vue.prototype.$http = base

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
