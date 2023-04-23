import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/properties',
      name: 'properties',
      component: () => import('@views/Properties.vue')
    },
    {
      // We don't want a null property so if they browse
      // manually to /property and don't supply an ID we
      // send them to /properties instead.
      path: '/property',
      redirect: { name: 'properties'}
    },
    {
      path: '/property/:id',
      name: 'property',
      component: () => import('@views/PropertyDetail.vue')
    },
    {
      path: '/landlords',
      name: 'landlords',
      component: () => import('@views/Landlords.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@views/About.vue')
    }
  ]
})

export default router
