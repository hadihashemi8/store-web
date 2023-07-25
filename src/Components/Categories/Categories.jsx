import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';



const categoris = [
    { id: 1, src: "./src/assets/categories/cat-1.png", title: "اسباب بازی کودک و نوزاد" },
    { id: 2, src: "./src/assets/categories/cat-2.png", title: "محصولات بومی محلی" },
    { id: 3, src: "./src/assets/categories/cat-3.png", title: "زیبایی وسلامت" },
    { id: 4, src: "./src/assets/categories/cat-4.png", title: "خانه وآشپزخانه" },
    { id: 5, src: "./src/assets/categories/cat-5.png", title: "کالای دیجیتال" },
    { id: 6, src: "./src/assets/categories/cat-6.png", title: "ابزار خودرو" },
    { id: 7, src: "./src/assets/categories/cat-7.png", title: "ورزش و سفر" },
    { id: 8, src: "./src/assets/categories/cat-8.png", title: "پوشاک" },
    { id: 9, src: "./src/assets/categories/cat-9.png", title: "موبایل" },
    { id: 10, src: "./src/assets/categories/cat-10.png", title: "کالا های سوپر مارکتی" },
    { id: 11, src: "./src/assets/categories/cat-11.png", title: "کتاب ،لوازم تحریر و هنر" },
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
