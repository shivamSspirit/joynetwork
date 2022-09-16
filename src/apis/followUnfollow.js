import axios from "axios";
import * as authFeatures from '../utils/authUtils'

const secondaryBaseUrl = '/api/users'

export async function followAction(followUserId) {
    try {
        const response = await axios.post(`${secondaryBaseUrl}/follow/${followUserId}`, {}, { headers: { authorization: authFeatures?.getAuthCookie() } })
        return response
    } catch (error) {
        console.error(error)
    }
}


export async function unfollowAction(followUserId) {
    try {
        const response = await axios.post(`${secondaryBaseUrl}/unfollow/${followUserId}`, {}, { headers: { authorization: authFeatures?.getAuthCookie() } })
        return response
    } catch (error) {
        console.error(error)
    }
}
