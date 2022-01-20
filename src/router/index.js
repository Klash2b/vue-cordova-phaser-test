import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Second from '@/views/Second'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/second',
      name: 'Second',
      component: Second
    },
  ]
})