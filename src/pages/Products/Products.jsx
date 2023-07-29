import React, { useState } from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import "./Products.css"
import Card from "../../Components/Card/Card"
import AppPagination from '../../Components/Pagination/AppPagination'
import datas from '../../datas/datas'
import { useDispatch, useSelector } from 'react-redux'
import FilterCategories from '../../Components/filterCategories/FilterCategories'
import FilterRightSection from '../../Components/FilterRightSection/FilterRightSection'






export default function Products() {

    const { products } = useSelector(state => state.filterItems)
    

    const [filterdOption, setFilterdOption] = useState('پیشفرض')
   
    const [allProducts, setAllProducts] = useState([])



    return (
        <div className="App max-w-screen-2xl mx-auto bg-main-gray relative ">
            <NavBar />

            <Breadcrumb links={[
                { id: 1, title: 'خانه', to: '/' },
                { id: 2, title: 'محصولات', to: '/Products' },
            ]} />

            <div className=' bg-main-gray '>
                <FilterCategories />


                {/* products section */}
                <div className='grid grid-cols-1 md:grid-cols-4  p-4 gap-4  '>
                    {/* filter section */}
                    <FilterRightSection />

                    <div className='rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.1)] bg-white col-span-1 md:col-span-3'>
                        <div className='p-4 '>
                            <div className='rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.1)] bg-white p-4 flex items-center justify-between'>
                                <div>
                                    <select className='outline-none p-2 bg-main-gray md:hidden'>
                                        <option value="پیشفرض">پیشفرض</option>
                                        <option value="محبوب ترین">محبوب ترین</option>
                                        <option value="پرفروش ترین">پرفروش ترین</option>
                                        <option value="جدیدترین">جدیدترین</option>
                                        <option value="ارزان ترین">ارزان ترین</option>
                                        <option value="گران ترین">گران ترین</option>
                                    </select>
                                    <ul className=' items-center justify-between hidden md:flex'>
                                        <li className={`p-2 lg:px-4 hover:bg-main-blue duration-200 mx-1 rounded-3xl font-semibold hover:text-white cursor-pointer  text-xs lg:text-sm  ${filterdOption == "پیشفرض" ? "bg-main-blue text-white" : "bg-white text-black"}`} onClick={() => setFilterdOption('پیشفرض')}>پیشفرض</li>
                                        <li className={`p-2 lg:px-4 hover:bg-main-blue duration-200 mx-1 rounded-3xl font-semibold hover:text-white cursor-pointer  text-xs lg:text-sm  ${filterdOption == "محبوب ترین" ? "bg-main-blue text-white" : "bg-white text-black"}`} onClick={() => setFilterdOption('محبوب ترین')}>محبوب ترین</li>
                                        <li className={`p-2 lg:px-4 hover:bg-main-blue duration-200 mx-1 rounded-3xl font-semibold hover:text-white cursor-pointer  text-xs lg:text-sm  ${filterdOption == "پرفروش ترین" ? "bg-main-blue text-white" : "bg-white text-black"}`} onClick={() => setFilterdOption('پرفروش ترین')}>پرفروش ترین</li>
                                        <li className={`p-2 lg:px-4 hover:bg-main-blue duration-200 mx-1 rounded-3xl font-semibold hover:text-white cursor-pointer  text-xs lg:text-sm  ${filterdOption == "جدیدترین" ? "bg-main-blue text-white" : "bg-white text-black"}`} onClick={() => setFilterdOption('جدیدترین')}>جدیدترین</li>
                                        <li className={`p-2 lg:px-4 hover:bg-main-blue duration-200 mx-1 rounded-3xl font-semibold hover:text-white cursor-pointer  text-xs lg:text-sm  ${filterdOption == "ارزان ترین" ? "bg-main-blue text-white" : "bg-white text-black"}`} onClick={() => setFilterdOption('ارزان ترین')}>ارزان ترین</li>
                                        <li className={`p-2 lg:px-4 hover:bg-main-blue duration-200 mx-1 rounded-3xl font-semibold hover:text-white cursor-pointer  text-xs lg:text-sm  ${filterdOption == "گران ترین" ? "bg-main-blue text-white" : "bg-white text-black"}`} onClick={() => setFilterdOption('گران ترین')}>گران ترین</li>
                                    </ul>
                                </div>
                                <p className='text-xs'>{products?.length} عدد</p>
                            </div>
                        </div>

                        <div className='p-4'>
                            <div className='bg-white  grid-flow-row  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {allProducts?.map(item => (
                                    <Card key={item.id} {...item} shadow={true} />
                                ))}
                            </div>
                        </div>


                        <AppPagination datas={products} setItems={setAllProducts} showItemCount={4} defaultPage={1} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
