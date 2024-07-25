import React from 'react'

const Title = (props) => {
  return (
    <div>
        <div className='grid gap-4'>
            <div><h1 className={`${props.fontSize ? `${props.fontSize}` : "text-4xl md:text-6xl"} font-bold   bg-clip-text bg-gradient-to-b from-[#f6891f] via-[#f6891f] to-rose-600 text-transparent`}>{props.title}</h1></div>
            <p>{props.description}</p>
            {props.btn && <button>{props.btn}</button>}
        </div>
    </div>
  )
}

export default Title