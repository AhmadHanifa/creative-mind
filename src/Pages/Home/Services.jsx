import React from 'react'
import Card from '../../Components/Card/Card'
import card_img from '../../Assets/card_creative-01.png'


const Services = () => {
  return (
    <div className='relative' style={{ backgroundImage: `url(${"src/Assets/card_creative-01.png"})` }}>
    <div className='absolute bottom-[50%]  right-[50%] md:bottom-auto md:right-auto z-[0] grid md:-translate-y-[180px] scale-[300%] md:scale-100'>
      <img src={card_img} alt="" />
    </div>
    <div className='relative z-[1] grid md:grid-cols-3 md:gap-y-16 p-8 md:py-16 md:divide-x divide-orange-700/50'>
        <Card />
        <Card />
        <Card />
        {/* <Card />
        <Card /> */}
    </div>
    </div>
  )
}

export default Services