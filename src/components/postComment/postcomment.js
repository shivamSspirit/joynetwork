import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

function PostComment() {
    const { ...state } = useSelector(state => state)
    const { postId } = useParams()
    const dispatch = useDispatch()
    return (
        <div className='singlepost'>
            hello comments now
            {/* <div className='w-full h-full'>
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

                                        <span className='flex justify-center items-center'><img onClick={() => setPopup(!popup)} id="open-btn" className='h-6 w-5 mb-4 cursor-pointer' src={Postmenuicon} alt='menu-icon' /></span>
                                    </div>
                                    <p className='text-left about post'>{post?.content?.status}</p>
                                    {post?.content?.media && (
                                        <div className='imgBlock container w-full h-4/5'>
                                            {console.log('val', post?.content?.media.includes('image'))}
                                            {post?.content?.media.includes('image') && (
                                                <img src={`${post?.content?.media}`} className='w-full max-h-full' alt='postImage' />
                                            )}
                                            {post?.content?.media.includes('video') && (
                                                <video controls loop className='w-full max-h-full' src={post?.content?.media} />
                                            )}
                                        </div>
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
            </div> */}
        </div>
    )
}

export default PostComment
