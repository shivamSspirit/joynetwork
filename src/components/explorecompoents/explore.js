import React from 'react'
import { useSelector } from 'react-redux'
import SinglePost from '../post/singlepostcard'

function ExploreFedds() {
  const { ...state } = useSelector(state => state)
  return (
    <div className='h-screen'>
      <div className='w-full'>
        {state?.postReducer?.posts
          && state?.postReducer?.posts?.map((post, id) => (
            <SinglePost key={id} post={post} />
          ))}
      </div>
    </div>
  )
}

export default ExploreFedds
