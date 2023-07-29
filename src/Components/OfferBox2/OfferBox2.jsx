import React from 'react'
import baner1 from "/./src/assets/offer-box2/offer-1.jpg"


export default function OfferBox2 () {
    return (
        <div className='lg:px-32 py-16 p-8'>
            <div className='rounded-3xl overflow-hidden cursor-pointer'>
                <img className='hover:scale-110 transition-all duration-1000' src={baner1} alt="" />
            </div>
        </div>
    )
}
