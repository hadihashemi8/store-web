import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


export default function LastDocs() {
    return (
        <div className='  py-12 px-3 flex flex-col items-center justify-between w-full'>
            <div className='w-full lg:w-[80%] shadow-[0_0_5px_rgba(0,0,0,0.1)] bg-white rounded-md  p-4'>
                <div className='w-full flex justify-between items-center   '>
                    <h2 className='text-2xl md:text-xl  text-center'>آخرین مقالات سایت</h2>

                    <button className='bg-transparent  px-4 py-2 rounded-md text-blue-400 flex items-center justify-between flex-row-reverse'>

                        مشاهده همه</button>
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
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper  w-full h-full px-1 "
                    >

                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.1)] '>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img className='group-hover:scale-105 transition-all duration-500' src="/./src/assets/doc-img/doc-1.jpg" alt="" />
                                <div className='flex flex-col items-center justify-between p-2 absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full '>
                                    <p className='self-end p-1 text-sm bg-main-gold rounded-full'>6مرداد  1400 </p>
                                    <p className='text-right text-white'>
                                     نکته مهم درباره تغدیه و سلامت کودکان که باید بدانید
                                    </p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.1)] '>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img className='group-hover:scale-105 transition-all duration-500' src="/./src/assets/doc-img/doc-1.jpg" alt="" />
                                <div className='flex flex-col items-center justify-between p-2 absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full '>
                                    <p className='self-end p-1 text-sm bg-main-gold rounded-full'>6مرداد  1400 </p>
                                    <p className='text-right text-white'>
                                     نکته مهم درباره تغدیه و سلامت کودکان که باید بدانید
                                    </p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.1)] '>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img className='group-hover:scale-105 transition-all duration-500' src="/./src/assets/doc-img/doc-1.jpg" alt="" />
                                <div className='flex flex-col items-center justify-between p-2 absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full '>
                                    <p className='self-end p-1 text-sm bg-main-gold rounded-full'>6مرداد  1400 </p>
                                    <p className='text-right text-white'>
                                     نکته مهم درباره تغدیه و سلامت کودکان که باید بدانید
                                    </p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.1)] '>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img className='group-hover:scale-105 transition-all duration-500' src="/./src/assets/doc-img/doc-1.jpg" alt="" />
                                <div className='flex flex-col items-center justify-between p-2 absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full '>
                                    <p className='self-end p-1 text-sm bg-main-gold rounded-full'>6مرداد  1400 </p>
                                    <p className='text-right text-white'>
                                     نکته مهم درباره تغدیه و سلامت کودکان که باید بدانید
                                    </p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.1)] '>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img className='group-hover:scale-105 transition-all duration-500' src="/./src/assets/doc-img/doc-1.jpg" alt="" />
                                <div className='flex flex-col items-center justify-between p-2 absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full '>
                                    <p className='self-end p-1 text-sm bg-main-gold rounded-full'>6مرداد  1400 </p>
                                    <p className='text-right text-white'>
                                     نکته مهم درباره تغدیه و سلامت کودکان که باید بدانید
                                    </p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className='relative rounded-xl group my-1   overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.1)] '>
                            <div className='w-full relative  flex flex-col items-center justify-between  cursor-pointer  group'>
                                <img className='group-hover:scale-105 transition-all duration-500' src="/./src/assets/doc-img/doc-1.jpg" alt="" />
                                <div className='flex flex-col items-center justify-between p-2 absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full '>
                                    <p className='self-end p-1 text-sm bg-main-gold rounded-full'>6مرداد  1400 </p>
                                    <p className='text-right text-white'>
                                     نکته مهم درباره تغدیه و سلامت کودکان که باید بدانید
                                    </p>
                                </div>
                            </div>

                        </SwiperSlide>






                    </Swiper>
                </div>
            </div>
        </div>
    )
}
