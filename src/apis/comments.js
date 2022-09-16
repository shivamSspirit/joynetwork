import axios from "axios";
import * as authFeatures from '../utils/authUtils'

const secondaryBaseUrl = '/api/comments'


// public

export async function getAllcommentsforPost(postId) {
    try {
        const response = await axios.get(`${secondaryBaseUrl}/${postId}`);
        return response
    } catch (error) {
        console.error(error)
    }
}

// private


export async function addSinglecomment(postId, commentData) {
    try {
        const response = await axios.post(`${secondaryBaseUrl}/add/${postId}`, { commentData }, { headers: { authorization: authFeatures?.getAuthCookie() } })
        return response
    } catch (error) {
        console.error(error)
    }
}



export async function editCommentforPost(commentData, postId, commentID) {
    try {
        const response = await axios.post(`${secondaryBaseUrl}/edit/${postId}/${commentID}`, { commentData }, { headers: { authorization: authFeatures?.getAuthCookie() } })
        return response
    } catch (error) {
        console.error(error)
    }
}


export async function deleteCommentforPost(postId, commentID) {
    try {
        const response = await axios.delete(`${secondaryBaseUrl}/delete/${postId}/${commentID}`, { headers: { authorization: authFeatures?.getAuthCookie() } })
        return response
    } catch (error) {
        console.error(error)
    }
}

export async function addUpvoteToComment(postId, commentID) {
    try {
        const response = await axios.post(`${secondaryBaseUrl}/upvote/${postId}/${commentID}`, { headers: { authorization: authFeatures?.getAuthCookie() } })
        return response
    } catch (error) {
        console.log(error)
    }
}



export async function addDownvoteToComment(postId, commentID) {
    try {
        const response = await axios.post(`${secondaryBaseUrl}/downvote/${postId}/${commentID}`, { headers: { authorization: authFeatures?.getAuthCookie() } })
        return response
    } catch (error) {
        console.log(error)
    }
}