import axios from "axios";
import * as authFeatures from '../utils/authUtils'

const secondaryBaseUrl = '/api/users'

export async function addpostTouserbookmark(postId){
    try {
        const response = await axios.post(`${secondaryBaseUrl}/bookmark/${postId}`,{},{ headers: { authorization: authFeatures?.getAuthCookie() } })
        return response;
    } catch (error) {
        console.log(error)
    }
}

export async function removepostFromuserbookmark(postID){
    try {
        const response = await axios.post(`${secondaryBaseUrl}/remove-bookmark/${postID}`,{},{ headers: { authorization: authFeatures?.getAuthCookie() } })  
        return response 
    } catch (error) {
       console.log(error) 
    }
}

export async function getbookMarkedPosts(){
    try {
        const response = await axios.get(`${secondaryBaseUrl}/bookmark`,{ headers: { authorization: authFeatures?.getAuthCookie() } })
        return response
    } catch (error) {
        console.error(error)
    }
}