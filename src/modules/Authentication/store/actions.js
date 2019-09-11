import UserService from "../service";
import firebase from 'firebase';
export default {
  async createNewUser({ commit, state }) {
    // We do our Api calls here
    state.isLoading = true;
    try {
      const response = await UserService.register(state.form);
      const user = response.user
      if (user) {
        await user.updateProfile({
          displayName: state.form.username
        });

        const loggedInUser = {
          email: state.form.email,
          username: state.form.username
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
  },

  validateFormInputs({commit, state}) {
    Object.keys(state.form).forEach(key => {
      const error = {
        [key]: {
          isDirty: state.form[key] == '' || state.form[key].length < 5
        }
      }
      commit('setErrors', error)
    })
  }
}

