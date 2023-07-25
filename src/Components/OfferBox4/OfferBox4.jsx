import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const offerDetails = [
    { id: 1, src: "./src/assets/offer-box4/banner-four-1.jpg" },
    { id: 2, src: "./src/assets/offer-box4/banner-four-2.jpg" },
    { id: 3, src: "./src/assets/offer-box4/banner-four-3.jpg" },
    { id: 4, src: "./src/assets/offer-box4/banner-four-4.jpg" },
]

export default function OfferBox4() {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div className='py-4  xl:px-32'>
            <div className=' flex flex-col items-center md:flex-row w-full px-4 xl:px-0'>
                {offerDetails.map(item => (
                    <div key={item.id} className='w-full  h-52 rounded-[40px] m-2   cursor-pointer overflow-hidden group' data-aos="flip-left" data-aos-duration="1000">
                        <img className='w-full h-full transition-all duration-500  group-hover:scale-105' src={item.src} alt="" />
                    </div>
                ))}

            </div>
        </div>
    )
}
