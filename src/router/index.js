import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/teachers' },
    { path: '/teachers', name: 'teachers', component: null },
    { 
      path: '/teachers/:id', 
      name: 'teachers', 
      component: null,
      children: [
        { path: '/contact', name: 'contact', component: null },
      ]
    },
    { path: '/register', name: 'register', component: null },
    { path: '/messages', name: 'messages', component: null },
    { path: '/:notFound(.*)', component: null }
    // { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') }
  ]
})

export default router
