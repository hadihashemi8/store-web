import React from 'react'


export default function BuyBtn({children , handleClick }) {




    return (
        <button onClick={() => handleClick()} className='my-4 bg-main-white rounded-3xl 2xl:text-xl border-[1px] border-main-blue text-main-blue flex items-center justify-center p-1 px-4 hover:text-main-white hover:bg-main-blue transition-all duration-200 cursor-pointer'>
            {children}
        </button>
    )
}
