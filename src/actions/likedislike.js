import * as likesApi from '../apis/likedislike'

export function likePost(data, callback) {
    return async (dispatch) => {
        const response = await likesApi?.likethePost(data);
        console.log('res from likes',response)
        await dispatch(setLikeposts(response?.data?.posts))
        if (callback) {
            return callback();
        }
    };
}

export function dislikePost(data,callback) {
    return async (dispatch) => {
        const response = await likesApi?.dislikethePost(data);
        await dispatch(setLikeposts(response?.data?.posts))
        if (callback) {
            return callback()
        }
    }
}


// export function getallPostsForuser(data, callback) {
//     return async (dispatch) => {
//         const response = await postApis?.getAllpostFromuser(data);
//         await dispatch(setPostsforSingleuser(response?.data?.posts))
//         if (callback) {
//             return callback()
//         }
//     }
// }




export function setLikeposts(likeposts) {
    return {
        type: "SET_LIKE_POSTS",
        likeposts
    };
}

// export function setPostsforSingleuser(userPosts) {
//     return {
//         type: "SET_POSTS_OF_USER",
//         userPosts
//     }
// }
