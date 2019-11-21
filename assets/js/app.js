import Vue from 'vue';
import App from './components/App';
import store from './store/store';
import Vuetify from 'vuetify';
import Routes from './routes.js';
Vue.use(Vuetify);

// eslint-disable-next-line no-new
new Vue({
  store,
  el: '#app',
  data: {
    bookId: ''
  },
  template: '<app/>',
  components: { App },
  router: Routes,
  vuetify: new Vuetify({})
});
