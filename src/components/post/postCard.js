import React from 'react'
import { useSelector } from 'react-redux'
import SinglePost from './singlepostcard'

function PostCard(props) {
    const { ...state } = useSelector(state => state);
    return (
        <div className='w-full h-full'>
            {state?.postReducer?.userPosts
                && state?.postReducer?.userPosts?.map((post, id) => (
                    <SinglePost key={id} post={post} />
                ))}
        </div>
    )
}

export default PostCard
