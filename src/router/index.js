import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/teachers' },
    { path: '/teachers', name: 'teachersList', component: () => import('../views/teachers/TeachersListView.vue') },
    { 
      path: '/teachers/:id', 
      name: 'teacherDetail', 
      component: () => import('../views/teachers/TeacherDetailView.vue'),
      children: [
        { path: '/teachers/:id/contact', name: 'contact', component: () => import('../views/messages/ContactTeacherView.vue') },
      ]
    },
    { path: '/register', name: 'register', component: () => import('../views/teachers/TeacherRegistrationView.vue') },
    { path: '/messages', name: 'messages', component: () => import('../views/messages/MessagesReceivedView.vue') },
    { path: '/:notFound(.*)', component: () => import('../views/NotFoundView.vue') }
    // { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') }
  ]
})

export default router
