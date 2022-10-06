import * as likesApi from '../apis/likedislike'
import { setpostsData } from './post';

export function likePost(data, callback) {
    return async (dispatch) => {
        const response = await likesApi?.likethePost(data);
        await dispatch(setLikebyuserposts(response?.data?.posts?.filter(post => post?.likes?.likedBy.length > 0)))
        await dispatch(setpostsData(response?.data?.posts))
        if (callback) {
            return callback();
        }
    };
}

export function dislikePost(data, callback) {
    return async (dispatch) => {
        const response = await likesApi?.dislikethePost(data);
        await dispatch(setpostsData(response?.data?.posts))
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


export function setLikebyuserposts(likebyuserposts) {
    return {
        type: "SET_LIKED_BY_POSTS",
        likebyuserposts:likebyuserposts?.map(post=>post?.likes?.likedBy)
    };
}

// export function setPostsforSingleuser(userPosts) {
//     return {
//         type: "SET_POSTS_OF_USER",
//         userPosts
//     }
// }
