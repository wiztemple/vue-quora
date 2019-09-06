import UserService from "../service";

export default {
  async createNewUser({ commit }, payload) {
    // We do our Api calls here
    try {
      const user = UserService.register(payload);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  }
}

