import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./AmazingOffer.css";
import BuyBtn from '../BuyBtn/BuyBtn'
import { BsFillCartPlusFill } from "react-icons/bs"


const amzOffer = [
  { id: 1, title: "ساعت هوشمند هوآوی مدل GT2 Pro 46mm بند سیلیکونی", price: 13000000, offerPercent: 15, src: "./src/assets/amazing-offer/amz-1.jpg" },
  { id: 2, title: "ساعت هوشمند هوآوی مدل GT2 Pro 46mm بند سیلیکونی", price: 8000000, offerPercent: 10, src: "./src/assets/amazing-offer/amz-2.jpg" },
  { id: 3, title: "ساعت هوشمند هوآوی مدل GT2 Pro 46mm بند سیلیکونی", price: 21000000, offerPercent: 21, src: "./src/assets/amazing-offer/amz-3.jpg" },
  { id: 4, title: "ساعت هوشمند هوآوی مدل GT2 Pro 46mm بند سیلیکونی", price: 17000000, offerPercent: 15, src: "./src/assets/amazing-offer/amz-4.jpg" },
  { id: 5, title: "ساعت هوشمند هوآوی مدل GT2 Pro 46mm بند سیلیکونی", price: 14000000, offerPercent: 24, src: "./src/assets/amazing-offer/amz-5.jpg" },
  { id: 6, title: "ساعت هوشمند هوآوی مدل GT2 Pro 46mm بند سیلیکونی", price: 25000000, offerPercent: 20, src: "./src/assets/amazing-offer/amz-6.jpg" },

]

export default function AmazingOffer() {


  // const [showProductObj, setShowProductObj] = useState([])


  // let pId = 1

  // const findProduct = (itemId) => {

  //     pId = itemId
  //     console.log(pId);

  // }

  // useEffect(() => {

  //   setShowProductObj([amzOffer.find(item => item.id == pId)])

  // }, [pId])
  // useEffect(() => {

  //   console.log(showProductObj);

  // }, [showProductObj])




  return (
    <div className='p-4   xl:px-32 flex items-center justify-center '>
      <div className='relative  flex items-center  sm:w-1/2 lg:w-full  shadow-[0_0_15px_1px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden'>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
         

          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper   "
        >
          {amzOffer.map(item => (

            <SwiperSlide key={item.id} className='overflow-hidden'>
              <div className='w-full py-4 lg:py-8 lg:px-4    flex flex-col lg:flex-row  items-center lg:justify-evenly   '>
                <div className='w-52 bg-red-600 absolute flex items-end justify-center  right-[-40px] top-[30px] rotate-45 '>
                  <p className='text-white font-semibold'> {item.offerPercent}% تخفیف </p>
                </div>
                <div className='w-full lg:w-1/2  xl:w-1/3  p-4 bg-cover '>
                  <img className='w-full  ' src={item.src} />
                </div>
                <div className='flex flex-col items-center  '>
                  <h3 className=' text-3xl text-center px-4  sm:w-2/3'>{item.title}</h3>
                  <div className='  flex items-center justify-around  py-2'>
                    <p className='mx-2 line-through opacity-50 text-3xl'> {item.price} تومان</p>
                    <p className='mx-2 text-green-500 text-3xl'>  {item.price - (item.price / 100) * item.offerPercent} تومان</p>
                  </div>
                  <div className='flex justify-around flex-wrap items-center py-4'>
                    <div className='w-16 h-16 m-1 rounded-full bg-gray-600 flex items-center justify-center'>روز</div>

                    <div className='w-16 h-16 m-1 rounded-full bg-gray-600 flex items-center justify-center'>ساعت</div>
                    <div className='w-16 h-16 m-1 rounded-full bg-gray-600 flex items-center justify-center'>دقیقه</div>
                    <div className='w-16 h-16 m-1 rounded-full bg-gray-600 flex items-center justify-center'>ثانیه</div>
                  </div>
                  <BuyBtn >
                    <BsFillCartPlusFill className='ml-1' />
                    بریم واسه خرید!
                  </BuyBtn>
                </div>
              </div>
            </SwiperSlide>

          ))}

        </Swiper>


        
          {/* {amzOffer.map(item => (
            <div className='transition-all duration-200 w-full py-4 lg:py-8 lg:px-4 hidden    xl:flex flex-col lg:flex-row  items-center  bg-white  '>
              <div className='w-52 bg-red-600 absolute flex items-end justify-center  right-[-40px] top-[30px] rotate-45 '>
                <p className='text-white font-semibold'> {item.offerPercent}% تخفیف </p>
              </div>
              <div className='w-full lg:w-1/2  p-4 bg-cover '>
                <img className='w-full  ' src={item.src} />
              </div>
              <div className='flex flex-col items-center  '>
                <h3 className=' text-3xl text-center px-4  sm:w-2/3'>{item.title}</h3>
                <div className='  flex items-center justify-around  py-2'>
                  <p className='mx-2 line-through opacity-50 text-3xl'> {item.price} تومان</p>
                  <p className='mx-2 text-green-500 text-3xl'>  {item.price - (item.price / 100) * item.offerPercent} تومان</p>
                </div>
                <div className='flex justify-around flex-wrap items-center py-4'>
                  <div className='w-16 h-16 m-1 rounded-full bg-gray-600 flex items-center justify-center'>روز</div>

                  <div className='w-16 h-16 m-1 rounded-full bg-gray-600 flex items-center justify-center'>ساعت</div>
                  <div className='w-16 h-16 m-1 rounded-full bg-gray-600 flex items-center justify-center'>دقیقه</div>
                  <div className='w-16 h-16 m-1 rounded-full bg-gray-600 flex items-center justify-center'>ثانیه</div>
                </div>
                <BuyBtn >
                  <BsFillCartPlusFill className='ml-1' />
                  بریم واسه خرید!
                </BuyBtn>
              </div>
            </div>
          )

          )} */}
       



        {/* 
        <div className='z-50 bg-blue-600 absolute flex items-end justify-center px-4 py-1  right-1/2  top-0 translate-x-1/2'>
          <p className='text-white font-semibold tracking-widest'> پیشنهاد شگفت انگیز فروشگاه</p>
        </div> */}
        {/* <div className='w-1/3  p-6  items-center justify-center hidden xl:flex'>
          <ul className=' overflow-y-scroll w-full h-[330px]'>
            {amzOffer.map(item => (
              <li key={item.id} className='bg-gray-200 cursor-pointer  p-4 rounded-xl my-2' onClick={() => findProduct(item.id)}>{item.title}</li>
            ))}

          </ul>
        </div> */}
      </div>
    </div>
  )
}
