import Vue from 'vue';
import App from './components/App';
import Vuetify from 'vuetify';
import Routes from './routes.js';
import store from './store/store';
Vue.use(Vuetify);

// eslint-disable-next-line no-new
new Vue({
  store,
  el: '#app',
  router: Routes,
  template: '<app/>',
  components: { App },
  vuetify: new Vuetify({})
});
