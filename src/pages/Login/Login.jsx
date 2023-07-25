import React, { useState } from 'react'
import { TbUser } from "react-icons/tb"
import { FcGoogle } from "react-icons/fc"
import { AiOutlinePhone } from "react-icons/ai"
import { AiOutlineGithub } from 'react-icons/ai'
import { BiKey } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import { useContext } from 'react'
import userInfos from '../../context/context'
import swal from 'sweetalert'





export default function Login() {

    const [showLoginForm, setShowLoginForm] = useState(true)
    const [showSignUpForm, setShowSignUpForm] = useState(false)
    const context = useContext(userInfos)


    const showModal = () => {
        swal(
            { title: "تبریک", text: "با موفقیت وارد شدید", icon: "success", button: "صفحه اصلی" }
        )
            .then(() => history.back())
    }

    return (
        <div className=" max-w-screen-2xl mx-auto bg-main-gray relative overflow-x-hidden">
            <NavBar />
            <div className='bg-main-gray p-4'>
                <div className='rounded-lg p-4 shadow-[0_0_5px_rgba(0,0,0,0.1)] bg-white flex items-center justify-center'>

                    <div className='w-full  small:w-3/4 sm:w-[400px] ' >
                        <div className='p-4 flex items-center justify-between border-b-[1px] border-gray-200 '>
                            <h3 className='tracking-wide'>{showLoginForm ? "فرم ورود کاربران" : "فرم ثبت نام کاربران"}</h3>
                        </div>

                        <div className=' p-8 flex flex-col items-start border-b-[1px] border-gray-200 '>


                            {/* inputs container */}
                            {showLoginForm ? (
                                <>
                                    <div className='w-full'>
                                        <div className='flex items-center justify-between w-full mt-3 rounded-lg overflow-hidden border-[1px] border-gray-300'>
                                            <div className='p-2 bg-gray-300'>
                                                <TbUser className='text-2xl ' />
                                            </div>
                                            <input className='w-full outline-none p-2 placeholder:tracking-wide' type="text" placeholder='نام کاربری' />
                                        </div>
                                        <div className='flex items-center justify-between w-full mt-3 rounded-lg overflow-hidden border-[1px] border-gray-300'>
                                            <div className='p-2 bg-gray-300'>
                                                <BiKey className='text-2xl ' />
                                            </div>
                                            <input className='w-full outline-none p-2 placeholder:tracking-wide' type="text" placeholder='رمز عبور' />
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-between mt-6'>
                                        <input id='checkbox' type="checkbox" />
                                        <label htmlFor='checkbox' className='mr-2'>مرا به خاطر بسپار</label>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='w-full'>
                                        <div className='flex items-center justify-between w-full mt-3 rounded-lg overflow-hidden border-[1px] border-gray-300'>
                                            <div className='p-2 bg-gray-300'>
                                                <TbUser className='text-2xl ' />
                                            </div>
                                            <input className='w-full outline-none p-2 placeholder:tracking-wide' type="text" placeholder='نام و نام خانوادگی' />
                                        </div>
                                        <div className='flex items-center justify-between w-full mt-3 rounded-lg overflow-hidden border-[1px] border-gray-300'>
                                            <div className='p-2 bg-gray-300'>
                                                <TbUser className='text-2xl ' />
                                            </div>
                                            <input className='w-full outline-none p-2 placeholder:tracking-wide' type="text" placeholder='نام کاربری' />
                                        </div>
                                        <div className='flex items-center justify-between w-full mt-3 rounded-lg overflow-hidden border-[1px] border-gray-300'>
                                            <div className='p-2 bg-gray-300'>
                                                <AiOutlinePhone className='text-2xl ' />
                                            </div>
                                            <input className='w-full outline-none p-2 placeholder:tracking-wide' type="text" placeholder='شماره تلفن' />
                                        </div>
                                        <div className='flex items-center justify-between w-full mt-3 rounded-lg overflow-hidden border-[1px] border-gray-300'>
                                            <div className='p-2 bg-gray-300'>
                                                <BiKey className='text-2xl ' />
                                            </div>
                                            <input className='w-full outline-none p-2 placeholder:tracking-wide' type="text" placeholder='رمز عبور' />
                                        </div>
                                        <div className='flex items-center justify-between w-full mt-3 rounded-lg overflow-hidden border-[1px] border-gray-300'>
                                            <div className='p-2 bg-gray-300'>
                                                <BiKey className='text-2xl ' />
                                            </div>
                                            <input className='w-full outline-none p-2 placeholder:tracking-wide' type="text" placeholder='تکرار رمز عبور' />
                                        </div>
                                    </div>
                                </>
                            )}




                            <div className='mt-10 w-full flex flex-col small:flex-row items-center justify-around'>

                                {showLoginForm ? (
                                    <button onClick={() => {
                                        context.login()
                                        showModal()

                                    }} className='bg-main-blue w-24 text-white p-2 rounded-md tracking-wide border-[1px] border-main-blue hover:bg-white hover:text-main-blue transition-all duration-300 '>ورود </button>

                                ) : (

                                    <button className='bg-main-blue w-24 text-white p-2 rounded-md tracking-wide border-[1px] border-main-blue hover:bg-white hover:text-main-blue transition-all duration-300'>ثبت نام</button>
                                )}

                                {showLoginForm ? (
                                    <p className='cursor-pointer mt-4 small:mt-0 ' onClick={() => {
                                        setShowSignUpForm(true)
                                        setShowLoginForm(false)
                                    }}>حسابی ندارید؟ثبت نام کنید</p>

                                ) : (
                                    <p className='cursor-pointer mt-4 small:mt-0 ' onClick={() => {
                                        setShowSignUpForm(false)
                                        setShowLoginForm(true)
                                    }}>وارد شوید</p>
                                )}
                            </div>
                        </div>

                        <div className='my-6 flex items-center justify-center w-full'>
                            <FcGoogle className='text-3xl mx-2 cursor-pointer' />
                            <BsFacebook className='text-3xl mx-2 cursor-pointer' />
                            <AiOutlineGithub className='text-3xl mx-2 cursor-pointer' />
                        </div>

                    </div>

                </div>
            </div>

            <Footer />
        </div>

    )
}
