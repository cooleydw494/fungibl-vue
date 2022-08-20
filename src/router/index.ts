import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const host = window.location.host;
const parts = host.split('.');
const domainLength = 3; // route1.example.com => domain length = 3

let routes: Array<RouteRecordRaw>;
const appRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/submit',
  },
  {
    path: '/submit',
    name: 'submit',
    component: () => import('../components/views/Submit.vue'), // lazy-loads
  },
  {
    path: '/pull',
    name: 'pull',
    component: () => import('../components/views/Pull.vue'), // lazy-loads
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: () => import('../components/views/MarketingSite.vue') // lazy-loads
  },
]

const marketingRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/views/MarketingSite.vue'), // lazy-loads
  },
]

if (parts.length === (domainLength - 1) || parts[0] === 'www' || parts[0] === 'staging') {
  routes = marketingRoutes
} else if (parts[0] === 'app' || parts[0] === 'staging-app') {
  routes = appRoutes
} else {
  routes = appRoutes
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
