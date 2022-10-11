import * as followApis from '../apis/followUnfollow'


export function followSomeone(data, callback) {
    return async (dispatch) => {
        const response = await followApis?.followAction(data);
        await dispatch(setFollowers(response?.data?.user, response?.data?.followUser, response?.data?.followUser?.followers, response?.data?.user?.following))
        if (callback) {
            return callback();
        }
    };
}

export function unfollowSomeone(data, callback) {
    return async (dispatch) => {
        const response = await followApis?.unfollowAction(data);
        dispatch(setFollowers(response?.data?.user, response?.data?.followUser))
        if (callback) {
            return callback();
        }
    }
}

export function setFollowers(followers, followUser, currnetuserfollowers, currentuserfollwowing) {
    return {
        type: "SET_FOLLOWERS",
        followers,
        followUser,
        currentuserfollwowing,
        currnetuserfollowers
    }
}




// export function setFollowing(following){
//     return{
//         type:"SET_FOLLOWING",
//         following
//     }
// }