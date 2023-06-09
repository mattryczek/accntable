import { createRouter, createWebHistory } from 'vue-router'

import Home from '@views/Home.vue'

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
      redirect: { name: 'properties' }
    },
    {
      path: '/property/:id',
      name: 'property',
      component: () => import('@views/PropertyDetail.vue')
    },
    {
      path: '/managers',
      name: 'managers',
      component: () => import('@views/Managers.vue')
    },
    {
      path: '/manager/:id',
      name: 'manager',
      component: () => import('@views/ManagerDetail.vue')
    },
    {
      path: '/manager',
      redirect: { name: 'managers' }
    },
    {
      path: '/tenants',
      name: 'tenants',
      component: () => import('@views/Tenants.vue')
    },
    {
      path: '/tenant/:id',
      name: 'tenant',
      component: () => import('@views/TenantDetail.vue')
    },
    {
      path: '/tenant',
      redirect: { name: 'tenants' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@views/About.vue')
    }
  ]
})

export default router
