import React from 'react'

function ModalforAction(props) {
  return (
    <>
      {props.openmodal && (
          <div className="rounded-md absolute z-50 bg-white bg-opacity-100 h-14 w-20 right-4 top-14" id="my-modal">
            <div className='h-full w-full flex flex-col'>
              <span>
               Edit
              </span>
              <span>
                Delete
              </span>
            </div>
          </div>
      )}
    </>
  )
}

export default ModalforAction
