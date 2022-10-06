export const like_posts_state = {
    likedbyusers: [],
};


export const likePostReducer = (state = like_posts_state, action) => {
    switch (action.type) {
        case "SET_LIKED_BY_POSTS": {
            return {
                ...state,
                likedbyusers: action.likebyuserposts
            };
        }

         default: {
		 	return state;
		 }
            
    }
}
