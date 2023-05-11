import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const Slider = () => {
  return (
    <>
     <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      slidesPerView={1}
      autoplay={true}
      loop={true}
      speed={2000}
      navigation
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> <img src="	https://preview.colorlib.com/theme/foundation/images/hero_1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide> <img src='	https://preview.colorlib.com/theme/foundation/images/hero_2.jpg' /> </SwiperSlide>
      
   
    </Swiper>
    
    </>
  )
}

export default Slider