import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { BsCircleFill } from "react-icons/bs"
import "swiper/css";
import "swiper/css/pagination";
import Card from '../Card/Card'
import FavouriteProductCard from '../FavouriteProductCard/FavouriteProductCard'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';



export default function FavouriteProducts() {

  const { favouriteProducts } = useSelector(state => state.favouriteProducts)

useEffect(() => {
  console.log(favouriteProducts);
} ,[favouriteProducts])

  return (
    <div className='md:col-span-3 lg:col-span-2 mt-4'>

      <div className='bg-white  rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.1)] '>


        {favouriteProducts.length > 0 ? (
          <>
            <div className='p-2 flex items-center justify-between border-b-[1px] border-gray-300'>
              <h3 className='flex items-center justify-between'> <BsCircleFill className='mx-2 text-xs text-blue-600' /> محصولات مورد علاقه من </h3>
            </div>

            <div className='p-4   flex justify-around flex-wrap items-center '>
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
                  className="mySwiper  w-full h-full p-1 "
                >
                  {favouriteProducts?.map(item => (
                    <SwiperSlide key={item.id} className=' relative rounded-xl group my-1   overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.1)] '>
                      <Card {...item} />
                    </SwiperSlide>
                  ))}

                </Swiper>
              </div>
            </div>
          </>
        ) : (
          <div className='p-4 flex items-center justify-center'>
            <h1 className='text-xl '>شما محصول مورد علاقه ندارید</h1>
          </div>
        )}


      </div>

    </div>
  )
}
