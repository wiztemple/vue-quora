export default {
  switchModal(state, payload) {
    state.showModal = payload
  },
  getAllPosts(state, payload) {
    state.posts = payload
  },
  addPost(state, payload) {
    state.posts.unshift(payload);
  }
}