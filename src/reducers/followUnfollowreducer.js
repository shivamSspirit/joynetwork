export const follower_posts_state = {
    followersPosts: [],
    followuser: null,
    currnetuserfollowers: [],
    currentuserfollwowing: []
};


export const followerPostReducer = (state = follower_posts_state, action) => {
    switch (action.type) {
        case "SET_FOLLOWERS": {
            return {
                ...state,
                followersPosts: action.followers,
                followuser: action.followUser,
                currnetuserfollowers: action.currnetuserfollowers,
                currentuserfollwowing: action.currentuserfollwowing
            };
        }

        default: {
            return state;
        }

    }
}
