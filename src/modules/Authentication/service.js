import firebase from 'firebase'

const userService = {
	register({email, password}) {
		return firebase.auth().createUserWithEmailAndPassword(email, password)
	},
	login({ email, password }) {
		return firebase.auth().signInWithEmailAndPassword(email, password)
	}
}

export default userService;
