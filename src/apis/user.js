import axios from 'axios'
import * as authFeature from '../utils/authUtils'

const secondaryBaseUrl = "/api/users"

export async function getAllusers(){
    try {
        const response = await axios.get(secondaryBaseUrl);
        return response;
    } catch (error) {
        console.error(error)
    }
}

export async function getSingleuser(userID){
    try {
        const response = await axios.get(`${secondaryBaseUrl}/${userID}`)
        return response
    } catch (error) {
        console.error(error)
    }
}

export async function editUser(userData){
    try {
        const response = await axios.post(`${secondaryBaseUrl}/edit`,{userData},{headers:{authorization: authFeature?.getAuthCookie()}})
        return response
    } catch (error) {
        console.error(error)
    }
}