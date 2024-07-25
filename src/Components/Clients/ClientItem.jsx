import React from 'react'

const ClientItem = (props) => {
  return (
    <div className=' grid place-items-center h-full w-full py-10 border border-[#fff6] '>
    <div className='size-10 text-[#fff]'>
    {props.Clients}
    </div>
    </div>
  )
}

export default ClientItem