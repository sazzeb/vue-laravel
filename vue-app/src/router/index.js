import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/authentication/Login.vue'
import Register from '@/components/authentication/Register.vue'
import Feed from '@/components/Feed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/products/create',
      name: 'Create',
      components: require('@/components/product/Create'),
      meta: {
        forAuth: true
      }
    },
    {
      path: '/products/:product/edit',
      name: 'Edit',
      components: require('@/components/product/Edit'),
      meta: {
        forAuth: true
      }
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})
