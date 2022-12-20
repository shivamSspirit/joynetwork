import React from 'react'
import { useSelector } from 'react-redux'
import SinglePost from '../post/singlepostcard'
import Loader from '../loader/Loader'
import { Link } from 'react-router-dom'
import { useInfiniteScroll } from '../../hoooks/useInfiniteScroll'


function ExploreFedds() {
  const { posts } = useSelector(state => state?.postReducer);
  const { loading } = useSelector(state => state?.loaderReducer)
  const { feed, hasMorePosts, setObserverRef } = useInfiniteScroll(posts);


  return (
    <div className='h-screen'>
      <h2 className='text-center text-[22px]'>Explore post</h2>
      <div className='w-full'>
        {loading ? <Loader /> : feed?.length > 0 ?
          (
            <>
              {feed && feed?.map((post, id) => (
                <SinglePost key={`${id}`} post={post} />
              ))}
              {hasMorePosts ? <span ref={setObserverRef}><Loader /></span> : <> <p className="text-center text-gray-500 dark:text-gray-400 mt-8 text-sm">
                You have reached the end.
              </p></>}
            </>) : (
            <p className="text-center font-semibold mt-8">
              No post to show.
              <Link to="/" className="text-blue-500 hover:underline ml-1">
                Feed
              </Link>
            </p>
          )}
      </div>
    </div>
  )
}

export default ExploreFedds
