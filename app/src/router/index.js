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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/userDashboard',
    name: 'userDashboard',
    component: () => import( '../views/User.vue')
  },
  {
    path: '/secretaryDashboard',
    name: 'secretaryDashboard',
    component: () => import( '../views/Secretary.vue')
  },
  {
    path: '/doctorDashboard',
    name: 'doctorDashboard',
    component: () => import( '../views/Doctor.vue')
  },
  {
    path: '/teacherDashboard',
    name: 'teacherDashboard',
    component: () => import( '../views/Teacher.vue')
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: () => import( '../views/Sign.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
