import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import logo from '../../Assets/logo-white.png'

const ErrorPage = () => {
  return (
    <div>
        <Navbar />
        <main className='h-screen flex flex-col justify-center items-center text-center gap-5'>
          <img className='w-40' src={logo} alt="logo" />
            <h1 className='font-bold text-5xl'>404</h1>
            <h1 className='font-bold text-5xl'>An error occurred</h1>
            <p className='text-xl'>Could not find this page!</p>
        </main>
    </div>
  )
}

export default ErrorPage