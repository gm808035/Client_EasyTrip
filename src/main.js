import Vue from 'vue'
import VueRouter from "vue-router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from "./store/routes";
import Master from "./components/layouts/Master";
import {store} from "./store/store";
import * as VueGoogleMaps from 'vue2-google-maps'
import VueSingleSelect from "vue-single-select";
Vue.component('vue-single-select', VueSingleSelect);
import VueFlashMessage from 'vue-flash-message';
Vue.use(VueRouter)

// Vue.use(AutoCompleteComponent)
Vue.use(VueFlashMessage);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBMMqcN3G7mbEVfFWaifv8K1ja2HKPhf3s',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'home',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { Master },
  template: '<Master/>'
})
