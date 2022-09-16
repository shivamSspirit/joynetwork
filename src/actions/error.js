export function setError(error) {
	return {
		type : "SET_ERROR",
		error
	};
}

export function unsetError() {
	return {
		type : "UNSET_ERROR"
	};
}