import { createRouter, createWebHistory } from 'vue-router';
import NotFoundView from '@/views/NotFoundView.vue';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../layouts/MainLayout.vue'),
      children: [{ path: '/', name: "HomeView", component: () => import('@/views/HomeView.vue') }],
    },
    {
      path: '/questions',
      name: "questions",
      component: () => import('../layouts/MainLayout.vue'),
      children: [{ path: '/', name:'questions', component: () => import('@/views/NotFoundView.vue') }],
    },
    {
      path: '/discussions',
      component: () => import('../layouts/MainLayout.vue'),
      children: [{ path: '/', name: 'discussions', component: () => import('@/views/NotFoundView.vue') }],
    },
    {
      path: '/governance',
      component: () => import('../layouts/MainLayout.vue'),
      children: [{ path: '/', name: 'governance', component: () => import('@/views/NotFoundView.vue') }],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFoundView,
    }
  ]
});

export default router;
