import { Model } from 'miragejs'
import React, { useEffect, useState } from 'react'
import useModal  from '../../hoooks/useModal'

function ProfileModal() {
    const {modal,modelOperation,setModal} = useModal()

    useEffect(()=>{
        if(modal){
            console.log("here big modal",modal)
        }
    },[modal,setModal,modelOperation])

    const closemodal=()=>{
        if(modal===true){
            setModal(false)
        }
    }

    return (
        <>
        <div className='modal'>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                     onClick={closemodal()}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  hello modal
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={()=>closemodal()}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={()=>closemodal()}
                  >
                    Submit
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
