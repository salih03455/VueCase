import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JobList from '../views/JobList'
import JobDetail from '../views/JobDetail'

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
  },
  {
    path: '/jobdetail/:id',
    name: 'Job Detail',
    component: JobDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
