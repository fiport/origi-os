const PeopleHome = () => import('./pages/PeopleHome.vue');

export default [
  {
    path: '/pessoas',
    name: 'People',
    component: PeopleHome,
    meta: {
      requiresAuth: true,
    }
  }
];
