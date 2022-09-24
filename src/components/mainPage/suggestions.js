import React from 'react'
import * as followActions from '../../actions/followunfollow'
import { useDispatch, useSelector } from 'react-redux'

function Suggestions({ users }) {
    const dispatch = useDispatch();

    const { ...state } = useSelector(state => state)

    const followuser = (userId) => {
        dispatch(followActions?.followSomeone(userId, () => {
            console.log('follow user with this id')
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
                        {users && users?.map((user, idx) => (
                            <li key={`${idx}`}>
                                <div className='flex flex-row space-x-3'>
                                    <div className="shrink-0">
                                        <img className="h-12 w-12 rounded-full" src={user?.profileImage?.url} alt={user?.profileImage?.original_filename} />
                                    </div>
                                    <div className='text-left grow'>
                                        <p>{user?.firstName}</p>
                                        <p>{user?.username}</p>
                                    </div>
                                    <div className='flex-none'>
                                        <button onClick={() => followuser(user?._id)}>Follow+</button>
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
