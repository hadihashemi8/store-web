import React from 'react'
import img1 from "/./src/assets/footer/contact-us.svg"
import img2 from "/./src/assets/footer/delivery.svg"
import img3 from "/./src/assets/footer/payment-terms.svg"
import img4 from "/./src/assets/footer/return-policy.svg"
import img5 from "/./src/assets/footer/origin-guarantee.svg"

export default function Properties() {
    return (
        <div>
            <div className='flex flex-wrap   justify-around items-center '>
                <div className='  flex justify-around items-center w-36  my-4 '>
                    <img className='w-8 h-8 ' src={img1} alt="" />
                    <h3 className='text-center my-2 text-sm'>پشتیبانی 24 ساعته</h3>
                </div>
                <div className='  flex justify-around items-center w-36  my-4  '>
                    <img className='w-8 h-8 ' src={img2} alt="" />
                    <h3 className='text-center my-2 text-sm'>تحویل اکسپرس</h3>
                </div>
                <div className='  flex justify-around items-center w-36  my-4 '>
                    <img className='w-8 h-8 ' src={img3} alt="" />
                    <h3 className='text-center my-2 text-sm'>پرداخت در محل</h3>
                </div>
                <div className='  flex justify-around items-center w-  my-4 '>
                    <img className='w-8 h-8 ' src={img4} alt="" />
                    <h3 className='text-center my-2 text-sm'>۷ روز ضمانت بازگشت
                    </h3>
                </div>
                <div className='  flex justify-around items-center w-36  my-4 '>
                    <img className='w-8 h-8 ' src={img5} alt="" />
                    <h3 className='text-center my-2 text-sm'>ضمانت اصل بودن کالا</h3>
                </div>
            </div>
        </div>
    )
}
