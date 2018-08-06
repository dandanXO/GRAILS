import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import display from '@/components/diplay'
import p1 from '@/components/p1'
import p2 from '@/components/p2'
import p3 from '@/components/p3'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/diplay',
      name: 'display',
      component: display
    },
    {
      path: '/p1',
      name: 'p1',
      component: p1
    },
    {
      path: '/p2',
      name: 'p2',
      component: p2
    },
    {
      path: '/p3',
      name: 'p3',
      component: p3
    }
  ]
})
