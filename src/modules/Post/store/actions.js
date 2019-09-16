import PostService from '../service'

export default {
  switchModal({commit}, payload) {
    commit('switchModal', payload)
  },

  createSinglePost({commit}, payload) {
    try {
      const response = PostService.create(payload)
      console.log(response)
    } catch (e) {
      console.log(e)
    }

  }
}
