const ServiceHome = () => import('./pages/ServiceHome.vue');

export default [
  {
    path: '/servicos',
    name: 'Service',
    component: ServiceHome,
    meta: {
      requiresAuth: true,
    }
  }
];
