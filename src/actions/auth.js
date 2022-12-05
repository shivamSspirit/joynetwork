import * as authApis from '../apis/auth'
import * as AuthUtils from '../utils/authUtils'
import * as followApis from '../apis/followUnfollow'


export function register(data, callback) {
	return async (dispatch) => {
		const response = await authApis.register(data);
		console.log('res register', response)
		AuthUtils?.saveAuthCookie(response?.data?.encodedToken)
		AuthUtils?.saveUserCookie(response?.data?.createdUser?.username)
		dispatch(setNewUser(response?.data?.createdUser))
		if (callback) {
			return callback();
		}
	};
}

export function login(data, callback) {
	return async (dispatch) => {
		const response = await authApis.login(data);
		console.log('rs fromlogin', response)
		AuthUtils?.saveAuthCookie(response?.data?.encodedToken)
		AuthUtils?.saveUserCookie(response?.data?.foundUser?.username)
		dispatch(setUserData(response?.data?.foundUser))
		if (callback) {
			return callback();
		}
	}
}

export function followSomeone(data, callback) {
	return async (dispatch) => {
		const response = await followApis?.followAction(data);
		dispatch(setUserData(response?.data?.user))
		if (callback) {
			return callback();
		}
	};
}

export function unfollowSomeone(data, callback) {
	return async (dispatch) => {
		const response = await followApis?.unfollowAction(data);
		dispatch(setUserData(response?.data?.user))
		if (callback) {
			return callback();
		}
	}
}

export function logout() {
	AuthUtils?.removeAuthCookie();
	AuthUtils?.removeUserCookie();
	window.location = '/auth/login'
}

export function setNewUser(newUser) {
	return {
		type: "SET_NEW_USER",
		newUser
	}
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