import React from 'react'

function ModalforAction(props) {
  return (
    <>
      {props.popup && (
       
          <div className="fixed inset-0  bg-pink bg-opacity-60 overflow-y-auto h-12 w-12" id="my-modal">
            <div className='h-full w-full flex flex-col'>
              <span>
                item1
              </span>
              <span>
                item2
              </span>
            </div>
          </div>
        

      )}
    </>


  )
}

export default ModalforAction
