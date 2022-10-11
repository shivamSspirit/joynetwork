import * as likesApi from '../apis/likedislike'

export function likePost(data, callback) {
    return async (dispatch) => {
        const response = await likesApi?.likethePost(data);
        await dispatch(setLikebyuserposts(response?.data?.posts))
        if (callback) {
            return callback();
        }
    };
}

export function dislikePost(data, callback) {
    return async (dispatch) => {
        const response = await likesApi?.dislikethePost(data);
        await dispatch(setLikebyuserposts(response?.data?.posts))
        if (callback) {
            return callback()
        }
    }
}


export function setLikebyuserposts(likebyuserposts) {
    return {
        type:"SET_LIKED_BY_POSTS",
        likebyuserposts
    };
}
