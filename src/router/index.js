import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IconsCreator from '../views/IconsCreator.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/creator',
    name: 'IconsCreator',
    component: IconsCreator
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
