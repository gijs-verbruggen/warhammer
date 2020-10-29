import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
      path : '/battlereports/40k',
      name : 'Battlereports40k',
      component: () => import('../views/battlereports/Battlereports40k.vue'),
      children : [{
        path : '/:id',
        name : 'BattlereportsSelection40k',
        component: () => import('../views/battlereports/BattlereportsSelection.vue'),
      }]
    },
    {
      path : '/battlereports/aos',
      name : 'BattlereportsAos',
      component: () => import('../views/battlereports/BattlereportsAos.vue'),
      children : [{
        path : '/:id',
        name : 'BattlereportsSelectionAos',
        component: () => import('../views/battlereports/BattlereportsSelection.vue'),
      }]
    },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue'),
  },
  {
    path: '/armylist',
    name: 'Armylist',
    component: () => import('../views/Armylist.vue'),
    children : [{
      path : '/armylist/aos',
      name : 'ArmylistAos',
      component: () => import('../views/ArmylistAOS.vue'),
    },
    {
      path : '/armylist/40k',
      name : 'Armylist40k',
      component: () => import('../views/Armylist40K.vue'),
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
