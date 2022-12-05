import axios from 'axios'

const secondaryBaseUrl = "/api/auth";

export async function register(data) {
	try {
		const response =await axios.post(`${secondaryBaseUrl}/signup`, data)
		return response;
	} catch (error) {
		console.error(error)
	}
}

export async function login(data) {
	try {
		const response = await axios.post(`${secondaryBaseUrl}/login`, data);
		console.log("res",response)
		return response
	} catch (error) {
		console.error(error)
	}
}

