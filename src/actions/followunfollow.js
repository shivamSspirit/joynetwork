import * as followApis from '../apis/followUnfollow'
import { setUserData } from './auth';

export function followSomeone(data, callback) {
    return async (dispatch) => {
        // console.log('here', data)
        const response = await followApis?.followAction(data);
         dispatch(setUserData(response?.data?.user))
        // dispatch(setpostsData(response?.data?.posts))
        // dispatch(setUsertoken(response?.data?.encodedToken))
        // window.location = "auth/login"
        if (callback) {
            return callback();
        }
    };
}