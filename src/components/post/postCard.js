import React from 'react'
import { useSelector } from 'react-redux'
import SinglePost from './singlepostcard'
import Loader from '../loader/Loader'

function PostCard() {
    const { ...state } = useSelector(state => state);
    const setofhomeposts = new Set();
    state?.settings?.currentUser?.following?.forEach(({ username }) => setofhomeposts.add(username))
    const homeposts = state?.postReducer?.posts?.filter(({ username }) => state.settings.currentUser?.username === username || setofhomeposts.has(username));

    return (
        <div className='w-full h-full'>
            {homeposts ? homeposts.map((post, id) => (
                <SinglePost key={id} post={post} />
            )) : state?.postReducer?.userPosts
            && state?.postReducer?.userPosts?.map((post, id) => (
                <SinglePost key={id} post={post} />
            ))}
           {state?.postReducer?.loader&&<Loader/>}
        </div>
    )
}

export default PostCard
