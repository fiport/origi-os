import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import portugues from 'vuetify/lib/locale/pt'

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { portugues },
    current: 'portugues',
  },
});
