import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import temp1 from '@/components/Temp1'

Vue.use(Router)

export default new Router({
  base: '/disk',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/t1',
      name: 't1',
      component: temp1
    }, {
      path: '/t1/t1',
      name: 't11',
      component: temp1
    }
  ]
})
