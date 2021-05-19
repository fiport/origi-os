import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import {http} from '@/configurations/axios';
import {getToken} from '@/configurations/token';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import vuetify from './plugins/vuetify';
import store from "./store";
import VueSnackbar from 'vue-snack'
import 'vue-snack/dist/vue-snack.min.css'

Vue.use(VueSnackbar, {position: 'bottom-right', time: 3000})




Vue.use(VueToast, {
  position: 'top-right',
  duration: 8000,
  dismissible: true,
  pauseOnHover: true,
  type: 'default'
});


Vue.config.productionTip = false;
Vue.prototype.$http = http;

Vue.prototype.$alert = {
  ...Vue.prototype.$toast,
  error: (message, optional) => {
    Vue.prototype.$toast.error(message || 'Ocorreu um erro inesperado', optional);
  },
};

router.beforeEach((to, from, next) => {
  const auth = !!getToken();

  if (to.matched.some(record => record.name !== 'Login')) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!auth) {
        Vue.$toast.default('É necessário estar logado!');
        next();
        // next({
        //   path: '/',
        // });
      } else {
        next();
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
