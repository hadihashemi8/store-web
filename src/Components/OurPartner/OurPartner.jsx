import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


export default function OurPartner() {
    return (
        <div className='  py-12 px-3 flex flex-col items-center justify-between w-full'>
            <div className='w-full lg:w-[80%] flex flex-col items-center shadow-[0_0_5px_rgba(0,0,0,0.1)] bg-white rounded-md  p-4'>
                <div className=' flex justify-between items-center   '>
                    <h2 className='text-2xl   text-center border-b-2 border-main-blue pb-2'> برخی همکاران ما </h2>
                </div>
                <div className='w-full mt-6   '>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
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

                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden  '>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img src="/./src/assets/brand-img/brand1.png"  alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden  '>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img src="/./src/assets/brand-img/brand2.png"  alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden  '>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img src="/./src/assets/brand-img/brand3.png"  alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden  '>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img src="/./src/assets/brand-img/brand4.png"  alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden  '>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img src="/./src/assets/brand-img/brand5.png"  alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden  '>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img src="/./src/assets/brand-img/brand6.png"  alt="" />
                            </div>
                        </SwiperSlide>
                       

                    </Swiper>
                </div>
            </div>
        </div>
    )
}