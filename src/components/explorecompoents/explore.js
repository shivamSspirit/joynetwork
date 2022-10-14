import React from 'react'
import { useSelector } from 'react-redux'
import SinglePost from '../post/singlepostcard'

function ExploreFedds() {
  const { posts } = useSelector(state => state?.postReducer)
  return (
    <div className='h-screen'>
      <h2 className='text-center text-[22px]'>Explore post</h2>
      <div className='w-full'>
        {posts&&posts?.map((post, id) => (
            <SinglePost key={`${id}`} post={post} />
          ))}
      </div>
    </div>
  )
}

export default ExploreFedds
