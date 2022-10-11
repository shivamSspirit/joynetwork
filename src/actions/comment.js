import * as commentApi from '../apis/comments'

export function getAllcommentsforPost(data, callback) {
    return async (dispatch) => {
        const response = await commentApi?.getAllcommentsforPost(data);
        await dispatch(setComments(response?.data?.comments))
        if (callback) {
            return callback();
        }
    };
}

export function addSinglecomment(data,callback) {
    return async (dispatch) => {
        const response = await commentApi?.addSinglecomment(data.postId,data.commentData);
        await dispatch(setComments(response?.data?.comments))
        if (callback) {
            return callback()
        }
    }
}


export function editCommentforPost(data,callback) {
    return async (dispatch) => {
        const response = await commentApi?.editCommentforPost(data.commentData, data.postId, data.commentID);
        await dispatch(setComments(response?.data?.comments))
        if (callback) {
            return callback()
        }
    }
}


export function setComments(comments) {
    return {
        type: "SET_COMMENTS",
        comments
    };
}
