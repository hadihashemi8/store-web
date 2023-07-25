import React from 'react'
import { IoIosArrowBack } from "react-icons/io"
import ProductsSlider from '../ProductsSlider/ProductsSlider';
import datas from '../../datas/datas';



export default function NewLaptops() {



    return (
        <div className='bg-[#1C93DE]  py-12 flex flex-col lg:flex-row  w-full '>
            <div className='w-full flex justify-between items-center px-4 flex-col'>
                <h2 className='text-main-white text-2xl md:text-3xl lg:text-4xl text-center'>جدیدترین  لبتابهای هفته</h2>
                <img className='hidden lg:block' src="/./src/assets/NewLabtops/product-box-labtab.png" alt="" />

                <button className='bg-transparent border-[1px] border-main-white px-4 py-2 mt-4 rounded-md text-main-white flex items-center justify-between flex-row-reverse'>
                    <IoIosArrowBack className='mr-1' />
                    مشاهده همه</button>
            </div>
            <div className='lg:w-[80%]    mt-6 px-8   '>
                <ProductsSlider products={datas.allProducts} />
            </div>
        </div>
    )
}


