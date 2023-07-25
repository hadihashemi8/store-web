import React, { useEffect } from 'react'
import { GiBackwardTime } from "react-icons/gi"
import { FiCreditCard } from "react-icons/fi"
import { TbCar } from "react-icons/tb"
import { FiHeadphones } from "react-icons/fi"
import { SiAdguard } from "react-icons/si"
import AOS from 'aos';
import 'aos/dist/aos.css';


const property = [
    {id:1 , Icon:<GiBackwardTime /> , title:"بازگشت وجه" , text:"درصورت عدم رضایت" , fade:"fade-up"},
    {id:2 , Icon:<FiCreditCard /> , title:"تضمین قیمت" , text:"کمترین قیمت بازار" , fade:"fade-down"},
    {id:3 , Icon:<TbCar /> , title:"ارسال سریع" , text:"امن و مطمئن" , fade:"fade-up"},
    {id:4 , Icon:<FiHeadphones /> , title:"پشتیبانی عالی" , text:"درصورت عدم رضایت" , fade:"fade-down"},
    {id:5 , Icon:<SiAdguard /> , title:"اصالت کالا" , text:"امن و مطمئن" , fade:"fade-up"},
]


export default function StoreProperty() {

    useEffect(() => {
        AOS.init();
      }, [])



    return (
        <div className='property-container w-full  xl:px-32 py-4 '  >
            <div className=' flex flex-wrap xl:flex-nowrap justify-around'>
                {property.map(item => (
                <div key={item.id} className=' w-[250px] bg-white flex items-center justify-between p-1 px-4 rounded-xl m-1 ' data-aos={item.fade}>
                    <span className='text-2xl text-blue-400'>
                        {item.Icon}
                    </span>
                    <div className='w-full  flex flex-col items-center justify-between'>
                        <h4 className='text-xl font-semibold text-gray-500'>{item.title}</h4>
                        <p className=' text-gray-500'>{item.text}</p>
                    </div>

                </div>
                ))}
            </div>
        </div>
    )
}
