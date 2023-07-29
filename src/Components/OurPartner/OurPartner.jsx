import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import baner1 from "/./src/assets/brand-img/brand1.png"
import baner2 from "/./src/assets/brand-img/brand2.png"
import baner3 from "/./src/assets/brand-img/brand3.png"
import baner4 from "/./src/assets/brand-img/brand4.png"
import baner5 from "/./src/assets/brand-img/brand5.png"
import baner6 from "/./src/assets/brand-img/brand6.png"
import { Autoplay } from 'swiper';

export default function OurPartner() {
    return (
        <div className='  py-12 px-3 flex flex-col items-center justify-between w-full'>
            <div className='w-full lg:w-[80%] flex flex-col items-center shadow-[0_0_5px_rgba(0,0,0,0.1)] bg-white rounded-md  p-4'>
                <div className=' flex justify-between items-center   '>
                    <h2 className='md:text-2xl   text-center border-b-2 border-main-blue pb-2'> برخی همکاران ما </h2>
                </div>
                <div className='w-full mt-6   '>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,

                            }

                        }}
                     
                    
                        className="mySwiper  w-full h-full px-1 "
                    >

                        <SwiperSlide className='relative  rounded-xl group my-1   overflow-hidden flex items-center justify-center '>
                            <div className='w-full relative   flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img className=' w-1/2 md:2/3' src={baner1}  alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden  flex items-center justify-center'>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img className=' w-1/2 md:2/3'  src={baner2}  alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden flex items-center justify-center '>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img className=' w-1/2 md:2/3' src={baner3}  alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden  flex items-center justify-center'>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img className=' w-1/2 md:2/3' src={baner4}  alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden  flex items-center justify-center'>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img className=' w-1/2 md:2/3' src={baner5}  alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden  flex items-center justify-center'>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img className=' w-1/2 md:2/3' src={baner6}  alt="" />
                            </div>
                        </SwiperSlide>
                       

                    </Swiper>
                </div>
            </div>
        </div>
    )
}