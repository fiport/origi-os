const PaymentHome = () => import('./pages/PaymentHome.vue');

export default [
  {
    path: '/pagamentos',
    name: 'Payments',
    component: PaymentHome,
    meta: {
      requiresAuth: true,
    }
  }
];
