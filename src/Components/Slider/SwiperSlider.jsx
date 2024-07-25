import React from 'react';
import { Swiper, SwiperSlide } from 'react-swiper';
import 'swiper/swiper-bundle.css';

const SwiperSlider = ({ children }) => {
  const breakpoints = {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <Swiper breakpoints={breakpoints}>
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;