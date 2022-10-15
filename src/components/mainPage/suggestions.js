import React, { useEffect, useState } from 'react'
import * as followActions from '../../actions/followunfollow'
import { useDispatch, useSelector } from 'react-redux'

function Suggestions({ users }) {
    const dispatch = useDispatch();
    const [followeduser, setFollowedUser] = useState()
    const { currentuserfollwowing, currnetuserfollowers } = useSelector(state => state?.followerPostReducer)

    useEffect(() => {
        if (users) {
            setFollowedUser(users)
        }
    }, [users])

    const followuser = (userId) => {
        dispatch(followActions?.followSomeone(userId, () => {
            console.log('follow user')
        }))

    }
    const unfollowUser = (userID) => {
        dispatch(followActions?.unfollowSomeone(userID, () => {
            console.log("unflowwing user")
        }))
    }

    return (
        <>
            <div className='max-w-sm aspect-auto suggest-container'>
                <div className='p-6 mx-auto bg-gray-600 rounded-xl shadow-lg flex flex-col gap-1'>
                    <div className='flex flex-row space-x-36'>
                        <p>Who to folllow</p>
                        <p>show more-</p>
                    </div>
                    <ul className='flex flex-col gap-3'>
                        {followeduser && followeduser?.map((user, id) => (
                            <li key={`${id}`}>
                                <div className='flex flex-row space-x-3'>
                                    <div className="shrink-0">
                                        <img className="h-12 w-12 rounded-full" src={user?.profileImage?.url} alt={user?.profileImage?.original_filename} />
                                    </div>
                                    <div className='text-left grow'>
                                        <p>{user?.firstName}</p>
                                        <p>{user?.username}</p>
                                    </div>
                                    <div className='flex-none'>
                                        {currentuserfollwowing?.find(user => user?._id === user?._id) ? <button onClick={() => unfollowUser(user?._id)}>UnFollow-</button>: <button onClick={() => followuser(user?._id)}>Follow+</button>}
                                    </div>
                                </div>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Suggestions
