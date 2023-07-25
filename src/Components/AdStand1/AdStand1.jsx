import React from 'react'
import { GrClose } from 'react-icons/gr'
import { IoMdClose } from 'react-icons/io'

export default function AdStand1(props) {
    return (
        
        <div className={`  bg-red-600  flex items-center justify-around relative transition-all duration-300 ${props.show ? "h-16" : "h-0"}`}>
            <h2 className='text-2xl text-white'>جشنواره شگفت انگیز</h2>

            <IoMdClose className='text-white absolute top-1/2 right-[2%] text-2xl cursor-pointer -translate-x-[2%] -translate-y-1/2'  />
        </div>
    )
}
