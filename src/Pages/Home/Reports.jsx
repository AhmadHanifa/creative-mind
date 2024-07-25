import React from 'react'

const Reports = () => {
  return (
    <div className='bg-center bg-cover  ' style={{ backgroundImage: `url(${"https://plus.unsplash.com/premium_photo-1661955917112-32d44c5c0f78?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})` }}>
        <div className='md:px-12 py-32 grid place-items-center md:grid-cols-3 gap-16 md:gap-0 bg-[#f6891f66]'>
            <div className='flex flex-col place-items-center text-[#222] gap-2'>
                <p className='text-6xl font-bold'>900+</p>
                <p className='text-2xl font-bold'>Projects</p>
            </div>
            <div className='flex flex-col place-items-center text-[#222] gap-2'>
                <p className='text-6xl font-bold'>13+</p>
                <p className='text-2xl font-bold'>years</p>
            </div>
            <div className='flex flex-col place-items-center text-[#222] gap-2'>
                <p className='text-6xl font-bold'>85+</p>
                <p className='text-2xl font-bold'>In House Team</p>
            </div>
        </div>
    </div>
  )
}

export default Reports