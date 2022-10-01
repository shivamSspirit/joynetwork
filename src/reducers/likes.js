export const like_posts_state = {
    likePosts: [],
};


export const likePostReducer = (state = like_posts_state, action) => {
    switch (action.type) {
        case "SET_LIKE_POSTS": {
            return {
                ...state,
                likePosts: action.likeposts
            };
        }

        default: {
			return state;
		}
            
    }
}
