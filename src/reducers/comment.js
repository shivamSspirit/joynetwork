export const comments_state = {
    comments: [],
};


export const commentsReducer = (state = comments_state, action) => {
    switch (action.type) {
        case "SET_COMMENTS": {
            return {
                ...state,
                comments: action.comments
            };
        }

        default:
            return state;
    }
}
