import Vue from 'vue';
import App from './components/App';
import Vuetify from 'vuetify';
import Routes from './routes.js';
import store from './store/store';

import en from '../../config/routes.yaml';
import cn from '../../config/routes.yaml';
import sp from '../../config/routes.yaml';

const messages = {
  en,
  cn,
  sp
};

console.log(doc);

Vue.use(Vuetify);

// eslint-disable-next-line no-new
new Vue({
  store,
  el: '#app',
  router: Routes,
  template: '<app/>',
  components: { App },
  vuetify: new Vuetify({}),
  i18n: new VueI18n({
    locale: 'en',
    messages
  }),
});
