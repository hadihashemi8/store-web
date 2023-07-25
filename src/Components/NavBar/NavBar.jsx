import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa"
import { BiUser } from "react-icons/bi"
import { BsBag } from "react-icons/bs"
import { GrClose } from "react-icons/gr"
import { BsSearch } from "react-icons/bs"
import { BsBarChartSteps } from "react-icons/bs"
import { RiPagesLine } from "react-icons/ri"
import { BsTag } from "react-icons/bs"
import MenuItem from '../MenuItem/MenuItem'
import SocialMedia from '../SocialMedia/SocialMedia'
import OpenMenuBar from '../OpenMenuBar/OpenMenuBar'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import userInfos from '../../context/context'
import { Tooltip } from '@mui/material'
import { BiHelpCircle } from "react-icons/bi"
import { IoIosArrowBack } from "react-icons/io"
import { useSelector } from 'react-redux'




const menuItemInfo = [
    {
        id: 1, category: 'گوشی موبایل', subMenu: [
            { id: 1, subMenuTitle: 'برند', subMenuItems: ['سامسونگ', 'هواوی', 'شیاومی', 'آیفون'] },
            { id: 2, subMenuTitle: 'سال ساخت', subMenuItems: ['2019', '2018', '2017', '2016'] },
        ]
    },
    {
        id: 2, category: 'لبتاپ', subMenu: [
            { id: 1, subMenuTitle: 'برند', subMenuItems: ['دل', 'ایسوس', 'اچ پی', 'مک'] }
        ]
    },
    {
        id: 3, category: 'تبلت', subMenu: [
            { id: 1, subMenuTitle: 'برند', subMenuItems: ['سامسونگ', 'هواوی', 'شیاومی', 'آیفون'] },
            { id: 2, subMenuTitle: 'سال ساخت', subMenuItems: ['2019', '2018', '2017', '2016'] },
        ]
    },
    {
        id: 4, category: 'صفحات', subMenu: [
            { id: 1, subMenuTitle: 'صفحه اصلی', subMenuItems: [] },
            { id: 2, subMenuTitle: 'محصولات', subMenuItems: [] },
            { id: 3, subMenuTitle: 'تماس با ما', subMenuItems: [] },
            { id: 4, subMenuTitle: 'درباره ما', subMenuItems: [] },
        ]
    },
]


