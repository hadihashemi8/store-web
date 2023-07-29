import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { BsArrowLeftCircle } from "react-icons/bs"
import Card from '../Card/Card'
import './ProductsSlider.css'
import "swiper/css";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';


export default function ProductsSlider({ products }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1150: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }

                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper  w-full h-full grid  p-1"
            >
                {products.map(item => (
                    <SwiperSlide key={item.id} className='rounded-xl overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.1)]'>
                        <Card  {...item} />
                    </SwiperSlide>
                ))}

                <Link to='/products'>
                    <SwiperSlide className="w-full   rounded-xl  shadow-[0_0_5px_rgba(0,0,0,0.1)]">
                        <div className='w-full h-full  flex  items-center justify-center   pb-4 '>
                            <button className='flex flex-col  items-center justify-around'>
                                <BsArrowLeftCircle className='text-2xl mb-2' />
                                مشاهده همه
                            </button>
                        </div>
                    </SwiperSlide >
                </Link>


            </Swiper>
        </>
    )
}
