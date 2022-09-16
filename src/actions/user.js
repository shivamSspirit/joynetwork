import * as userApis from '../apis/user'

export function getAllUsers(callback){
    return async (dispatch)=>{
        const response = await userApis?.getAllusers();
        await dispatch(setusersData(response?.data?.users))
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