import React, { useState, useEffect, useCallback } from 'react'
import CreatePost from '../post/createPost'
import Suggestions from './suggestions'
import { NavLink, useNavigate } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import PostCard from '../post/postCard'

import * as postActions from '../../actions/post'
import * as userActions from '../../actions/user'
import * as authActions from '../../actions/auth'
import * as authCookies from '../../utils/authUtils'
import ModalforAction from '../modals/modal'

import PostComment from '../postComment/postcomment'
import SideBar from './sidebar'
import { conforms } from 'lodash'
import ExploreFedds from '../explorecompoents/explore'
import Likes from '../likes/likes'
import Bookmark from '../bookmark/bookmark'

function MainComponent() {
  const [userpostss, setUserPosts] = useState()
  const [alluser, setAllusers] = useState()
  const [currentuserpost, setCurrentUserPosts] = useState()
  const [popup, setPopup] = useState(false)
  const { postId } = useParams()
  const { posts, userPosts } = useSelector(state => state?.postReducer);
  const { currentUser } = useSelector(state => state?.settings)
  const { users } = useSelector(state => state?.userReducer);
  const { likePosts } = useSelector(state => state?.likePostReducer);
  const location = useLocation()
  const { ...postid } = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate()


  useEffect(() => {
    if (!authCookies?.getAuthTokenKey()) {
      navigate('/auth/login')
    } else {
      navigate('/')
    }
  }, [authCookies?.getAuthTokenKey()])

  // useEffect(() => {
  //   setSuggestions(
  //     users.filter(
  //       (currUser) =>
  //         !authUser.following.find(
  //           (innerCurrUser) => innerCurrUser._id === currUser._id
  //         ) && currUser.username !== authUser.username
  //     )
  //   );
  // }, [authUser, users]);

  useEffect(() => {
    dispatch(userActions?.getAllUsers(() => {
      console.log('fetching users')
    }))

    dispatch(postActions?.getAllPosts(() => {
      console.log('getting posts')
    }))
  }, [])

  useEffect(() => {
    if (userPosts) {
      setCurrentUserPosts(userPosts)
    }
  }, [userPosts])

  useEffect(() => {
    if (currentUser) {
      console.log('currentUser', currentUser)
      dispatch(postActions?.getallPostsForuser(currentUser?.username, () => {
        console.log('getting all post from user')
      }))
    }
  }, [currentUser, posts])

  useEffect(() => {
    if (users) {
      setAllusers(users)
    }
    if (posts) {
      setUserPosts(posts)
    }
  }, [users, posts])

  // here components differenet from origgin location

  const ReturnComponentsfromorigin = () => {
    if (location.pathname === '/') {
      return (
        <div className='flex flex-col gap-6 basis-1/2 sm:flex-grow'>
          <div className='h-full  overflow-scroll'>
            <CreatePost />
            <PostCard posts={currentuserpost} popup={popup} setPopup={setPopup} />
          </div>
        </div>
      )
    }

    if (location.pathname === '/explore') {
      return (
        <div className='flex flex-col gap-6 basis-1/2 sm:flex-grow overflow-scroll'>
          <div className='h-full overflow-scroll'>
            <ExploreFedds />
          </div>
        </div>
      )
    }

    if (location.pathname === '/likes') {
      return (
        <div className='flex flex-col gap-6 basis-1/2 sm:flex-grow overflow-scroll'>
          <div className='h-full overflow-scroll'>
            <Likes />
          </div>
        </div>
      )
    }

    if (location.pathname = '/bookmarks') {
      return (
        <div className='flex flex-col gap-6 basis-1/2 sm:flex-grow overflow-scroll'>
          <div className='h-full overflow-scroll'>
            <Bookmark />
          </div>
        </div>
      )
    }

  }

  return (
    <div className='w-full bg-sky-blue relative h-full' >
      <div className='flex flex-row w-full'>
        <SideBar />
        <>
          {ReturnComponentsfromorigin()}
        </>
        <div className='basis-1/4'>
          <Suggestions users={users} />
        </div>
      </div>
    </div>
  )
}

export default MainComponent