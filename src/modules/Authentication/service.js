import firebase from 'firebase'

const userService = {
	register({email, password}) {
		return firebase.auth().createUserWithEmailAndPassword(email, password)
	}
}

export default userService;
