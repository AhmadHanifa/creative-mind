import React from 'react'
// import Button from '../Button/Button'

const NewsItem = (props) => {
  return (
    <div className=''>
        <a href={props.url} className='text-[#fff] grid gap-4 group'>
            <div className='w-full md:h-80 overflow-hidden'>
                <img src={props.img} alt="news" className='group-hover:scale-105 duration-500' />
            </div>
            <span className='text-[#ccc]'>{props.date}</span>
            <p className='font-bold text-xl md:text-3xl'>{props.title}</p>
        </a>
    </div>
  )
}

export default NewsItem