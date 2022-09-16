export const default_users_state = {
    users: [],
};


export const userReducer = (state = default_users_state, action) => {
    switch (action.type) {
        case "SET_USERS": {
            return {
                ...state,
                users: action.users
            };
        }

        default:
            return state;
    }
}
