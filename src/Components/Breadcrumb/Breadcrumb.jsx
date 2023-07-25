import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'


export default function Breadcrumb({ links }) {



    return (
        <div className='  p-4 flex items-center justify-center '>
            <div className='bg-white shadow-[0_0_5px_rgba(0,0,0,0.1)] h-14 w-full rounded-lg flex items-center justify-start px-10'>
                <ul className='flex'>
                    {links.map(link => (
                        <li key={link.id}>
                            <Link className={`flex items-center justify-between ${link.id == links.length ? "border-b-[1px] border-blue-400  text-blue-400" : "text-black"}`} to={link.productId ? link.to + '/' +link.productId : link.to}>
                                {link.title}
                                {
                                    link.id !== links.length ? (
                                       <IoIosArrowBack/>
                                    ) : null
                                }
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}
