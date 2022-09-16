import * as bookmarkApi from '../apis/bookmark'

export function addPostToBookMark(data, callback) {
    return async (dispatch) => {
        const response = await bookmarkApi?.addpostTouserbookmark(data);
        await dispatch(setBookmarkposts(response?.data?.bookmarks))
        if (callback) {
            return callback();
        }
    };
}

export function removePostFromBookMark(data,callback) {
    return async (dispatch) => {
        const response = await bookmarkApi?.removepostFromuserbookmark(data);
        await dispatch(setBookmarkposts(response?.data?.bookmarks))
        if (callback) {
            return callback()
        }
    }
}


export function getallBookmarkPosts(callback) {
    return async (dispatch) => {
        const response = await bookmarkApi?.getbookMarkedPosts();
        await dispatch(setBookmarkposts(response?.data?.bookmarks))
        if (callback) {
            return callback()
        }
    }
}


export function setBookmarkposts(bookmarkposts) {
    return {
        type: "SET_BOOKMARK_POSTS",
        bookmarkposts
    };
}
