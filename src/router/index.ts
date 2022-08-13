import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// These routes use route level code-splitting -- import('path-to-component')
// this generates a separate chunk (about.[hash].js) for each route
// which is lazy-loaded when the route is visited.
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/submit',
  },
  {
    path: '/submit',
    name: 'submit',
    component: () => import('../views/Submit.vue'), // lazy-loads
  },
  {
    path: '/roll',
    name: 'roll',
    component: () => import('../views/Roll.vue'), // lazy-loads
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
