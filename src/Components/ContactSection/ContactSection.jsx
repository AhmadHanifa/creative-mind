import React from 'react'
import Button from '../Button/Button'

const ContactSection = (props) => {
  return (
    <div>
        <div className='px-8 md:px-44 py-16 grid  gap-8'>
            <p className='font-bold text-4xl md:text-5xl'>{props.text}</p>
            <p className='text-[#ccc]'>{props.subtext}</p>
            <Button name='Contact Us' />
        </div>
    </div>
  )
}

export default ContactSection