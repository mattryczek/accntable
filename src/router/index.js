import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  () => import('../views/Home.vue')
    },
    {
      path: '/properties',
      name: 'properties',
      component:  () => import('../views/Properties.vue')
    },
    {
      path: '/landlords',
      name: 'landlords',
      component: () => import('../views/Landlords.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    }
  ]
})

export default router
