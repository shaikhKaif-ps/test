"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';







const Advantage = () => {
  return (
    <div className='ourContainer bg-rose-500'>
        <h1>TCL MUMBAI</h1>


        <main>
            <Swiper>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
                <SwiperSlide>4</SwiperSlide>
            </Swiper>
        </main>

    </div>
  )
}

export default Advantage