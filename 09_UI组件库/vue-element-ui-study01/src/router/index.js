import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {path: '/el-form-demo', name: 'el-form-demo', component: () => import('../views/el-form-demo.vue')},
  {path: '/el-form-rules', name: 'el-form-rules', component: () => import('../views/ElFormViewRules.vue')},
  {path: '/el-from-dynamic-validate', name: 'el-from-dynamic-validate', component: () => import('../views/el-from-dynamic-validate.vue')},
  {path: '/el-form-rules-gruop', name: 'el-form-rules-gruop', component: () => import('../views/el-form-rules-gruop.vue')},
  {path: '/el-from-number-validate', name: 'el-from-number-validate', component: () => import('../views/el-from-number-validate.vue')},
  {path: '/el-from-custom-validate', name: 'el-from-custom-validate', component: () => import('../views/el-from-custom-validate.vue')},
  {path: '/el-from-float-validate', name: 'el-from-float-validate', component: () => import('../views/el-from-float-validate.vue')},
  {path: '/el-from-price-validate', name: 'el-from-price-validate', component: () => import('../views/el-from-price-validate.vue')},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
