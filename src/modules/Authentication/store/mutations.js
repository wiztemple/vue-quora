export default {
	setUserObject(state, payload) {
		state.user = payload
	},

	setFormFields(state, {field, value}) {
		state.form[field] = value
	},

	setErrors(state, obj) {
		state.errors = {...state.errors, ...obj}
	}
};