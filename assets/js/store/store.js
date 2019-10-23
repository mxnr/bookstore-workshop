import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentJWT: ''
  },

  getters: {
    jwt: state => state.currentJWT,
    jwtData: (state, getters) => state.currentJWT ? JSON.parse(atob(getters.jwt.split('.')[1])) : null,
  },

  mutations: {
    setJWT(state, jwt) {
      // When this updates, the getters and anything bound to them updates as well.
      state.currentJWT = jwt;
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
  }
});
