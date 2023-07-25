import { Accordion, AccordionDetails, AccordionSummary, Slider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BsPhone, BsSearch } from 'react-icons/bs'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GrFormClose } from 'react-icons/gr'
import "./Products.css"
import { Box } from '@mui/system'
import Card from "../../Components/Card/Card"
import AppPagination from '../../Components/Pagination/AppPagination'
import datas from '../../datas/datas'





function valuetext(value) {
    return `${value}`;
}

export default function Products() {

    const [filterdOption, setFilterdOption] = useState('پیشفرض')
    const [value, setValue] = useState([1000000, 15000000]);
    const [allProducts, setAllProducts] = useState(datas.allProducts)
    const [products, setProducts] = useState([])



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };






    return (
        <div className="App max-w-screen-2xl mx-auto bg-main-gray relative ">
            <NavBar />

            <Breadcrumb links={[
                { id: 1, title: 'خانه', to: '/' },
                { id: 2, title: 'محصولات', to: '/Products' },
            ]} />

            <div className=' bg-main-gray '>
                <div className=' p-4'>
                    <div className='rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.1)] bg-white   flex flex-col items-start justify-between p-4'>

                        <h3 className='font-semibold border-r-4 border-main-blue pr-3'>دسته بندی</h3>

                        <div className='flex items-center justify-start  mt-5 overflow-x-scroll  w-full no-scrollbar'>
                            <div className='shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)] w-24 p-4 mx-2 bg-main-gray flex  items-center justify-between rounded-lg cursor-pointer'>
                                <BsPhone />
                                <p>موبایل</p>
                            </div>
                            <div className='shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)] w-24 p-4 mx-2 bg-main-gray flex  items-center justify-between rounded-lg cursor-pointer'>
                                <BsPhone />
                                <p>موبایل</p>
                            </div>
                            <div className='shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)] w-24 p-4 mx-2 bg-main-gray flex  items-center justify-between rounded-lg cursor-pointer'>
                                <BsPhone />
                                <p>موبایل</p>
                            </div>
                            <div className='shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)] w-24 p-4 mx-2 bg-main-gray flex  items-center justify-between rounded-lg cursor-pointer'>
                                <BsPhone />
                                <p>موبایل</p>
                            </div>
                            <div className='shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)] w-24 p-4 mx-2 bg-main-gray flex  items-center justify-between rounded-lg cursor-pointer'>
                                <BsPhone />
                                <p>موبایل</p>
                            </div>
                            <div className='shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)] w-24 p-4 mx-2 bg-main-gray flex  items-center justify-between rounded-lg cursor-pointer'>
                                <BsPhone />
                                <p>موبایل</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4  p-4 gap-4  '>
                    <div className=' col-span-1  relative'>
                        <div className=' sticky top-0 left-0'>

                            <div className='rounded-lg overflow-hidden mb-2 shadow-[0_0_5px_rgba(0,0,0,0.1)]'>
                                <Accordion>
                                    <AccordionSummary

                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className='font-semibold '>فیلترهای اعمال شده</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className=' shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)] flex flex-wrap justify-around  bg-main-gray'>
                                        <div className='px-4 py-1 mt-2 flex items-center justify-between rounded-3xl bg-white border-[1px] border-gray-300'>
                                            <p>گوشی</p>
                                            <GrFormClose className='text-red-600 mr-2 cursor-pointer' />
                                        </div>
                                        <div className='px-4 py-1 mt-2 flex items-center justify-between rounded-3xl bg-white border-[1px] border-gray-300'>
                                            <p>گوشی</p>
                                            <GrFormClose className='text-red-600 mr-2 cursor-pointer' />
                                        </div>
                                        <div className='px-4 py-1 mt-2 flex items-center justify-between rounded-3xl bg-white border-[1px] border-gray-300'>
                                            <p>گوشی</p>
                                            <GrFormClose className='text-red-600 mr-2 cursor-pointer' />
                                        </div>

                                    </AccordionDetails>
                                </Accordion>
                            </div>

                            <div className='rounded-lg overflow-hidden mb-2 shadow-[0_0_5px_rgba(0,0,0,0.1)]'>
                                <Accordion >
                                    <AccordionSummary

                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className='font-semibold '>محدوده قیمت</Typography>

                                    </AccordionSummary>
                                    <AccordionDetails className='shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)]  flex flex-wrap justify-around  bg-main-gray'>
                                        <div className='flex flex-col items-center '>
                                            <Box sx={{ width: 200 }} >
                                                <Slider

                                                    getAriaLabel={() => 'Temperature range'}
                                                    value={value}
                                                    min={1000000}
                                                    max={15000000}
                                                    onChange={handleChange}
                                                    getAriaValueText={valuetext}
                                                />
                                            </Box>

                                            <p className='text-sm text-blue-600 mt-4'>{value[1]} - {value[0]}</p>

                                            <button className='bg-red-600 mt-4 text-white p-2 px-4 rounded-xl'>اعمال فیلتر</button>
                                        </div>

                                    </AccordionDetails>
                                </Accordion>
                            </div>

                            <div className='rounded-lg overflow-hidden mb-2 shadow-[0_0_5px_rgba(0,0,0,0.1)]'>
                                <Accordion >
                                    <AccordionSummary

                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className='font-semibold '>موجودیت</Typography>

                                    </AccordionSummary>
                                    <AccordionDetails className='shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)]  flex flex-wrap justify-around  bg-main-gray'>
                                        <div className='flex items-center justify-start w-full my-4'>

                                            <input type="checkbox" id="hasProductCheckBox" className='w-4 h-4' />
                                            <label htmlFor="hasProductCheckBox" className='mr-2'>فقط کالاهای موجود</label>

                                        </div>

                                    </AccordionDetails>
                                </Accordion>
                            </div>

                            <div className='rounded-lg overflow-hidden mb-2 shadow-[0_0_5px_rgba(0,0,0,0.1)]'>
                                <Accordion >
                                    <AccordionSummary

                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className='font-semibold '>فیلتر بر اساس رنگ</Typography>

                                    </AccordionSummary>
                                    <AccordionDetails className='shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)]  flex flex-col items-start justify-around  bg-main-gray'>

                                        <div className='flex items-center justify-start w-full mt-2'>
                                            <input type="radio" id="purple" className='w-4 h-4' name="colorFilter" />
                                            <label htmlFor="purple" className='mr-2'>بنفش</label>
                                        </div>
                                        <div className='flex items-center justify-start w-full mt-2'>
                                            <input type="radio" id="red" className='w-4 h-4' name="colorFilter" />
                                            <label htmlFor="red" className='mr-2'>قرمز</label>
                                        </div>
                                        <div className='flex items-center justify-start w-full mt-2'>
                                            <input type="radio" id="yellow" className='w-4 h-4' name="colorFilter" />
                                            <label htmlFor="yellow" className='mr-2'>زرد</label>
                                        </div>
                                        <div className='flex items-center justify-start w-full mt-2'>
                                            <input type="radio" id="blue" className='w-4 h-4' name="colorFilter" />
                                            <label htmlFor="blue" className='mr-2'>آبی</label>
                                        </div>

                                        <button className='bg-red-600 mt-4 self-center text-white p-2 px-4 rounded-xl'>اعمال فیلتر</button>


                                    </AccordionDetails>
                                </Accordion>
                            </div>

                            <div className='rounded-lg overflow-hidden mb-2 shadow-[0_0_5px_rgba(0,0,0,0.1)]'>
                                <Accordion >
                                    <AccordionSummary

                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className='font-semibold '>جستجو</Typography>

                                    </AccordionSummary>
                                    <AccordionDetails className='shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)]  flex flex-col items-start justify-around  bg-main-gray'>
                                        <div className='flex items-center w-full my-2 rounded-3xl pl-2 bg-main-gray border-[1px] border-gray-400 overflow-hidden'>
                                            <input className='py-2 px-3 outline-none bg-transparent w-full placeholder:text-xs' type="text" placeholder='نام محصول مورد نظر خود را وارد کنید' />
                                            <BsSearch className='text-3xl p-1 cursor-pointer' />
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            </div>

                            <div className='rounded-lg overflow-hidden mb-2 shadow-[0_0_5px_rgba(0,0,0,0.1)]'>
                                <Accordion >
                                    <AccordionSummary

                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className='font-semibold '>فیلتر بر اساس دسته بندی</Typography>

                                    </AccordionSummary>
                                    <AccordionDetails className=' shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)] flex flex-col items-start justify-around  bg-main-gray'>

                                        <div className='flex items-center justify-start w-full mt-2'>
                                            <input type="checkbox" id="phone" className='w-4 h-4' />
                                            <label htmlFor="phone" className='mr-2'>گوشی</label>
                                        </div>
                                        <div className='flex items-center justify-start w-full mt-2'>
                                            <input type="checkbox" id="amz-offer" className='w-4 h-4' />
                                            <label htmlFor="amz-offer" className='mr-2'>فروش ویژه</label>
                                        </div>
                                        <div className='flex items-center justify-start w-full mt-2'>
                                            <input type="checkbox" id="laptop" className='w-4 h-4' />
                                            <label htmlFor="laptop" className='mr-2'>لبتاب</label>
                                        </div>
                                        <div className='flex items-center justify-start w-full mt-2'>
                                            <input type="checkbox" id="watch" className='w-4 h-4' />
                                            <label htmlFor="watch" className='mr-2'>ساعت</label>
                                        </div>

                                        <button className='bg-red-600 mt-4 self-center text-white p-2 px-4 rounded-xl'>اعمال فیلتر</button>


                                    </AccordionDetails>
                                </Accordion>
                            </div>

                        </div>
                    </div>

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
                                <p className='text-xs'>3 عدد</p>
                            </div>
                        </div>

                        <div className='p-4'>
                            <div className='bg-white  grid-flow-row  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {products.map(item => (
                                    <Card key={item.id} {...item} shadow={true} />
                                ))}
                            </div>
                        </div>


                        <AppPagination datas={allProducts} setItems={setProducts} showItemCount={3} defaultPage={1}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
