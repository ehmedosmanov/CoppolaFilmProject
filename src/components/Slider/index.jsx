import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import './index.scss'
import Slide from '../Slide'

const Slider = () => {
  return (
    <div className='header-slider'>
      <Swiper
        pagination={{
          clickable: true
        }}
        modules={[EffectFade, Pagination]}
        spaceBetween={30}
        effect={'fade'}
        className='mySwiper'>
        <SwiperSlide>
          <Slide
            background={'bg-img-3'}
            title={'HISTORY OF COLOUR'}
            director={'Written by Julia, directed by Andy Smith, 2000'}
            info={'FILM FESTIVAL 2022 STARTS APRIL'}
            locations={'Rome / 3 Locations / Seven days'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            background={'bg-img-2'}
            title={'HISTORY OF COLOUR'}
            director={'Written by Julia, directed by Andy Smith, 2000'}
            info={'FILM FESTIVAL 2022 STARTS APRIL'}
            locations={'Rome / 3 Locations / Seven days'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            background={'bg-img-1'}
            title={'HISTORY OF COLOUR'}
            director={'Written by Julia, directed by Andy Smith, 2000'}
            info={'FILM FESTIVAL 2022 STARTS APRIL'}
            locations={'Rome / 3 Locations / Seven days'}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
