const Login = () => import('./pages/Login.vue');

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  }
];
