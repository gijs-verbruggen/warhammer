import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home.vue'),
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
    component: () => import('../views/gallery/Gallery.vue'),
  },
  {
    path : '/armylist/aos',
    name : 'ArmylistAos',
    component: () => import('../views/armylist/ArmylistAOS.vue'),
  },
  {
    path: '/leaderboards',
    name: 'Leaderboards',
    component: () => import('../views/leaderboards/Leaderboards.vue'),
  },
  {
    path: '/custom',
    name: 'Custom',
    component: () => import('../views/custom/Custom.vue'),
  },
  {
    path: '/builder',
    name: 'Builder',
    component: () => import('../views/builder/Builder.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('../views/home/Home.vue'),
    name: 'Home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
})

export default router
