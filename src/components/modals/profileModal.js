import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useFiles } from '../../hoooks/useFiles';

import * as editprofileAction from '../../actions/user'

function ProfileModal(props) {
  const {currentUser} = useSelector(state=>state?.settings);
  const [website,setWebsite] = useState(currentUser?.githubUrl);
  const [bio,setBio] = useState(currentUser?.bio);
  const {profilemodal,setProfileModal} = props;

  // for file uploading

  const [mediaUrl, setMediaURL] = useState('')
  const [opa, setOpa] = useState(false)
  const [delete_token, setDeleteToken] = useState('')
  const { uploadFiles } = useFiles()

  const dispatch = useDispatch()

  const handlewebisteChange=(e)=>{
    setWebsite(e.target.value)
  }

  const handleBiochange=(e)=>{
    setBio(e.target.value)
  }

  const handleProfilepicChange=async(e)=>{
    await uploadFiles(e.target.files[0], setMediaURL, setOpa, setDeleteToken)
  }

  const handleUpdateProfile=(e)=>{
    e.preventDefault();
    let newuserData;
    if(mediaUrl){
      newuserData = {...currentUser,bio:bio,githubUrl:website,profileImage:{url:mediaUrl,original_filename:currentUser?.profileImage?.original_filename}}
      dispatch(editprofileAction?.editUserProfile(newuserData,()=>{
        console.log("updating profile")
      }))
    }

    setTimeout(() => {
      setMediaURL('');
      setProfileModal(!profilemodal)
  }, 500)

  }


  return (
    <>
        <div className='modals'>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-2xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setProfileModal(!profilemodal)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex w-full">
                 <div className='container flex flex-col gap-3 justify-center justify-items-center'>

                 <div className='flex flex-row h-12'>
                  <span className='font-semibold'>profile Img:</span><span>
                    <label htmlFor='profileImg' className='mb-2'></label>
                    <img aria-disabled={opa} src={mediaUrl?mediaUrl:currentUser?.profileImage?.url} className={`w-12 h-12 rounded-full z-50 ${opa&&"opacity-5"}`}/>
                    <input className='absolute opacity-0 top-6 left-20' onChange={handleProfilepicChange} type='file'/> 
                    </span>
                 </div>

                 <div className='flex flex-row'>
                  <span className='font-semibold'>Name:</span>
                  <span>{`${currentUser?.firstName} ${currentUser?.lastName}`}</span>
                 </div>

        
                 <div className='flex flex-row'>
                  <span className='font-semibold'>Username:</span>
                  <span>{currentUser?.username}</span>
                 </div>

                 <div className='flex flex-row'>
                  <span className='font-semibold'>Website link:</span>
                  <input value={website} type={'text'} onChange={handlewebisteChange} className="border-[2px] border-black" />
                 </div>

                 <div className='flex flex-row'>
                  <span className='font-semibold'>Bio:</span>
                  <textarea value={bio} type={'text'} onChange={handleBiochange} className="border-[2px] border-black" />
                 </div>

                 </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setProfileModal(!profilemodal)}
                  >
                    Close
                  </button>
                  <button
                    className="text-black bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={(e) => handleUpdateProfile(e)}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ProfileModal
