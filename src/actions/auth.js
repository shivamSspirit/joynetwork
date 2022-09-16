import * as authApis from '../apis/auth'
import * as AuthUtils from '../utils/authUtils'

export function register(data, callback) {
	return async (dispatch) => {
		const response = await authApis.register(data);
		console.log('res from register', response)
		AuthUtils?.saveAuthCookie(response?.data?.encodedToken)
		AuthUtils?.saveUserCookie(response?.data?.createdUser?.username)
		if (callback) {
			return callback();
		}
	};
}


export function login(data, callback) {
	return async (dispatch) => {
		const response = await authApis.login(data);
		console.log('log', response)
		AuthUtils?.saveAuthCookie(response?.data["encodedToken"])
		AuthUtils?.saveUserCookie(response?.data?.foundUser?.username)
		dispatch(setUserData(response?.data?.foundUser))
		if (callback) {
			return callback();
		}
	}
}

export function logout(){
	AuthUtils?.removeAuthCookie();
	window.location = '/auth/login'
}



export function setUserData(currentUser) {
	return {
		type: "SET_USER_DATA",
		currentUser
	};
}

export function setUsertoken(currenttoken) {
	return {
		type: "SET_ENCODED_TOKEN",
		currenttoken
	};
}