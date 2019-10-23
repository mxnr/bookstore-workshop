import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentJWT: '',
    books: []
  },

  getters: {
    jwt: state => state.currentJWT,
    books: state => state.books,
    jwtData: (state, getters) => state.currentJWT ? JSON.parse(atob(getters.jwt.split('.')[1])) : null,
  },

  mutations: {
    setJWT(state, jwt) {
      // When this updates, the getters and anything bound to them updates as well.
      state.currentJWT = jwt;
    },
    setBooks(state, books) {
      state.books = books;
    }
  },

  actions: {
    async fetchJWT ({ commit }, { username, password }) {
      // Perform the HTTP request.
      axios
        .post('http://localhost:8000/login_check',
          {'username': username, 'password': password}
          )
        .then(function (response) {
          commit('setJWT', response.data.token);
        });
    },
    async fetchBooks({ commit, getters }) {
      console.log(getters.jwt);
      const config = {
        headers: {
          Authorization: "Bearer " + getters.jwt
        }
      };

      axios
        .get(
          'http://localhost:8000/api/books',
          {},
          config,
        )
        .then(function (response) {
          commit('setBooks', response.data.books);
        });
    }
  }
});
