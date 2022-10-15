import axios from "axios";
import * as authFeatures from '../utils/authUtils'

const secondaryBaseUrl = '/api/posts'
const authorization = authFeatures?.getAuthCookie()

// public

export async function getAllposts() {
    try {
        const response = await axios.get(secondaryBaseUrl);
        return response
    } catch (error) {
        console.error(error)
    }
}

export async function getSinglepost(postId) {
    try {
        const response = await axios.get(`${secondaryBaseUrl}/${postId}`)
        return response
    } catch (error) {
        console.error(error)
    }
}

// /api/posts/user/:username

export async function getAllpostFromuser(username) {
    try {
        const response = await axios.get(`${secondaryBaseUrl}/user/${username}`)
        return response
    } catch (error) {
        console.error(error)
    }
}


// private

export async function postSinglePost(postData) {
    try {
        const response = await axios.post(`${secondaryBaseUrl}`, { postData }, { headers: { authorization: authFeatures?.getAuthCookie() } })
        return response
    } catch (error) {
        console.error(error)
    }
}

export async function deleteSinglepost(postID) {
    try {
        const response = await axios.delete(`${secondaryBaseUrl}/${postID}`, { headers: { authorization: authFeatures?.getAuthCookie() } })
        return response
    } catch (error) {
        console.error(error)
    }
}


// /api/posts/edit/:postId
export async function editSinglePost(postID, postData) {
    try {
        const response = await axios.post(`${secondaryBaseUrl}/edit/${postID}`, { postData }, { headers: { authorization: authFeatures?.getAuthCookie() } })
        return response
    } catch (error) {
        console.error(error)
    }
}

// paginated post

export async function getpaginatedPost(pagenum){
    try {
        const response = await axios.post(`${secondaryBaseUrl}/${pagenum}`)
        return response
    } catch (error) {
        console.error(error)
    }
}