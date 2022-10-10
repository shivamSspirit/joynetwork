import * as postApis from '../apis/post'

export function createPost(data, callback) {
    return async (dispatch) => {
        const response = await postApis?.postSinglePost(data);
        await dispatch(setpostsData(response?.data?.posts))
        if (callback) {
            return callback();
        }
    };
}

export function getAllPosts(callback) {
    return async (dispatch) => {
        const response = await postApis?.getAllposts();
        await dispatch(setpostsData(response?.data?.posts))
        if (callback) {
            return callback()
        }
    }
}


export function getallPostsForuser(data, callback) {
    return async (dispatch) => {
        const response = await postApis?.getAllpostFromuser(data);
        await dispatch(setPostsforSingleuser(response?.data?.posts))
        if (callback) {
            return callback()
        }
    }
}

export function getpaginatedPost(pagenum,callback){
    return async (dispatch)=>{
        const response = await postApis?.getpaginatedPost(pagenum);
        console.log('res',response)
        await dispatch(setpagedpostData(response?.data?.posts));

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
