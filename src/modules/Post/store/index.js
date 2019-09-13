import state from "./state";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

const postStore = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
export default postStore;
