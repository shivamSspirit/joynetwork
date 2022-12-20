export const default_posts_state = {
    posts: [],
    userPosts: undefined,
    pagedposts:[],
    loader:false
};


export const postReducer = (state = default_posts_state, action) => {
    switch (action.type) {
        case "SET_POSTS": {
            return {
                ...state,
                posts: action.posts
            };
        }

        case "SET_POSTS_OF_USER": {
            return {
                ...state,
                posts: state?.posts,
                userPosts: action?.userPosts
            }
        }

        case "SET_PAGED_POST":{
            return{
                ...state,
                posts: state?.posts,
                userPosts: action?.userPosts,
                pagedposts:action?.pagedPosts

            }
        }

         case "SET_LOADER": {
            return {
                ...state,
                loader: true
            }
        }

        case "UNSET_LOADER": {
            return {
                ...state,
                loader: false
            }
        }
        
        default:
            return state;
    }
}
