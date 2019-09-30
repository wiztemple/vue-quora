import PostService from '../service'

export default {
  switchModal({commit}, payload) {
    commit('switchModal', payload)
  },
  async createSinglePost({commit}, payload) {
    try {
      const response = await PostService.create(payload)
      console.log(response)
    } catch (e) {
      console.log(e)
    }

  },
  async getPosts({ commit }) {
    const response = await PostService.getPosts()
    console.log(response)
    commit('getAllPosts', response)
  }
}
