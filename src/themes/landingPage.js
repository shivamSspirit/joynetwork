import React from 'react'
import Header from '../components/header/header'
import MainComponent from '../components/mainPage/mainComponent'
import { ToastContainer } from "react-toastify"

function LandingPage() {
  return (
    <div className='h-screen w-screen'>
      <Header />
      <MainComponent />
    </div>
  )
}

export default LandingPage
