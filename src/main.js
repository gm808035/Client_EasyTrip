import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueRouter from "vue-router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import store from './store'
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}


Vue.use(VueRouter);
 Axios.defaults.baseURL = 'http://localhost:3000/api/';
new Vue({
  el: '#app',
  render: h => h(App)
})

