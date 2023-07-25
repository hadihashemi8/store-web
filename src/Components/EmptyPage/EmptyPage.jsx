import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyPage({img , title  , button , link}) {
    return (
        <div className=' py-8 flex items-center justify-center'>
            <div className='flex flex-col items-center justify-between'>
                <img className='w-32' src={img} alt="" />
                <p className='text-lg text-main-blue my-2'>{title}</p>
                <Link to={link}>
                    <button className='w-[100px] p-1 bg-main-blue text-white rounded-2xl'>{button}</button>
                </Link>
            </div>
        </div>
    )
}
