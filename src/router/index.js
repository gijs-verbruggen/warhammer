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
    path: '/battlereports',
    name: 'Battlereports',
    component: () => import('../views/Battlereports.vue'),
    children : [{
      path : ':id',
      name : 'battlereportsSelection',
      component: () => import('../views/BattlereportsSelection.vue')
    }]
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue'),
    children : [{
      path : ':id',
      name : 'battlereportSelection',
      component: () => import('../views/BattlereportsSelection.vue')
    }]
  },
  {
    path: '/armylist',
    name: 'Armylist',
    component: () => import('../views/Armylist.vue'),
    children : [{
      path : '/aos',
      name : 'AOS',
      component: () => import('../views/ArmylistAOS.vue')
    },
    {
      path : '/40k',
      name : '40K',
      component: () => import('../views/Armylist40K.vue')
    }]
  },
  {
    path: '/tournaments',
    name: 'Tournaments',
    component: () => import('../views/Tournaments.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
