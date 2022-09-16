import axios from "axios";
import * as authFeatures from '../utils/authUtils'

const secondaryBaseUrl = '/api/posts'

export async function likethePost(postId){
    try {
        const response = await axios.post(`${secondaryBaseUrl}/like/${postId}`,{},{ headers: { authorization: authFeatures?.getAuthCookie() } })
        return response;
    } catch (error) {
        console.log(error)
    }
}

export async function dislikethePost(postID){
    try {
        const response = await axios.post(`${secondaryBaseUrl}/dislike/${postID}`,{},{ headers: { authorization: authFeatures?.getAuthCookie() } })  
        return response 
    } catch (error) {
       console.log(error) 
    }
}