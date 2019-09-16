import api from '../api'

const PostService = {
	create(data) {
		return new Promise((resolve, reject) => {
			api.post('/posts', data, (response) => {
				resolve(response)
			}, error => {
				reject(error)
			})
		})
	}
}

export default PostService;
