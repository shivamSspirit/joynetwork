import * as postApis from '../apis/post'
import * as likesApi from '../apis/likedislike'

export function createPost(data, callback) {
    return async (dispatch) => {
        const response = await postApis?.postSinglePost(data);
         dispatch(setpostsData(response?.data?.posts))
        if (callback) {
            return callback();
        }
    };
}

export function getAllPosts(callback) {
    return async (dispatch) => {
        const response = await postApis?.getAllposts();
         dispatch(setpostsData(response?.data?.posts))
        if (callback) {
            return callback()
        }
    }
}


export function getallPostsForuser(data, callback) {
    return async (dispatch) => {
        const response = await postApis?.getAllpostFromuser(data);
         dispatch(setPostsforSingleuser(response?.data?.posts))
        if (callback) {
            return callback()
        }
    }
}

export function likePost(data, callback) {
    return async (dispatch) => {
        const response = await likesApi?.likethePost(data);
        dispatch(setpostsData(response?.data?.posts))
        if (callback) {
            return callback();
        }
    };
}

export function dislikePost(data, callback) {
    return async (dispatch) => {
        const response = await likesApi?.dislikethePost(data);
        dispatch(setpostsData(response?.data?.posts))
        if (callback) {
            return callback()
        }
    }
}


export function getpaginatedPost(pagenum,callback){
    return async (dispatch)=>{
        const response = await postApis?.getpaginatedPost(pagenum);
         dispatch(setpagedpostData(response?.data?.posts));
        if(callback){
            return callback()
        }
    }
}

export function deletePostbyid(postID,callback){
    return async(dispatch)=>{
        const response = await postApis?.deleteSinglepost(postID);
        dispatch(setpostsData(response?.data?.posts))
        if(callback){
            return callback()
        }
    }
}


export function setpostsData(posts) {
    return {
        type: "SET_POSTS",
        posts
    };
}

export function setpagedpostData(pagedPosts){
    return {
        type:"SET_PAGED_POST",
        pagedPosts
    }
}

export function setPostsforSingleuser(userPosts) {
    return {
        type: "SET_POSTS_OF_USER",
        userPosts
    }
}
