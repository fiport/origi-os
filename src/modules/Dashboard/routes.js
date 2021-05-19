const Dashboard = () => import('./pages/Dashboard.vue');

export default [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    }
  }
];
