import React from 'react'
import Button from '../Button/Button'
import card_bg from '../../Assets/card_bg-02.png'

const Card = () => {
  return (
    <div className='group duration-300 relative overflow-hidden'>
    <div className='absolute z-[1] opacity-0 group-hover:opacity-100 duration-300 '>
      <img className='opacity-40' src={card_bg} alt="card_bg" />
    </div>
        <div className='px-6 py-4 md:py-28 relative z-[2]'>
            <div className='grid text-[#fff] gap-8 '>
                <h3 className='font-bold text-4xl md:text-7xl'>Card Title</h3>
                <p className='text-[#aaa] text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repudiandae omnis eum? Minus fugiat magni mollitia modi aspernatur autem quos.</p>
                <Button name='more....' />
            </div>
        </div>
    </div>
  )
}

export default Card