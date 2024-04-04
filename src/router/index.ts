import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Inicio',
      path: '/',
      component: () => import('../views/HomeView.vue')
    },
    {
      name: 'Nosotros',
      path: '/nosotros',
      component: () => import('../views/AboutView.vue')
    },
    {
      name: 'Contacto',
      path: '/contacto',
      component: () => import('../views/ContactoView.vue')
    },
    {
      name: 'Soporte',
      path: '/soporte',
      component: () => import('../views/SoporteView.vue')
    }
  ]
})

export default router
