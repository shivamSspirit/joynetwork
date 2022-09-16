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

        // case "SET_POSTS_OF_USER": {
        //     return {
        //         ...state,
        //         posts: state?.posts,
        //         userPosts: action?.userPosts
        //     }
        // }


        default:
            return state;
    }
}
