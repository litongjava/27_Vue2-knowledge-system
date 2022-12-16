import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/find",
    name:"Find",
    redirect:"/find/follow",
    component:() => import("../views/Find.vue"),
    children:[
      {
        path:"follow",
        name:"Follow",
        component:() =>import("../views/FindSub/Follow.vue")
      },
      {
        path:"cookbook",
        name:"Cookbook",
        component:() =>import("../views/FindSub/Cookbook.vue")
      },
      {
        path:"community",
        name:"Community",
        component:() =>import("../views/FindSub/Community.vue")
      }
    ]
  },
  {
    path:"/cart",
    name:"Cart",
    component:() => import("../views/Cart.vue")
  },
  {
    path:"/order",
    name:"Order",
    component:() => import("../views/Order.vue")
  },
  {
    path:"/user",
    name:"User",
    component:() => import("../views/User.vue")
  }
]

const router = new VueRouter({
  // mode:"history",
  routes,
  linkActiveClass:"active"
})

export default router
