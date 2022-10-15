import React from 'react'

import Header from '../components/header/header'
import Login from '../components/auth/login'
import {ToastContainer} from "react-toastify"

function LoginPage() {
  return (
    <div className='h-screen w-screen'>
      <Header/>
      <Login/>
    </div>
  )
}

export default LoginPage
