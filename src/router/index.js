import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path : '/battlereports',
    name : 'BattlereportsAos',
    component: () => import('../views/battlereports/BattlereportsAos.vue'),
  },
  {
    path : '/battlereports/aos/:id',
    name : 'BattlereportsSelection',
    component: () => import('../views/battlereports/BattlereportsSelection.vue'),
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue'),
  },
  {
    path : '/armylist/aos',
    name : 'ArmylistAos',
    component: () => import('../views/armylist/ArmylistAOS.vue'),
  },
  {
    path: '/leaderboards',
    name: 'Leaderboards',
    component: () => import('../views/Leaderboards.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
