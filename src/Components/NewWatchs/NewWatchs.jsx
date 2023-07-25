import React from 'react'
import ProductsSlider from '../ProductsSlider/ProductsSlider';
import datas from '../../datas/datas';

export default function NewWatchs() {
    return (
        <div className='  py-12 px-3 flex flex-col items-center justify-between w-full'>
            <div className='w-full lg:w-[80%] shadow-[0_0_5px_rgba(0,0,0,0.1)] bg-white rounded-md  p-4'>
                <div className='w-full flex flex-col small:flex-row  justify-between items-center   '>
                    <h2 className='text-2xl md:text-2xl  text-center'>جدیدترین ساعت ها</h2>

                    <button className='bg-transparent  px-4 py-2 mt-4 small:mt-0 rounded-md text-blue-400 flex items-center justify-between flex-row-reverse'>

                        مشاهده همه</button>
                </div>
                <div className='w-full mt-6   '>
                   <ProductsSlider products={datas.allProducts}/>
                </div>
            </div>
        </div>
    )
}
