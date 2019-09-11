import UserService from "../service";
import firebase from 'firebase';
export default {
  async createNewUser({ commit, state }, payload) {
    // We do our Api calls here
    state.isLoading = true;
    try {
      const response = await UserService.register(payload);
      const user = response.user
      if (user) {
        await user.updateProfile({
          displayName: payload.username
        });

        const loggedInUser = {
          email: payload.email,
          username: payload.username
        };

        commit('setUserObject', loggedInUser)
      }
      console.log(firebase.auth().currentUser);
    } catch (e) {
      console.log(e);
    }
    state.isLoading = false;
  },
  async loginUser({ commit }, payload) {
    try {
      const response = await UserService.login(payload);
      const user = response.user;
      const loggedInUser = {
        email: payload.email,
        username: user.displayName
      };
      commit('setUserObject', loggedInUser)
    } catch(e) {
      console.log(e)
    }
  }
}

