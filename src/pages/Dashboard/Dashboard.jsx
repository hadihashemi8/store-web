import { Alert } from '@mui/material'
import React, { useState, useContext, useEffect } from 'react'
import { Link, Outlet, NavLink, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import { BiError } from "react-icons/bi"
import { TbEdit } from 'react-icons/tb'
import { AiOutlineHeart, AiOutlineHome } from 'react-icons/ai'
import { BiExit } from 'react-icons/bi'
import { SiDocsdotrs } from 'react-icons/si'
import { BsBag } from 'react-icons/bs'
import userInfos from '../../context/context'
import "./Dashboard.css"
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'

export default function Dashboard() {

    const context = useContext(userInfos)
    const navigate = useNavigate()



    return (
        <div className=" max-w-screen-2xl mx-auto bg-main-gray relative ">
            <NavBar />
            <Breadcrumb links={[
                { id: 1, title: 'خانه', to: '/' },
                { id: 2, title: 'پنل کاربری', to: '/Dashboard/Panel' },
            ]} />
            <div className='p-4 '>
                {context.isLogin ? (
                    <div className='grid grid-cols-1 lg:grid-cols-4   gap-4 '>
                        <div className='lg:col-span-1  relative'>
                            <div className='sticky top-0 left-0'>
                                <div className='shadow-[0_0_5px_rgba(0,0,0,0.1)] rounded-lg bg-white flex items-center justify-start p-4'>
                                    <img className='rounded-full' src="/./src/assets/user-profile.png" alt="" />
                                    <div className='mr-2 p-2 '>
                                        <h2 className='font-semibold text-xl'>هادی هاشمی</h2>
                                        <Link className='flex items-center justify-between text-blue-400'>
                                            <TbEdit className='ml-2' />
                                            <p>
                                                ویرایش مشخصات
                                            </p>
                                        </Link>
                                    </div>
                                </div>

                                <div className='bg-white shadow-[0_0_5px_rgba(0,0,0,0.1)] rounded-lg mt-4 py-6 px-2'>
                                    <ul >
                                        <li >
                                            <NavLink to="panel" className='flex items-center justify-start p-1 mt-4  cursor-pointer text-gray-500 text-xl border-r-2 border-transparent hover:text-main-blue hover:border-main-blue transition-all duration-200'>
                                                <AiOutlineHome className='mx-2 ' />
                                                پنل
                                            </NavLink>
                                        </li>
                                        <li >
                                            <NavLink to="favouriteProducts" className='flex  items-center justify-start p-1 mt-4  cursor-pointer text-gray-500 text-xl border-r-2 border-transparent hover:border-main-blue hover:text-main-blue transition-all duration-200' >
                                                <AiOutlineHeart className='mx-2 ' />
                                                محصولات مورد علاقه
                                            </NavLink>
                                        </li>

                                        <li >
                                            <NavLink to="lastOrders" className='flex  items-center justify-start p-1 mt-4  cursor-pointer text-gray-500 text-xl border-r-2 border-transparent hover:border-main-blue hover:text-main-blue transition-all duration-200'>
                                                <SiDocsdotrs className='mx-2 ' />
                                                آخرین سفارشات
                                            </NavLink>
                                        </li>

                                        <li >
                                            <NavLink to='/Backet' className='flex  items-center justify-start p-1 mt-4  cursor-pointer text-gray-500 text-xl border-r-2 border-transparent hover:border-main-blue hover:text-main-blue transition-all duration-200'>
                                                <BsBag className='mx-2 ' />
                                                سبد خرید
                                            </NavLink>
                                        </li>
                                        <li onClick={() => context.logOut()} className='flex  items-center justify-start p-1 mt-4  cursor-pointer text-gray-500 text-xl border-r-2 border-transparent hover:border-red-600 hover:text-red-600 transition-all duration-200'>
                                            <BiExit className='mx-2 ' />
                                            خروج از حساب کاربری
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='  shadow-[0_0_5px_rgba(0,0,0,0.1)] rounded-lg   lg:col-span-3 mt-4 lg:mt-0 p-4 bg-white'>
                            {/* error alert */}
                            <div className='flex flex-col sm:flex-row items-center justify-between bg-orange-400 p-3'>
                                <div className='mr-4 flex items-center justify-between'>
                                    <BiError className='text-4xl' />
                                    <div className='mr-4'>

                                        <h2 className='text-2xl font-semibold '>تایید شماره تلفن</h2>
                                        <p className='text-lg mt-2'>
                                            برای کار با پنل کاربری نیاز به تایید شماره تلفن دارید
                                        </p>
                                    </div>
                                </div>

                                <button className='ml-4 p-2 bg-main-blue text-white rounded-md mt-2 sm:mt-0'>
                                    بریم واسه تایید
                                </button>
                            </div>

                            <Outlet />

                        </div>

                    </div>

                ) : (
                    <Alert variant="filled" severity="warning">
                        جهت  شدن به پنل کاربری  <a className='text-blue-600 cursor-pointer' onClick={() => navigate('/Login')}>وارد</a> شوید
                    </Alert>
                )}
            </div>
            <Footer />
        </div>
    )
}
