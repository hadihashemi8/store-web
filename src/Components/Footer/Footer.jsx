import React from 'react'
import { AiFillYoutube, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import img1 from "/./src/assets/footer/contact-us.svg"
import img2 from "/./src/assets/footer/delivery.svg"
import img3 from "/./src/assets/footer/payment-terms.svg"
import img4 from "/./src/assets/footer/return-policy.svg"
import img5 from "/./src/assets/footer/origin-guarantee.svg"
import namad1 from "/./src/assets/eNamadPic/enamad.png"
import namad2 from "/./src/assets/eNamadPic/rezi.png"
import namad3 from "/./src/assets/eNamadPic/kasbokar.png"




export default function Footer() {
    return (
        <div >
            <div className='bg-white  p-8 sm:px-24 md:px-12 xl:px-24 border-b-[1px] border-gray-300 pb-4 mt-4'>

                <div className='flex flex-wrap  justify-around '>
                    <div className='  flex flex-col justify-between items-center w-36  my-4'>
                        <img className='w-16 h-16 ' src={img1} alt="" />
                        <h3 className='text-center my-2 '>پشتیبانی 24 ساعته</h3>
                    </div>
                    <div className='  flex flex-col justify-between items-center w-36  my-4 '>
                        <img className='w-16 h-16 ' src={img2} alt="" />
                        <h3 className='text-center my-2 '>تحویل اکسپرس</h3>
                    </div>
                    <div className='  flex flex-col justify-between items-center w-36  my-4'>
                        <img className='w-16 h-16 ' src={img3} alt="" />
                        <h3 className='text-center my-2 '>پرداخت در محل</h3>
                    </div>
                    <div className='  flex flex-col justify-between items-center w-  my-4'>
                        <img className='w-16 h-16 ' src={img4} alt="" />
                        <h3 className='text-center my-2 '>۷ روز ضمانت بازگشت
                        </h3>
                    </div>
                    <div className='  flex flex-col justify-between items-center w-36  my-4'>
                        <img className='w-16 h-16 ' src={img5} alt="" />
                        <h3 className='text-center my-2 '>ضمانت اصل بودن کالا</h3>
                    </div>
                </div>

                <div className='mt-4 md:flex md:justify-between md:flex-wrap border-b-[1px] border-gray-300 pb-4' >
                    <ul className='list-disc mt-8  w-40'>
                        <h2 className='text-xl font-semibold'>راهنمای خرید از شما</h2>
                        <li className=' mt-4 group'><a className='group-hover:mr-2 transition-all duration-300' href="">نحوه ثبت سفارش</a></li>
                        <li className=' mt-4 group'><a className='group-hover:mr-2 transition-all duration-300' href="">رویه ارسال سفارش</a></li>
                        <li className=' mt-4 group'><a className='group-hover:mr-2 transition-all duration-300' href="">شیوه های پرداخت</a></li>
                    </ul>
                    <ul className='list-disc mt-8  w-40 '>
                        <h2 className='text-xl font-semibold'>خدمات مشتریان</h2>
                        <li className=' mt-4 group'><a className='group-hover:mr-2 transition-all duration-300' href="">پاسخ به پرسش های متداول</a></li>
                        <li className=' mt-4 group'><a className='group-hover:mr-2 transition-all duration-300' href="">شرایط استفاده</a></li>
                        <li className=' mt-4 group'><a className='group-hover:mr-2 transition-all duration-300' href="">رویه بازگرداندن کالا</a></li>
                        <li className=' mt-4 group'><a className='group-hover:mr-2 transition-all duration-300' href="">حریم خصوصی</a></li>
                    </ul>
                    <ul className='list-disc mt-8  w-40 '>
                        <h2 className='text-xl font-semibold'>با شما</h2>
                        <li className=' mt-4 group'><a className='group-hover:mr-2 transition-all duration-300' href="">فروش در شما</a></li>
                        <li className=' mt-4 group'><a className='group-hover:mr-2 transition-all duration-300' href="">همکاری با سازمان ها</a></li>
                        <li className=' mt-4 group'><a className='group-hover:mr-2 transition-all duration-300' href="">فرصت های شغلی</a></li>
                        <li className=' mt-4 group'><a className='group-hover:mr-2 transition-all duration-300' href="">تماس با شما</a></li>
                        <li className=' mt-4 group'><a className='group-hover:mr-2 transition-all duration-300' href="">درباره شما</a></li>
                    </ul>

                    <div className='mt-8 md:mt-4  p-4'>
                        <div >
                            <h2>از تخفیف‌ها فروشگاه باخبر شوید:
                            </h2>
                            <div className='bg-blue-500 flex mt-3 border-[1px] border-blue-700'>
                                <input className='w-full p-2 text-xl outline-none ' type="text" />
                                <button className='bg-blue-700 p-2 px-4 text-white'>ارسال</button>
                            </div>
                        </div>
                        <div className='mt-4 flex flex-col items-center'>
                            <h2 className='self-start'>ما را در شبکه های اجتماعی دنبال کنید</h2>
                            <ul className='flex justify-between mt-4 '>
                                <li className='text-2xl mx-3'>
                                    <FiInstagram />
                                </li>
                                <li className='text-2xl mx-3'>
                                    <AiOutlineTwitter />
                                </li>
                                <li className='text-2xl mx-3'>
                                    <BsWhatsapp />
                                </li>
                                <li className='text-2xl mx-3'>
                                    <AiFillYoutube />
                                </li>
                                <li className='text-2xl mx-3'>
                                    <AiOutlineLinkedin />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className='mt-10 flex flex-col items-center md:flex-row md:items-start md:justify-between '>
                    <div className=' md:w-1/2'>

                        <h2 className='text-2xl font-semibold' >فروشگاه شما ، بررسی ، انتخاب و خرید آنلاین</h2>
                        <p className='text-[#6c757d] mt-4 text-justify leading-7'>
                            یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و
                            دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا
                            هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی شما سال‌هاست بر روی آن‌ها کار کرده و
                            توانسته از این طریق مشتریان ثابت خود را داشته باشد
                        </p>
                    </div>
                    <div className='flex items-center justify-between mt-4 md:mt-0'>
                        <div className='w-24 h-24 p-4 border-[1px] rounded-md border-gray-400 transition-all duration-300 hover:border-main-blue m-2'>
                            <img className='w-16 h-16' src={namad1} alt="" />
                        </div>
                        <div className='w-24 h-24 p-4 border-[1px] rounded-md border-gray-400 transition-all duration-300 hover:border-main-blue m-2'>
                            <img className='w-16 h-16' src={namad2} alt="" />
                        </div>
                        <div className='w-24 h-24 p-4 border-[1px] rounded-md border-gray-400 transition-all duration-300 hover:border-main-blue m-2'>
                            <img className='w-16 h-16' src={namad3} alt="" />
                        </div>

                    </div>
                </div>


            </div>
            <div className='p-4 flex items-center justify-around bg-gray-100'>
                <h2 className=' text-center'>برای استفاده از مطالب فروشگاه، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت شما است.</h2>
            </div>
        </div>
    )
}
