export const default_user_state = {
	currentUser: undefined,
};


export const settings = (state = default_user_state, action) => {
	switch (action.type) {
		case "SET_USER_DATA": {
			return {
				...state,
				currentUser: action.currentUser
			};
		}
		default:
			return state;
	}
}
