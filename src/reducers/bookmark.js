export const bookmark_posts_state = {
    bookmarkPosts: [],
};


export const bookmarkPostReducer = (state = bookmark_posts_state, action) => {
    switch (action.type) {
        case "SET_BOOKMARK_POSTS": {
            return {
                ...state,
                bookmarkPosts: action.bookmarkposts
            };
        }


        default:
            return state;
    }
}
