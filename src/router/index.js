import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Second from '@/views/Second'
import Third from '@/views/Third'

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
    },{
      path: '/third',
      name: 'Third',
      component: Third
    },
  ]
})