import React from 'react'

export default function FavouriteProductCard() {
  return (
    <div className='flex flex-col items-center  border-2 border-gray-200 bg-red-500 rounded-lg overflow-hidden mt-2 w-60'>
                    <div >
                        <img  src="/./src/assets/main-offer/offer2.jpg" alt="" />
                    </div>
                    <div className='flex flex-col items-center p-4 w-full'>
                        <p>
                            گوشی
                        </p>
                        <div className='flex justify-between items-center w-full mt-4 '>
                            <span className='bg-red-600 rounded-full text-white  w-8 flex items-center justify-center h-8'>15%</span>
                            <div className='flex flex-col '>
                                <span className='new-price  text-2xl'>12000000 تومان</span>
                                <span className='old-price opacity-50 line-through text-2xl'>18000000 تومان</span>
                            </div>
                        </div>
                    </div>
                </div>
  )
}
