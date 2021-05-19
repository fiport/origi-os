const ProductHome = () => import('./pages/ProductHome.vue');

export default [
  {
    path: '/produtos',
    name: 'Product',
    component: ProductHome,
    meta: {
      requiresAuth: true,
    }
  }
];
