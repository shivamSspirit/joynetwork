import React, { useEffect, useState } from 'react'
import SideBar from '../mainPage/sidebar'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLocation,useParams } from 'react-router-dom'

import ProfileModal from '../modals/profileModal'
import Followers from './Followers'
import Following from './Following'
import SinglePost from '../post/singlepostcard'

import * as followunfollowActions from '../../actions/auth'

function ProfileComponent() {
    const [currentposts, setcurrentposts] = useState([]);
    const [profilemodal,setProfileModal] = useState(false)
    const { ...state } = useSelector(state => state);
    const location = useLocation();
    const [profilecurrentuser,setProfilecurenuser] = useState();
    const {profileId} = useParams();
    const dispatch = useDispatch();


    useEffect(()=>{
        if(profileId){
           setProfilecurenuser(state?.userReducer?.users?.find(user=>user?.profileImage?.original_filename===profileId))
        }
    },[profileId,profilecurrentuser])

    useEffect(() => {
       setcurrentposts([state?.postReducer?.posts?.find?.(post=>post?.profileImage?.original_filename===profileId)])
    }, [profileId,profilecurrentuser])


    const userfollowAction=(userId)=>{
        dispatch(followunfollowActions?.followSomeone(userId,()=>{
            console.log('follow this user')
        }))
    }



    const Returncomponentwithorigin=()=>{
        if(location.pathname===`/profile/${profileId}`){
            return(
                <>
                <div className='w-full h-full'>
                    {currentposts&&currentposts?.map((post, id) => (
                        <SinglePost key={id} post={post} />
                    ))}
                </div>
                </>
            )
        }
        if(location.pathname===`/profile/${profileId}/follower`){
            return(
                <>
                <Followers/>
                </>
            )
        }

        if(location.pathname===`/profile/${profileId}/following`){
            return(
                <>
                <Following/>
                </>
            )
        }
    }


    return (
        <>
        <div className='bg-blue h-screen overflow-scroll'>
        <div className='flex flex-row'>
                <SideBar />
                <div className='flex flex-row w-full justify-evenly h-full'>
                    <div className='profile-side flex flex-col gap-2'>
                        <img className='w-24 h-24 rounded-full border-green border-2' alt='profile-pic' src={profilecurrentuser?.profileImage?.url} />
                        <h2 className='text-left text-cream'>{`${profilecurrentuser?.firstName} ${profilecurrentuser?.lastName}`}</h2>
                        <h3 className='text-left text-cream'>@{profilecurrentuser?.username&&profilecurrentuser?.username}</h3>
                        <p className='text-left text-cream'>{profilecurrentuser?.bio}</p>
                        <p className='text-left text-cream'>Website: <span><a href={`${profilecurrentuser?.githubUrl}`}>{profilecurrentuser?.githubUrl}</a></span></p>

                        {/**check here only */}
                        <div className='flex flex-row gap-3'>
                            <p className={`text-cream`}><span>{state?.postReducer?.userPosts?.length}</span>posts</p>
                            <p className='text-cream'><span>{1}</span>followers</p>
                            <p className='text-cream'><span>{1}</span>following</p>
                        </div>
                    </div>
                    <div>
                        {state?.settings?.currentUser?._id===profilecurrentuser?._id?<button onClick={() => setProfileModal(!profilemodal)} className='w-28 h-9 bg-gray-dark mt-6 text-white rounded-md'>Edit profile</button>:<button onClick={() => userfollowAction(profilecurrentuser?._id)} className='w-28 h-9 bg-gray-dark mt-6 text-white rounded-md'>Follow</button>}                      
                    </div>
                </div>
            </div>


            <div className='w-full flex flex-row gap-9 justify-center'>
                <div className='w-1/2 flex gap-8 justify-center'>
                    <Link to={`/profile/${profileId}`} className={`cursor-pointer font-semibold font-Inter ${location.pathname===`/profile/${profileId}`&&'text-cream'}`}>Posts</Link>
                    <Link to={`/profile/${profileId}/follower`} className={`cursor-pointer font-semibold font-Inter ${location.pathname===(`/profile/${profileId}/follower`)&&'text-cream'}`}>Followers</Link>
                    <Link to={`/profile/${profileId}/following`} className={`cursor-pointer font-semibold font-Inter ${location.pathname===(`/profile/${profileId}/following`)&&'text-cream'}`}>Following</Link>
                </div>
            </div>


            <div className='personal-posts w-full h-full'>
                {Returncomponentwithorigin()}
            </div>
            <div>
            {profilemodal===true ? <ProfileModal profilemodal={profilemodal} setProfileModal={setProfileModal}/> :null}
            </div>
        </div>
           
        </>
    )
}

export default ProfileComponent
