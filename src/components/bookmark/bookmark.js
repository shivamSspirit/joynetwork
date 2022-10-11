import React from 'react'
import { useSelector } from 'react-redux'
import SinglePost from '../post/singlepostcard';

function Bookmark() {
  const { bookmarkPosts } = useSelector(state => state?.bookmarkPostReducer);
  return (
    <div className='h-screen overflow-scroll'>
      <h2 className='text-center text-[22px]'>Bookmark post</h2>

      <div className='w-full h-full'>
        {bookmarkPosts && bookmarkPosts?.map((post, id) => (
          <SinglePost key={id} post={post} />
        ))}
      </div>

    </div>
  )
}

export default Bookmark
