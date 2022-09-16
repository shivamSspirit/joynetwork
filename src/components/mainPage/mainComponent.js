import React, { useState, useEffect, useCallback } from 'react'
import CreatePost from '../post/createPost'
import Suggestions from './suggestions'
import { NavLink, useNavigate } from 'react-router-dom'
import * as authCookies from '../../utils/authUtils'

import { useSelector, useDispatch } from 'react-redux'
import homeIcon from '../../assest/home.png'
import eploreIcon from '../../assest/explore.png'
import bookmark from '../../assest/saved.png'
import likeIcon from '../../assest/heart.png'
import PostCard from '../post/postCard'

import * as postActions from '../../actions/post'
import * as userActions from '../../actions/user'
import * as authActions from '../../actions/auth'
import ModalforAction from '../modal'

function MainComponent() {
  const [userpostss, setUserPosts] = useState()
  const [alluser, setAllusers] = useState()
  const [currentuserpost, setCurrentUserPosts] = useState()

  const [popup,setPopup] = useState(false)


  const { posts, userPosts } = useSelector(state => state?.postReducer);
  const { currentUser } = useSelector(state => state?.settings)
  const { users } = useSelector(state => state?.userReducer);

  const dispatch = useDispatch();

  const navigate = useNavigate()


  useEffect(()=>{
    if(!authCookies?.getAuthTokenKey()){
      navigate('/auth/login')
    }else{
      navigate('/')
    }
  },[authCookies?.getAuthTokenKey()])

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
      console.log('currentUser',currentUser)
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


  return (
    <div className='w-full bg-sky-blue relative' >
      <div className='flex flex-row w-full'>

        <div className='container h-full basis-1/4 bg-slate-600 w-full'>
          <ul className='flex flex-col justify-start items-start w-1/2 m-auto gap-6'>
            <li>
              <div className='flex flex-row gap-8'>
                <span className=''><img className='h-6 w-6' src={homeIcon} alt='home' /></span>
                <span className=''><NavLink to={'#home'}>Home</NavLink></span>
              </div>
            </li>

            <li>
              <div className='flex flex-row gap-8'>
                <span><img className='h-6 w-6' src={eploreIcon} alt='explore' /></span>
                <span><NavLink to={'#explore'}>Explore</NavLink></span>
              </div>
            </li>

            <li>
              <div className='flex flex-row gap-8'>
                <span><img className='h-6 w-6' src={bookmark} alt='bookmark' /></span>
                <span><NavLink to={'#bookmarks'}>Bookmarks</NavLink></span>
              </div>
            </li>

            <li>
              <div className='flex flex-row gap-8'>
                <span><img className='h-6 w-6' src={likeIcon} alt='liked' /></span>
                <span><NavLink to={'#likedPost'}>LikedPost</NavLink></span>
              </div>
            </li>

            <li className='w-full'>
              <div className='w-full'>
                <button className='w-full md:w-1/2 bg-black border rounded text-center text-white'>post</button>
              </div>
            </li>

            <li className='w-full'>
              <div className='w-full'>
                <button className='w-full md:w-1/2 bg-black border rounded text-center text-white' onClick={()=>authActions?.logout()}>Logout</button>
              </div>
            </li>



          </ul>
        </div>

        {/* side to bottom */}

        <div className='lg:hidden container basis-1/4 sm:flex-grow sm:w-screen bg-slate-600 w-full border-r-4 border-indigo-500 absolute bottom-0'>
          <ul className='flex flex-row justify-center items-center w-1/2 m-auto space-x-6 gap-10'>
            <li>
              <div className='flex flex-row gap-8'>
                <span className=''><img className='h-6 w-6' src={homeIcon} alt='home' /></span>
              </div>
            </li>

            <li>
              <div className='flex flex-row gap-8'>
                <span><img className='h-6 w-6' src={eploreIcon} alt='explore' /></span>
              </div>
            </li>

            <li>
              <div className='flex flex-row gap-8'>
                <span><img className='h-6 w-6' src={bookmark} alt='bookmark' /></span>
              </div>
            </li>

            <li>
              <div className='flex flex-row gap-8'>
                <span><img className='h-6 w-6' src={likeIcon} alt='liked' /></span>
              </div>
            </li>
            <li>
              <div className='flex flex-row gap-8'>
                <span><img className='h-6 w-6' src={likeIcon} alt='liked' /></span>
              </div>
            </li>
          </ul>
        </div>

        {/* end */}
        <div className='flex flex-col gap-6 basis-1/2 sm:flex-grow'>
          <div className='overflow-y-scroll'>
          <CreatePost />
          <PostCard posts={currentuserpost} popup={popup} setPopup={setPopup} />
          {/* <ModalforAction popup={popup} setPopup={setPopup}/> */}
          </div>
        </div>
        <div className='basis-1/4'>
          <Suggestions users={users} />
        </div>
      </div>
    </div>
  )
}

export default MainComponent