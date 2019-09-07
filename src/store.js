import Vue from "vue";
import Vuex from "vuex";
import AuthStore from "./modules/Authentication/store";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AuthStore
  },
  plugins: [createPersistedState({
    paths: ['AuthStore.user']
  })],
});
