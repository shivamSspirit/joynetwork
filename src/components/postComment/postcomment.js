import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

function PostComment() {
    const { ...state } = useSelector(state => state)
    const { postId } = useParams()
   // const dispatch = useDispatch()

    useEffect(() => {
        if (postId) {
            console.log("postId:",postId)
        }
    }, [postId])
    return (
        <div className=''>
            post comments
        </div>
    )
}

export default PostComment
