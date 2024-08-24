"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function ProductEffect() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='w-full py-20'
      >
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px] '
            src='https://swiperjs.com/demos/images/nature-1.jpg'
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px] '
            src='https://swiperjs.com/demos/images/nature-2.jpg'
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px] '
            src='https://swiperjs.com/demos/images/nature-3.jpg'
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px]'
            src='https://swiperjs.com/demos/images/nature-4.jpg'
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px]'
            src='https://swiperjs.com/demos/images/nature-5.jpg'
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px]'
            src='https://swiperjs.com/demos/images/nature-6.jpg'
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px]'
            src='https://swiperjs.com/demos/images/nature-7.jpg'
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px]'
            src='https://swiperjs.com/demos/images/nature-8.jpg'
          />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide w-1/4 h-[700px]'>
          <img
            className='w-1/4 h-[700px]'
            src='https://swiperjs.com/demos/images/nature-9.jpg'
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
