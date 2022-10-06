import React from 'react'

import { NavLink } from 'react-router-dom'

import homeIcon from '../../assest/home.png'
import eploreIcon from '../../assest/explore.png'
import bookmark from '../../assest/saved.png'
import likeIcon from '../../assest/heart.png'
// import PostCard from '../post/postCard'

import * as authActions from '../../actions/auth'

function SideBar() {
    return (
        <>
            <div className='container h-full basis-1/4 bg-slate-600 w-full'>
                <ul className='flex flex-col justify-start items-start w-1/2 m-auto gap-6'>
                    <li>
                        <div className='flex flex-row gap-8'>
                            <span className=''><img className='h-6 w-6' src={homeIcon} alt='home' /></span>
                            <span className=''><NavLink to={'/'}>Home</NavLink></span>
                        </div>
                    </li>

                    <li>
                        <div className='flex flex-row gap-8'>
                            <span><img className='h-6 w-6' src={eploreIcon} alt='explore' /></span>
                            <span><NavLink to={'/explore'}>Explore</NavLink></span>
                        </div>
                    </li>

                    <li>
                        <div className='flex flex-row gap-8'>
                            <span><img className='h-6 w-6' src={bookmark} alt='bookmark' /></span>
                            <span><NavLink to={'/bookmarks'}>Bookmarks</NavLink></span>
                        </div>
                    </li>

                    <li>
                        <div className='flex flex-row gap-8'>
                            <span><img className='h-6 w-6' src={likeIcon} alt='liked' /></span>
                            <span><NavLink to={'/likes'}>LikedPost</NavLink></span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='w-full'>
                            <button className='w-full md:w-1/2 bg-black border rounded text-center text-white'>post</button>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='w-full'>
                            <button className='w-full md:w-1/2 bg-black border rounded text-center text-white' onClick={() => authActions?.logout()}>Logout</button>
                        </div>
                    </li>
                </ul>
            </div>


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
        </>
    )
}

export default SideBar
