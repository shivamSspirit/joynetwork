import React, { useEffect, useState } from 'react'
import SideBar from '../mainPage/sidebar'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import * as likedislike from '../../actions/likedislike'
import * as bookmarkActions from '../../actions/bookmark'

function ProfileComponent() {
    const [currentposts, setcurrentposts] = useState(null)
    const { ...state } = useSelector(state => state);
    const location = useLocation()

    console.log('current location',location.pathname)

    console.log("state fromm profile",state)

    const dispatch = useDispatch()

    useEffect(() => {
        if (state?.settings?.currentUser) {
            setcurrentposts(state?.postReducer?.userPosts)
        }
    }, [state?.settings?.currentUser])


    const likeposts = (postId) => {
        dispatch(likedislike?.likePost(postId, () => {
            console.log('liking the post')
        }))
    }

    const dislikepost = (postId) => {
        dispatch(likedislike?.dislikePost(postId, () => {
            console.log('disliking post')
        }))
    }

    const addtobookmark = (postId) => {
        dispatch(bookmarkActions?.addPostToBookMark(postId, () => {
            console.log('adding post to bookmark')
        }))
    }

    const removefrombookmark = (postId) => {
        dispatch(bookmarkActions?.removePostFromBookMark(postId, () => {
            console.log('removing post from bookmark')
        }))
    }


    const handleShareClick = (postId) => {
        window.navigator.clipboard.writeText(
            `${window.location.origin}/post/${postId}`
        );
        console.log(`${window.location.origin}/post/${postId}`)
    };





    return (
        <>
            <div className='flex flex-row'>
                <SideBar />
                <div className='flex flex-row w-full justify-evenly'>
                    <div className='profile-side flex flex-col gap-2'>
                        <img className='w-24 h-24 rounded-full border-green border-2' alt='profile-pic' src='/img/prio.png' />
                        <h2 className='text-left'>{`${state?.settings?.currentUser?.firstName} ${state?.settings?.currentUser?.lastName}`}</h2>
                        <h3 className='text-left'>@{state?.settings?.currentUser?.username}</h3>
                        <p className='text-left'>{state?.settings?.currentUser?.bio}</p>
                        <p className='text-left'>Website: <span><a href={`${state?.settings?.currentUser?.githubUrl}`}>{state?.settings?.currentUser?.githubUrl}</a></span></p>

                        <div className='flex flex-row gap-3'>
                            <p><span>{state?.postReducer?.userPosts?.length}</span>posts</p>
                            <p><span>{state?.settings?.currentUser?.followers?.length}</span>followers</p>
                            <p><span>{state?.settings?.currentUser?.following?.length}</span>following</p>
                        </div>
                    </div>
                    <div>
                        <button className='w-28 h-9 bg-gray-dark text-white'>Edit profile</button>
                    </div>
                </div>
            </div>


            <div className='w-full flex flex-row gap-9 justify-center'>
                <div className='w-1/2 flex gap-8 justify-center'>
                    <Link to='/profile' className='cursor-pointer'>Posts</Link>
                     <Link to='/profile/follower' className='cursor-pointer'>Followers</Link>
                    <Link to='/profile/following' className='cursor-pointer'>Following</Link>
                </div> 
            </div>


            <div className='personal-posts'>
                <div className='w-full h-full'>
                    {currentposts?.map((post, idx) => (
                        <div key={`${idx}`} className=''>
                            <div className="p-6 max-w-lg mx-auto bg-gray-600 rounded-xl shadow-lg flex">
                                <div className='flex space-x-12'>
                                    <div className="shrink-0">
                                        <span className="h-9 w-9 rounded-full p-3 bg-gray-dark">{state?.settings?.currentUser?.firstName[0] ? `${state?.settings?.currentUser?.firstName[0]}${state?.settings?.currentUser?.lastName[0]}` : `creater`}</span>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <div className=''>
                                            <div className='titles flex flex-row gap-6'>
                                                <span className='flex flex-row gap-5'>
                                                    <p className='text-lg'>{post?.username}</p>
                                                    <p className='font-light'>@pretSspirit</p>
                                                    <p>.1min</p>
                                                </span>

                                                {/* <span className='flex justify-center items-center'><img onClick={() => setPopup(!popup)} id="open-btn" className='h-6 w-5 mb-4 cursor-pointer' src={Postmenuicon} alt='menu-icon' /></span> */}
                                            </div>
                                            <p className='text-left about post'>{post?.content?.content?.status}</p>
                                            {post?.content?.content?.postMedia && (
                                                  <img src={`${post?.content?.content?.postMedia}`} className='w-full max-h-full' alt='postImage' />
                                            )}
                                        </div>
                                        <div className='icons flex space-x-20'>
                                            <span>
                                                {state?.likePostReducer?.likePosts?.find(posts => posts?._id === post?._id) ? <img className="h-6 w-6 rounded" src="/img/filledheart.png" alt="ChitChat Logo" onClick={() => dislikepost(post?._id)} /> : <img className="h-6 w-6 rounded" src="/img/heart.png" alt="ChitChat Logo" onClick={() => likeposts(post?._id)} />}
                                            </span>
                                            <span>
                                                {state?.bookmarkPostReducer?.bookmarkPosts?.find(posts => posts?._id === post?._id) ? <img className="h-6 w-6 rounded" src="/img/filledbokk.png" alt="ChitChat Logo" onClick={() => removefrombookmark(post?._id)} /> : <img className="h-6 w-6 rounded" src="/img/bookmark.png" alt="ChitChat Logo" onClick={() => addtobookmark(post?._id)} />}
                                            </span>
                                            <img className="h-6 w-6 rounded" src="/img/comment.png" alt="ChitChat Logo" />
                                            <img className="h-6 w-6 rounded" src="/img/share.png" alt="ChitChat Logo" onClick={() => handleShareClick(post?._id)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProfileComponent