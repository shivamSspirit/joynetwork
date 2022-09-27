import { Model } from 'miragejs'
import React, { useState } from 'react'
import useModal  from '../../hoooks/useModal'

function ProfileModal() {
    const {modal} = useModal()

    return (
        <div className='modal'>
            {modal&& <p>profile modal</p>}
        </div>
    )
}

export default ProfileModal
