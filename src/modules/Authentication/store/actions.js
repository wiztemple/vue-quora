import UserService from "../service";
import firebase from 'firebase';
export default {
  async createNewUser({ commit }, payload) {
    // We do our Api calls here
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
  }
}