export default function NavBar() {

    const context = useContext(userInfos)
    const [activeSideBar, setActiveSideBar] = useState(false)
    const [openMenuBar, setOpenMenuBar] = useState(false)
    const [showSmallNav, setShowSmallNav] = useState(false)
    const { products } = useSelector(state => state.basket)



    useEffect(() => {

        window.addEventListener("scroll", () => {

            if (window.scrollY >= 200) {
                setShowSmallNav(true)
            } else if (window.scrollY < 20) {
                setShowSmallNav(false)
            }

        })

        
    }, [])


  



    return (
        <>
            <nav>
                <div className={`bg-main-blue w-full z-50  px-4  md:px-28  flex flex-col -top-full left-0  duration-700 ${showSmallNav && "fixed top-0 "}`}>

                    <div className="top-part  flex justify-between items-center  py-4">
                        <div className='manu-part lg:hidden'>
                            < FaBars onClick={() => setActiveSideBar(true)} className='bar-icon text-white text-3xl cursor-pointer ' />
                        </div>
                        <div className='logo-part'>
                            <Link to="/">
                                <h3 className='text-xl text-white font-semibold'>لوگوی شما</h3>
                            </Link>
                        </div>
                        <div className='searchBox-part  hidden lg:block w-1/2 '>
                            <div className='search-box px-4  bg-gray-300 rounded-full overflow-hidden flex items-center '>
                                <input className='p-2 w-full bg-transparent placeholder:text-sm border-none outline-none' type="text" placeholder='نام محصول مورد نظر خود را وارد کنید' />
                                < BsSearch className='text-2xl cursor-pointer  ' />
                            </div>
                        </div>
                        <div className='user-part flex items-center '>
                            {context.isLogin ? (
                                <Tooltip title="پنل" placement="right">

                                    <div className=' cursor-pointer login-part lg:ml-4 ml-2 flex items-center flex-row-reverse lg:bg-main-gold lg:p-2 lg:rounded-xl'>
                                        <Link to="/Dashboard/Panel">
                                            {/* <p className='text-md hidden lg:block' > ورود به پنل</p> */}
                                            <BiUser className=' text-xl text-white lg:text-black  md:text-2xl cursor-pointer' />
                                        </Link>
                                    </div>
                                </Tooltip>
                            ) : (
                                <Link to="/Login">
                                    <div className=' cursor-pointer login-part lg:ml-4 ml-2 flex items-center flex-row-reverse lg:bg-main-gold lg:p-2 lg:rounded-xl'>
                                        <p className='text-md hidden lg:block' >ورود به حساب کاربری</p>
                                        <BiUser className='ml-2 text-xl text-white lg:text-black  md:text-2xl cursor-pointer' />
                                    </div>
                                </Link>
                            )}

                            <Tooltip title="سبد خرید" placement="left">

                                <Link to="/Backet">
                                    <div className='relative '>
                                       
                                    <span className='w-4 h-4  pt-1 text-xs font-semibold flex items-center justify-center rounded-full absolute -bottom-1/3 right-1 bg-main-gold'>{products?.reduce((acc, cur) => acc + cur.qty, 0)}</span>
                                    <BsBag className='text-white basket mr-2 text-xl md:text-2xl  cursor-pointer' />

                                </div>
                            </Link>
                        </Tooltip>
                    </div>
                </div>

                <div className={`bottom-part  py-1  hidden lg:flex justify-between ${showSmallNav && "lg:hidden"}`}>
                    <ul className='menu-item-container flex   '>
                        <li onMouseOver={() => setOpenMenuBar(true)} onMouseLeave={() => setOpenMenuBar(false)} className="menuItem relative text-white group text-base hover:text-main-gold py-4 px-6  hover:text-white  duration-300 cursor-pointer flex items-center">
                            <FaBars className='ml-2' />
                            <a href="#">دسته بندی کالا </a>
                            {openMenuBar && (

                                <OpenMenuBar menuItemInfo={menuItemInfo} onMouseOver={() => setOpenMenuBar(true)} onMouseLeave={() => setOpenMenuBar(false)} />

                            )}
                        </li>

                        <li className="menuItem group/a relative   text-white group hover:text-main-gold py-4 px-6 flex items-center text-base  hover:text-white  duration-300 cursor-pointer">
                            <BsBarChartSteps className='ml-2' />
                            <a href="#">منو</a>
                            <ul className='absolute top-full right-0 opacity-0 group-hover/a:opacity-100 duration-300 bg-white shadow-[0_0_5px_rgba(0,0,0,0.1)] -z-50 group-hover/a:z-40 w-[200%] rounded-lg '>
                                <li className='p-3 text-gray-400 hover:bg-main-gold hover:text-main-blue duration-300 rounded-lg'><a href="#">منو</a></li>
                                <li className='p-3 text-gray-400 hover:bg-main-gold hover:text-main-blue duration-300 rounded-lg'><a href="#">منو</a></li>
                                <li className='p-3 text-gray-400 hover:bg-main-gold hover:text-main-blue duration-300 rounded-lg'><a href="#">منو</a></li>
                                <li className='p-3 flex items-center justify-between relative group/b text-gray-400 hover:bg-main-gold hover:text-main-blue duration-300 rounded-lg'>
                                    <a href="#">منو</a>
                                    <IoIosArrowBack className='-rotate-90 group-hover/b:rotate-0 duration-300' />
                                    <ul className='absolute top-0 -left-[101%]  opacity-0 group-hover/b:opacity-100 duration-300 bg-white shadow-[0_0_5px_rgba(0,0,0,0.1)] z-50 w-[100%] rounded-lg overflow-hidden'>
                                        <li className='p-3 text-gray-400 hover:bg-main-gold hover:text-main-blue duration-300 rounded-lg'>منو</li>
                                        <li className='p-3 text-gray-400 hover:bg-main-gold hover:text-main-blue duration-300 rounded-lg'>منو</li>
                                        <li className='p-3 text-gray-400 hover:bg-main-gold hover:text-main-blue duration-300 rounded-lg'>منو</li>
                                    </ul>
                                </li>
                                <li className='p-3 text-gray-400 hover:bg-main-gold hover:text-main-blue duration-300 rounded-lg'><a href="#">منو</a></li>
                                <li className='p-3 text-gray-400 hover:bg-main-gold hover:text-main-blue duration-300 rounded-lg'><a href="#">منو</a></li>
                            </ul>
                        </li>
                        <li className="menuItem text-white group hover:text-main-gold py-4 px-6 flex items-center text-base  hover:text-white  duration-300 cursor-pointer"><RiPagesLine className='ml-2' /> <Link to="/products">محصولات</Link></li>
                        <li className="menuItem text-white group hover:text-main-gold py-4 px-6 flex items-center text-base  hover:text-white  duration-300 cursor-pointer"> <BsTag className='ml-2' /><Link to="/OfferCodes">تخفیف ها </Link></li>
                        <li className="menuItem text-white group hover:text-main-gold py-4 px-6 flex items-center text-base  hover:text-white  duration-300 cursor-pointer"><BiHelpCircle className='ml-2' /> <a href="#">سوالی دارید؟</a></li>
                    </ul>
                    <SocialMedia />
                </div>


                <div className={`small:w-2/3 sm:w-1/2 p-4  w-[90%] h-[100vh] overflow-y-scroll fixed top-0 bg-blue-600 transition-all duration-300 z-50 ${activeSideBar ? 'right-0' : '-right-full '}`} >
                    <div className='main-navBar'>
                        <div className='close-btn'>
                            <GrClose className='cursor-pointer text-2xl' onClick={() => setActiveSideBar(false)} />
                        </div>
                        <div className='title-part flex justify-evenly items-center my-2'>
                            <h3 className='text-xl font-semibold'>لوگوی شما</h3>
                            <h3 className='text-xl font-semibold'>لوگوی شما</h3>
                        </div>
                        <div className='searchBox-part my-4'>
                            <div className='search-box px-2 bg-gray-300 rounded-full overflow-hidden flex items-center '>
                                <input className='p-2 w-full bg-transparent placeholder:text-sm border-none outline-none' type="text" placeholder='نام محصول مورد نظر خود را وارد کنید' />
                                < BsSearch className='text-2xl cursor-pointer  ' />
                            </div>
                        </div>
                        <div className='menu-items my-8'>
                            {menuItemInfo.map(item => (
                                <MenuItem key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </nav >
        </>

    )

}
