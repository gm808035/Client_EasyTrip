import Vue from 'vue'
import Router from 'vue-router'
import store from "./store";
import Login from "../views/Login";
import Secure from "../views/Secure"
import Register from "../views/Register";
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [

    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/secure',
      name: 'secure',
      component: Secure,
      meta: {
        requiresAuth: true
      }
    },

  ]
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})
export default router
