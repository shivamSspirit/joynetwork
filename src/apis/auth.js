import axios from 'axios'

const secondaryBaseUrl = "/api/auth";

export async function register(data) {
	try {
		const response =await axios.post(`${secondaryBaseUrl}/signup`, data)
		console.log('res from register',response)
		return response;
	} catch (error) {
		console.log(error)
	}
}

export async function login(data) {
	try {
		const response = await axios.post(`${secondaryBaseUrl}/login`, data)
		console.log('her',response)
		return response
	} catch (error) {
		console.log(error)
	}
}

