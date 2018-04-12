// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// after installation of view resource we import to link it to the laravel application
import VueResource from 'vue-resource'

import Auth from './packages/auth/Auth'
import swal from 'sweetalert'
import VeeValidate from 'vee-validate'

Vue.use(VueResource)
Vue.use(Auth)
Vue.use(VeeValidate)
Vue.http.options.root = 'http://localhost:8000'
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()
// Vue.config.productionTip = false
Vue.http.interceptors.push((request, next) => {
  next(response => {
    if (response.status === 404) {
      swal(response.status.toString(), response.body.error, 'error')
    } else if (response.status === 500) {
      swal(response.status.toString(), 'We are currently having problem with our server, please try again later', 'error')
    }
  })
})

router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (Vue.auth.isAuthenticated()) {
        next({
          path: '/feed'
        })
      } else next()
    } else if (to.matched.some(record => record.meta.forAuth)) {
      if (!Vue.auth.isAuthenticated()) {
        next({
          path: '/login'
        })
      } else next()
    } else next()
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
