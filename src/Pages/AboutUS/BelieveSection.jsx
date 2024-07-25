import React from 'react'

const list = [
    "Intuition and emotions are inherent",
    "Genuineness is always admired",
    "Honesty wins, no matter what.",
    "Creativity is limitless",
    "Integrity is priceless"
]

const BelieveSection = () => {
  return (
    <div>
        <div className='px-8 py-8 md:py-16 grid gap-8'>
            <div className='grid gap-1'>
                <p className='text-4xl md:text-7xl font-bold  md:leading-tight bg-clip-text bg-gradient-to-b from-[#f6891f] via-[#f6891f] to-rose-600 text-transparent'>We Believe</p>
                <p className='lg:w-1/2'>In creating excellence and individuality, together! We also believe that…</p>
            </div>
            <div className='grid md:grid-cols-2 md:gap-8'>
                {list.map(item=>(
                    <p className='border-b border-[#fff] pb-8 font-bold text-2xl'>{item}</p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BelieveSection