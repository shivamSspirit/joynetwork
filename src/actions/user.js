import * as userApis from '../apis/user'
import { setUserData } from './auth';

export function getAllUsers(callback){
    return async (dispatch)=>{
        const response = await userApis?.getAllusers();
        dispatch(setusersData(response?.data?.users))
        if(callback){
            return callback()
        }
    } 
}

export function editUserProfile(userdata,callback){
    return async (dispatch)=>{
        const response = await userApis?.editUser(userdata);
        dispatch(setUserData(response?.data?.user));
        if(callback){
            return callback()
        }
    }
}


export function setusersData(users) {
    return {
        type: "SET_USERS",
        users
    };
}