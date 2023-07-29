import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Slider, Typography } from '@mui/material'
import { BsSearch } from 'react-icons/bs'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GrFormClose } from 'react-icons/gr'
import { Box } from '@mui/system'



function valuetext(value) {
    return `${value}`;
}

export default function FilterRightSection() {

    const [value, setValue] = useState([1000000, 15000000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
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
    )
}
