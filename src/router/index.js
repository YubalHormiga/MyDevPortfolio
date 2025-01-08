import { createRouter, createWebHistory } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeroSection,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/project/:projectName', // Cambié la ruta para hacerla dinámica
      name: 'project-detail',
      component: () => import('../components/ProjectDetail.vue'),
      props: true, // Permite pasar los parámetros de la ruta como props al componente
    },
  ],
})

export default router
