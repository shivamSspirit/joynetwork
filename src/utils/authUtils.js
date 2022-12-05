import cookies from 'js-cookie';

const AUTH_COOKIE_NAME = 'AUTH_TOKEN';
const AUTH_USER_COOKIE = 'AUTH_USER';

export function isAuthCookiePresent() {
	return (
		{
		Auth:cookies.get(AUTH_COOKIE_NAME) && cookies.get(AUTH_COOKIE_NAME) !== null,
		user:cookies.get(AUTH_USER_COOKIE) && cookies.get(AUTH_USER_COOKIE) !==null
		}
	);
}


export function saveAuthCookie(cookieValue) {
	cookies.set(AUTH_COOKIE_NAME, cookieValue);
}

export function saveUserCookie(cookieValue){
	cookies.set(AUTH_USER_COOKIE,cookieValue)
}

export function removeUserCookie(){
	cookies.remove(AUTH_USER_COOKIE)
}

export function removeAuthCookie() {
	cookies.remove(AUTH_COOKIE_NAME);
}

export function getAuthCookie() {
	return cookies.get(AUTH_COOKIE_NAME);
}

export function getUserCookie(){
	return cookies.get(AUTH_USER_COOKIE);
}

export function getAuthTokenKey() {
	return AUTH_COOKIE_NAME;
}