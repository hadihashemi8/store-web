import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Main.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import MainOffer from "../MainOffers/MainOffer";
import slide1 from "/./src/assets/main-slide/slide1.jpg"
import slide2 from "/./src/assets/main-slide/slide2.jpg"
import slide3 from "/./src/assets/main-slide/slide3.jpg"
import slide4 from "/./src/assets/main-slide/slide4.jpg"





const sliderImg = [
    { id: 1, src: slide1 },
    { id: 2, src: slide2 },
    { id: 3, src: slide3 },
    { id: 4, src: slide4 },
]

const offerImg = [
    {
        id: 1, src: "./src/assets/main-offer/offer1.jpg", name: 'تبلت اپل مدل iPad mini 8.3 inch 2021-MK7M3LL/A ظرفیت 6 4 گیگابایت'
    },
    {
        id: 2, src: "./src/assets/main-offer/offer2.jpg", name: 'تبلت اپل مدل iPad mini 8.3 inch 2021-MK7M3LL/A ظرفیت 6 4 گیگابایت'
    },
    {
        id: 3, src: "./src/assets/main-offer/offer3.jpg", name: 'تبلت اپل مدل iPad mini 8.3 inch 2021-MK7M3LL/A ظرفیت 6 4 گیگابایت'
    },
    {
        id: 4, src: "./src/assets/main-offer/offer4.jpg", name: 'تبلت اپل مدل iPad mini 8.3 inch 2021-MK7M3LL/A ظرفیت 6 4 گیگابایت'
    },
]


export default function App() {
    return (

        <div className="main-container w-full p-8 xl:px-32   flex flex-col items-center lg:items-stretch  lg:flex-row-reverse">
            <div className="slider-part  w-full  xl:w-3/4 rounded-2xl overflow-hidden">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper h-full"
                >
                    {sliderImg.map(img => (
                        <SwiperSlide className="w-ful " >
                            <img className="w-full h-full " key={img.id} src={img.src} alt="" />
                        </SwiperSlide>
                    ))}



                </Swiper>
            </div>
            <div className="div-1 self-center mt-4 lg:mt-0 offer-part w-full small:w-2/3 md:w-1/2 lg:w-1/4 lg:ml-4 rounded-2xl  overflow-hidden border-[1px] border-black">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}


                    modules={[Autoplay, Navigation]}
                    className="mySwiper w-full"
                >
                    {offerImg.map(img => (
                        <SwiperSlide >
                            <MainOffer {...img} />

                        </SwiperSlide>
                    ))}



                </Swiper>
            </div>
        </div>

    );
}


