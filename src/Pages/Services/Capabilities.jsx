import React from 'react'

const Capabilities = (props) => {
    console.log(props.List)
  return (
    <div className='grid gap-4'>
        <div>
            <p className='text-3xl md:text-5xl font-bold bg-clip-text bg-gradient-to-b from-[#f6891f] via-[#f6891f] to-rose-600 text-transparent'>CAPABILITIES</p>
        </div>
        <div className='grid grid-cols-2'>
                {props.List.map((item)=>(
                    <li className='text-[#fff] hover:text-[#f6891f] duration-300 cursor-pointer'>
                        {item}
                    </li>
                ))}
        </div>
    </div>
  )
}

export default Capabilities