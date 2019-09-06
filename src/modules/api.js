import axios from 'axios';

const api = {
	request(method, url, data, successCb = null, errorCb = null) {
		axios.request({
			url,
			data,
			method: method.toLowerCase(),
		}).then(successCb).catch(errorCb);
	},

	get(url, successCb = null, errorCb = null) {
		return this.request('get', url, {}, successCb, errorCb);
	},

	post(url, data, successCb = null, errorCb = null) {
		return this.request('post', url, data, successCb, errorCb);
	},

	put(url, data, successCb = null, errorCb = null) {
		return this.request('put', url, data, successCb, errorCb);
	},

	delete(url, data = {}, successCb = null, errorCb = null) {
		return this.request('delete', url, data, successCb, errorCb);
	},

	/**
	 * Init the service.
	 */
	init() {
		axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

		// Intercept the request to make sure the token is injected into the header.
		axios.interceptors.request.use((e) => {
			return e;
		});

		// Intercept the response and…
		axios.interceptors.response.use(response => {
			return response.data;
		}, error => {
			return Promise.reject(error.data)
		});
	},
};

export default api;
