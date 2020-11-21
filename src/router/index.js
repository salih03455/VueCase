import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JobList from '../views/JobList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/joblist',
    name: 'Job List',
    component: JobList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
