import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Img1 from "../../assets/hero-carousel/image1.jpeg"
import Img2 from "../../assets/hero-carousel/image2.jpeg"
import Img3 from "../../assets/hero-carousel/image3.jpeg"
import Img4 from "../../assets/hero-carousel/image4.jpeg"

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8'>
        <div className='md:w-1/2 w-full text-center'>
            <h1 className='md:text-5xl text-3xl font-bold md:leading-tight'>Discover Articles & Stories</h1>
            <p className='py-4'>Read and share ideas from writers all around the world. Explore a diverse range of topics, from tech and business to culture and personal experiences, on our platform.</p>
        </div>


        <div className='md:w-1/2 w-full mx-auto bg-black'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Pagination, Autoplay]}
        className=""
      >
        <SwiperSlide >
            <img src={Img1} alt="" className='w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
        <SwiperSlide >
            <img src={Img2} alt="" className='w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
        <SwiperSlide >
            <img src={Img3} alt="" className='w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
        <SwiperSlide >
            <img src={Img4} alt="" className='w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Hero