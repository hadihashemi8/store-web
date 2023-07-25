import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const offerDetails = [
    { id: 1, src: "./src/assets/offer-box1/offer-1.jpg" , fade:"fade-left"},
    { id: 2, src: "./src/assets/offer-box1/offer-2.jpg" , fade:"fade-right"},
]

export default function OfferBox1() {

    useEffect(() => {
        AOS.init();
      }, [])



    return (
        <div className='py-4  xl:px-32 w-full ' >
            <div className=' flex flex-col items-center md:flex-row w-full px-4 xl:px-0' >
                {offerDetails.map(item => (
                    <div key={item.id} className='w-full  h-52 rounded-[40px] m-1   cursor-pointer overflow-hidden group ' data-aos={item.fade} >
                        <img className='w-full h-full transition-all duration-500  group-hover:scale-105' src={item.src} alt="" />
                    </div>
                ))}

            </div>
        </div>
    )
}
