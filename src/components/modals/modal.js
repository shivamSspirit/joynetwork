import React from 'react'
import * as postAction from '../../actions/post'
import { useDispatch } from 'react-redux'

function ModalforAction(props) {
  const dispatch = useDispatch();

  const deletePost = (postId) => {
    dispatch(postAction?.deletePostbyid(postId, () => {
      console.log('deleting post')
    }))
  }

  return (
    <>
      {props.openmodal && (
        <div className="rounded-md absolute z-50 bg-white bg-opacity-100 h-14 w-20 right-4 top-14" id="my-modal">
          <div className='h-full w-full flex flex-col text-black'>
            <span className='text-black hover:bg-black cursor-pointer hover:text-white'>
              Edit
            </span>
            <span onClick={()=>{deletePost(props.postId)}} className='text-black hover:bg-black cursor-pointer hover:text-white'>
              Delete
            </span>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalforAction
