import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import notFound from "/./src/assets/404.jpg"



export default function NotFoundPage() {
    return (
        <div className=" max-w-screen-2xl mx-auto bg-main-gray relative ">
            <NavBar />

            <div className='p-4 bg-main-gray'>
                <div className=' rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.1)] bg-white p-4 flex flex-col items-center'>
                    <img className='w-96' src={notFound} alt="404" />
                    <div className='p-2 mt-5 flex flex-col items-center'>
                        <h3 className='font-semibold text-xl text-main-blue'>صفحه مورد نظر یافت نشد</h3>
                        <Link to="/">
                            <button className='px-5 py-2 bg-main-blue text-white rounded-3xl mt-4 duration-300 border-[1px] border-main-blue hover:bg-white hover:text-main-blue'>صفحه اصلی</button>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
