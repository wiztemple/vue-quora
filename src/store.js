import Vue from "vue";
import Vuex from "vuex";
import AuthStore from "./modules/Authentication/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AuthStore
  }
});
