import React from 'react'
import ProductsSlider from '../ProductsSlider/ProductsSlider';
import datas from '../../datas/datas';



export default function NewProducts() {
    return (
        <div className='  py-12 px-3 flex flex-col items-center justify-between w-full '>
            <div className='w-full lg:w-[80%] shadow-[0_0_5px_rgba(0,0,0,0.1)] bg-white  rounded-md  p-4'>
                <div className='w-full flex  flex-col small:flex-row justify-between items-center   '>
                    <h2 className='text-2xl md:text-2xl  text-center'>جدیدترین محصولات</h2>

                    <button className='bg-transparent  px-4 py-2 mt-4 small:mt-0 rounded-md text-blue-400 flex items-center justify-between flex-row-reverse'>

                        مشاهده همه</button>
                </div>
                <div className='w-full mt-6 '>
                    {/* <Swiper
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
                        className="mySwiper  w-full h-full p-1  "
                    >
                        {amzOffer.map(off => (
                            <SwiperSlide key={off.id} className='relative rounded-xl group my-1   overflow-hidden '>
                              <Card {...off}/>
                            </SwiperSlide>
                        ))}


                        <SwiperSlide className='w-full   rounded-xl  shadow-[0_0_5px_rgba(0,0,0,0.1)] '>
                            <div className='w-full h-full  flex  items-center justify-center   pb-4 '>
                                <button className='flex flex-col  items-center justify-around'>
                                    <BsArrowLeftCircle className='text-2xl mb-2' />
                                    مشاهده همه
                                </button>
                            </div>
                        </SwiperSlide >


                    </Swiper> */}

                    <ProductsSlider products={datas.newProducts} />
                </div>
            </div>
        </div>
    )
}
