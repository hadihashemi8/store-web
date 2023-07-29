import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import p1 from "/./src/assets/categories/cat-1.png"
import p2 from "/./src/assets/categories/cat-2.png"
import p3 from "/./src/assets/categories/cat-3.png"
import p4 from "/./src/assets/categories/cat-4.png"
import p5 from "/./src/assets/categories/cat-5.png"
import p6 from "/./src/assets/categories/cat-6.png"
import p7 from "/./src/assets/categories/cat-7.png"
import p8 from "/./src/assets/categories/cat-8.png"
import p9 from "/./src/assets/categories/cat-9.png"
import p10 from "/./src/assets/categories/cat-10.png"
import p11 from "/./src/assets/categories/cat-11.png"



const categoris = [
    { id: 1, src: p1, title: "اسباب بازی کودک و نوزاد" },
    { id: 2, src: p2, title: "محصولات بومی محلی" },
    { id: 3, src: p3, title: "زیبایی وسلامت" },
    { id: 4, src: p4, title: "خانه وآشپزخانه" },
    { id: 5, src: p5, title: "کالای دیجیتال" },
    { id: 6, src: p6, title: "ابزار خودرو" },
    { id: 7, src: p7, title: "ورزش و سفر" },
    { id: 8, src: p8, title: "پوشاک" },
    { id: 9, src: p9, title: "موبایل" },
    { id: 10, src: p10, title: "کالا های سوپر مارکتی" },
    { id: 11, src: p11, title: "کتاب ،لوازم تحریر و هنر" },
]

export default function Categories() {
    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div className=' pt-8 lg:px-32'>
            <div className='flex flex-col items-center '>
                <h2 className='text-lg small:text-2xl md:text-4xl '>دسته بندی فروشگاه ها</h2>
                <div className=' mt-6 grid-cols-2  sm:grid-cols-4 grid xl:grid-cols-6 gap-4 w-full p-4 '>
                    {categoris.map(item => (
                        <div key={item.id} className='cursor-pointer   flex flex-col items-center ' data-aos="zoom-in">
                            <img src={item.src} className='hover:scale-105 hover:rotate-6 transition-all duration-500 m-4' alt="" />
                            <p className='text-base'>{item.title}</p>
                        </div>
                    ))}



                </div>
            </div>
        </div>
    )
}
