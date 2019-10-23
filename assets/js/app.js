import Vue from 'vue';
import App from './components/App';
import store from './store/store';

// eslint-disable-next-line no-new
new Vue({
  store,
  el: '#app',
  data: {
    bookId: ''
  },
  template: '<app/>',
  components: { App },
});
