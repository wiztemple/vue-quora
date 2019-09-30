import api from '../api'

const PostService = {
	create(data) {
		return new Promise((resolve, reject) => {
			api.post('posts', data, (response) => {
				resolve(response)
			}, error => {
				reject(error)
			})
		})
	},
	getPosts() {
		return new Promise((resolve, reject) => {
			api.get('posts', (response) => {
				resolve(response)
			}, error => {
					reject(error)
			})
		})
	},
	getPost(id) {
		return new Promise((resolve, reject) => {
			api.get(`posts/:${id}`, (response) => {
			 resolve(response)
			}, error => {
					reject(error)
		 })
	 })
	},
	editPost(id, data) {
		return new Promise((resolve, reject) => {
			api.put(`posts/:${id}`, data, (response) => {
				resolve(response)
			}, error => {
					reject(error)
			})
		})
	},
	deletePost(id) {
		return new Promise((resolve, reject) => {
			api.delete(`posts/:${id}`, (response) => {
				resolve(response)
			}, error => {
					reject(error)
			})
		})
	}
}

export default PostService;
