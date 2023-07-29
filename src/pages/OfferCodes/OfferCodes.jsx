import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import datas from '../../datas/datas'
import AppPagination from '../../Components/Pagination/AppPagination'
import { useSelector } from 'react-redux'
import { FiTrash2 } from 'react-icons/fi'
import { AiOutlineCopy } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeCodes } from '../../redux/slices/offerCodesSlice'
import { Link } from 'react-router-dom'
import EmptyPage from '../../Components/EmptyPage/EmptyPage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function OfferCodes() {

    const dispatch = useDispatch()
    const { offerCodes } = useSelector(state => state.allOfferCodes)
    const [allOfferCodes, setAllOfferCodes] = useState([])


    useEffect(() => {
        console.log(offerCodes);
        setAllOfferCodes(offerCodes)
    }, [offerCodes])

    const removeOfferCode = (itemCode) => {
        dispatch(removeCodes({ code: itemCode }))
    }


    const copyCode = (itemCode) => {
        navigator.clipboard.writeText(itemCode)

        toast(' کد تخفیف کپی شد', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: false,
            theme: "light",
            style:{width:"50%" , margin:"10px auto"}
        });
    }

    return (
        <div className='max-w-screen-2xl  mx-auto bg-main-gray relative  min-h-screen '>
            <ToastContainer style={{ textAlign: "center" }} />
            <NavBar />
            <div className='p-4 bg-main-gray'>
                <div className='rounded-lg  shadow-[0_0_5px_rgba(0,0,0,0.1)]  bg-white p-4'>
                    {allOfferCodes?.length > 0 ? (
                        <>
                            <div className='grid gap-4 grid-cols-1 small:grid-cols-2 sm:grid-cols-3 '>
                                {allOfferCodes.length > 0 && allOfferCodes.map(item => (
                                    <div key={item.code} className={`group relative cursor-pointer flex flex-col lg:flex-row items-center justify-between rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.1)]  p-6 ${item.expired ? "bg-red-200" : "bg-green-200"} `}>
                                        <h3 className='text-sm sm:text-base'>کد تخفیف : {item.code}</h3>
                                        <h3 className='text-sm sm:text-base'>درصد تخفیف : %{item.precent}</h3>
                                        <span onClick={() => removeOfferCode(item.code)} className='cursor-pointer  p-1 absolute top-1 right-1 opacity-0 group-hover:opacity-100 duration-300 '>
                                            <FiTrash2 className='text-lg text-red-800' />
                                        </span>

                                        <span onClick={() => copyCode(item.code)} className='cursor-pointer  p-1 absolute top-1 left-1 opacity-0 group-hover:opacity-100 duration-300 '>
                                            <AiOutlineCopy className='text-lg text-red-800' />
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <AppPagination datas={offerCodes} setItems={setAllOfferCodes} showItemCount={3} defaultPage={1} />
                        </>
                    ) : (
                        <EmptyPage img={null} title="شما کد تخفیف ندارید" link="/" button="ادامه " />
                    )}

                </div>
            </div>
            <Footer />
        </div >
    )
}
