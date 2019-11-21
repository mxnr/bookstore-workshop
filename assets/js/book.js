import Vue from 'vue';
import BookHome from './components/BookHome';
import Vuetify from 'vuetify';
import Routes from './routes.js';
import store from './store/store';
Vue.use(Vuetify);

// eslint-disable-next-line no-new
new Vue({
  store,
  el: '#book',
  data: {
    bookId: ''
  },
  router: Routes,
  template: '<book-home/>',
  components: { BookHome },
  vuetify: new Vuetify({}),
  beforeMount () {
    this.bookId = JSON.parse(this.$el.attributes['data-book'].value);
    console.log(this.bookId);
    console.log(global.App);
  }
});
