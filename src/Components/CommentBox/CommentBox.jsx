import React from 'react'
import { AiFillStar, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import user from "/./src/assets/user-profile.png"



export default function CommentBox() {
    return (
        <div className='bg-gray-100 mt-4 shadow-[inset_0_0_15px_2px_rgba(0,0,0,0.1)] w-full rounded-xl p-5 flex flex-col items-start'>
            <div className='w-full flex flex-col items-start md:flex-row md:items-center md:justify-between '>
                <div className='flex justify-start items-center '>
                    <div className='p-2 w-16 h-16 bg-white rounded-full flex items-center justify-center'>
                        <img className='rounded-full' src={user} alt="" />
                    </div>
                    <p className='mr-2 '>هادی هاشمی</p>
                    <p className='mr-2 '>2 مهر 1400</p>
                </div>

                <div className='p-2  flex items-center justify-center self-end md:self-center '>
                    <AiFillStar className='text-yellow-400 mr-1 text-lg' />
                    <AiFillStar className='text-yellow-400 mr-1 text-lg' />
                    <AiFillStar className='text-yellow-400 mr-1 text-lg' />
                    <AiFillStar className='text-yellow-400 mr-1 text-lg' />
                    <AiFillStar className='text-gray-300 mr-1 text-lg' />
                </div>

            </div>

            <p className='text-justify mt-4'>
                بنده این گوشی را خریداری کردم و کاملا راضی هشتم و بهترین گارانتی را دارد
                و پلپ بود و حتما به شما هم پیشنهاد می نمایم که چنانچه قصد خرید این کالا
                را دارید از دیجی کالا تهیه نمایید ؛پارت نامبر من هم سنگاپور بود که
                بهترین پارت نامبر در بازار است و هیچ محدودیتی ندارد.
            </p>



            <div className='mt-12 w-full'>

                <div className='bg-green-400 rounded-xl p-4 mt-5 md:w-3/4'>
                    <div className='flex flex-col sm:flex-row sm:items-center'>
                        <h2 className='text-green-800 font-semibold'>نقاط مثبت</h2>
                        <ul className=' md:mr-2 mt-3 sm:mt-0 flex flex-col items-start  justify-between sm:flex-row sm:items-center'>
                            <li className='sm:mx-1 my-1 p-1 bg-green-200 rounded-lg'>جنس بدنه</li>
                            <li className='sm:mx-1 my-1 p-1 bg-green-200 rounded-lg'>کیفیت تصویر</li>
                            <li className='sm:mx-1 my-1 p-1 bg-green-200 rounded-lg'>شارژ باطری</li>
                            <li className='sm:mx-1 my-1 p-1 bg-green-200 rounded-lg'>دوربین قوی</li>
                        </ul>
                    </div>
                </div>

                <div className='bg-red-400 rounded-xl p-4 mt-5 md:w-3/4'>
                    <div className='flex flex-col sm:flex-row sm:items-center'>
                        <h2 className='text-red-800 font-semibold'>نقاط ضعف</h2>
                        <ul className=' md:mr-2 mt-3 sm:mt-0 flex flex-col items-start  justify-between sm:flex-row sm:items-center'>
                            <li className='sm:mx-1 my-1 p-1 bg-red-200 rounded-lg'>جنس بدنه</li>
                            <li className='sm:mx-1 my-1 p-1 bg-red-200 rounded-lg'>کیفیت تصویر</li>
                            <li className='sm:mx-1 my-1 p-1 bg-red-200 rounded-lg'>شارژ باطری</li>
                            <li className='sm:mx-1 my-1 p-1 bg-red-200 rounded-lg'>دوربین قوی</li>
                        </ul>
                    </div>
                </div>

            </div>


            <div className='mt-8'>
                <div className='flex items-center justify-between'>
                    <p>آیا این نظر به شما کمکی کرد؟</p>
                    <div className='flex '>
                        <div className='cursor-pointer w-14 mx-1 p-1 bg-main-blue rounded-lg text-white flex justify-around items-center '>
                            <p className='text-sm pt-1'>70</p>
                            <AiOutlineLike className=' text-lg' />
                        </div>
                        <div className='cursor-pointer w-14 mx-1 p-1 bg-red-600 rounded-lg text-white flex justify-around items-center '>
                            <p className='text-sm pt-1'>70</p>
                            <AiOutlineDislike className=' text-lg' />
                        </div>
                    </div>
                </div>

                <button className='mt-8 w-24 bg-red-600 px-2 py-1 rounded-full text-white'>پاسخ</button>
            </div>
        </div>
    )
}
