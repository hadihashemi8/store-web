import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import baner1 from  "/./src/assets/offer-box4/banner-four-1.jpg"
import baner2 from  "/./src/assets/offer-box4/banner-four-2.jpg"
import baner3 from  "/./src/assets/offer-box4/banner-four-3.jpg"
import baner4 from  "/./src/assets/offer-box4/banner-four-4.jpg"

const offerDetails = [
    { id: 1, src: baner1 },
    { id: 2, src: baner2 },
    { id: 3, src: baner3 },
    { id: 4, src: baner4 },
]

export default function OfferBox4() {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div className='py-4  xl:px-32'>
            <div className=' flex flex-col items-center md:flex-row w-full px-4 xl:px-0'>
                {offerDetails.map(item => (
                    <div key={item.id} className='w-full  rounded-[40px] m-2   cursor-pointer overflow-hidden group' data-aos="flip-left" data-aos-duration="1000">
                        <img className='w-full h-full transition-all duration-500  group-hover:scale-105' src={item.src} alt="" />
                    </div>
                ))}

            </div>
        </div>
    )
}
