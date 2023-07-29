import React, { useEffect, useState } from 'react'
import { BsBag, BsCartCheck, BsCardChecklist, BsCircleFill } from 'react-icons/bs'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import './UserBacket.css'
import swal from 'sweetalert'
import { Link, useNavigate } from 'react-router-dom'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import { useContext } from 'react'
import userInfos from '../../context/context'
import { Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import BasketCard from '../../Components/BasketCard/BasketCard'
import { activeCodes } from '../../redux/slices/offerCodesSlice'
import EmptyPage from '../../Components/EmptyPage/EmptyPage'
import { BiPaste } from "react-icons/bi"
import { addOfferCode } from '../../redux/slices/buySlice'



export default function UserBacket() {

    const navigate = useNavigate()
    const context = useContext(userInfos)
    const [firstRound, setFirstRound] = useState(true)
    const [secondRound, setSecondRound] = useState(false)
    const [finalRound, setFinalRound] = useState(false)
    const [disableBtn, setDisableBtn] = useState(true)
    const transport = 25000
    const { products, total, offer, finalPrice } = useSelector(state => state.basket)
    const { offerCodes } = useSelector(state => state.allOfferCodes)
    const [allOfferCodes, setAllOfferCodes] = useState()
    const dispatch = useDispatch()
    const [offerCode, setOfferCode] = useState('')

    useEffect(() => {
        
        setAllOfferCodes(offerCodes)
    }, [offerCodes])

    


    const activeOfferCode = () => {

        const checkOfferCode = allOfferCodes.find(item => item.code == offerCode)

        if (checkOfferCode && !checkOfferCode.expired) {
            if (offer == 0) {
                swal({
                    icon: "success",
                    title: "کد تخفیف با موفقیت اعمال شد",
                    button: "تایید"
                })
                dispatch(activeCodes({ offerCode: checkOfferCode.code }))
                dispatch(addOfferCode({ offerCode: checkOfferCode }))
            } else {
                swal({
                    icon: "error",
                    title: "فقط یک کد تخفیف میتوانید وارد کنید",
                    button: "تایید"
                })
            }

        } else if (checkOfferCode?.expired) {
            swal({
                icon: "error",
                title: "این کد تخفیف مصرف شده است",
                button: "تایید"
            })
        } else {
            swal({
                icon: "error",
                title: "کد تخفیف به نادرستی وارد شده است",
                button: "تلاش دوباره"
            })

        }

        setOfferCode('')
    }



    const changeHandler = (e) => {
        setOfferCode(e.target.value)
    }


    const getCopyText = () => {

        console.log("ok");
        navigator.clipboard.readText().then(res => console.log(res))


    }

    const showModal = () => {

        swal(
            { title: "تبریک", text: "خرید با موفقیت انجام شد", icon: "success", button: "پنل کاربری" }
        )
            .then(() => {
              
                navigate("/dashboard/lastOrders")
            })
    }

    return (
        <div className='max-w-screen-2xl  mx-auto bg-main-gray relative  min-h-screen '>
            <NavBar />
            <Breadcrumb links={[
                { id: 1, title: "خانه", to: "/" },
                { id: 2, title: "سبد خرید", to: "/Backet" },

            ]} />
            {/*  backet section  */}
            <div className='p-4 bg-main-gray'>
                {/* backet container */}
                <div className='rounded-lg  shadow-[0_0_5px_rgba(0,0,0,0.1)]  bg-white p-4' >
                    {context.isLogin ? (
                        <>
                            {products?.length == 0 ? (
                                <EmptyPage img="/./src/assets/trash.jpg" title="سبد شما خالی است" link="/" button="ادامه خرید" />
                            ) : (
                                <>
                                    {/* status bar */}
                                    <div className='relative bg-gray-300 w-full h-2  mt-8 hidden md:flex'>
                                        <div className='w-4 h-4 bg-gray-400 rounded-full absolute -left-2 -top-1/2 z-10'></div>

                                        <div className=' w-1/4 h-full relative '>
                                            <div className={`absolute right-0 top-0  h-full bg-main-blue transition-all duration-700 ${firstRound ? 'w-full' : 'w-0'}`}></div>

                                            <div className='p-1 md:p-2 bg-main-blue rounded-md text-white absolute -top-[350%] left-0 flex flex-col items-center'>
                                                <BsBag className=' text-xs md:text-xl' />
                                                <p className='mt-2 text-xs '>سبد خرید</p>
                                            </div>
                                        </div>
                                        <div className=' w-2/3 h-full relative '>
                                            <div className={`absolute right-0 top-0  h-full bg-main-blue transition-all duration-700 ${secondRound ? 'w-full' : 'w-0'}`}></div>


                                            <div className='p-1 md:p-2 bg-main-blue rounded-md text-white absolute -top-[350%] left-1/2 -translate-x-1/2 flex flex-col items-center'>
                                                <BsCardChecklist className='text-xs md:text-xl' />
                                                <p className='mt-2 text-xs '>جزئیات پرداخت</p>
                                            </div>
                                        </div>
                                        <div className=' w-1/4 h-full relative '>
                                            <div className={`absolute right-0 top-0  h-full bg-main-blue transition-all duration-700 ${finalRound ? 'w-full' : 'w-0'}`}></div>


                                            <div className='p-1 md:p-2 bg-main-blue rounded-md text-white absolute -top-[350%] right-0 flex flex-col items-center'>
                                                <BsCartCheck className='text-xs md:text-xl' />
                                                <p className='mt-2 text-xs '>تکمیل سفارش</p>
                                            </div>
                                        </div>

                                        <div className='w-4 h-4 bg-gray-400 rounded-full absolute -right-2 -top-1/2 '></div>
                                    </div>

                                    {/* backet details */}

                                    {firstRound && !secondRound ? (
                                        <div className='grid grid-cols-1 md:grid-cols-3  gap-y-10 md:gap-10 mt-20  p-4'>

                                            <div className='col-span-2  '>

                                                <div className='rounded-lg  overflow-scroll no-scrollbar shadow-[0_0_5px_rgba(0,0,0,0.1)]  bg-white h-[300px] w-full'>
                                                    <table className='w-full relative'>
                                                        <thead className='bg-gray-200 sticky top-0 left-0'>
                                                            <tr >
                                                                <th className='p-4 '>نام محصول</th>
                                                                <th className='p-4 '>قیمت</th>
                                                                <th className='p-4 '>تعداد</th>
                                                                <th className='p-4 '>قیمت کل</th>
                                                                <th className='p-4 '>حذف </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {products?.map(product => (
                                                                <BasketCard key={product.id} {...product} />
                                                            ))}

                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className='w-full  bg-blue-400 mt-4 rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.1)] p-4 '>

                                                    <div className='flex flex-col sm:flex-row  justify-between items-center '>
                                                        <div className='flex flex-col items-center small:flex-row'>
                                                            <input value={offerCode.code || offerCode} onChange={changeHandler} type="text" placeholder='کد تخفیف را وارد کنید' className='rounded-lg text-center bg-white p-2 outline-none small:w-40' />
                                                            {/* <BiPaste onClick={getCopyText} className='mr-1 text-2xl cursor-pointer' /> */}
                                                        </div>

                                                        <button onClick={activeOfferCode} className='mt-6 sm:mt-0 bg-green-500 p-2 text-white'>اعمال کد تخیفیف</button>

                                                    </div>
                                                </div>

                                            </div>


                                            <div className='col-span-1  '>
                                                <h2 className='text-2xl font-semibold'>مجموع سبد خرید</h2>
                                                <div className='rounded-lg  shadow-[0_0_5px_rgba(0,0,0,0.1)] flex flex-col mt-4'>
                                                    <div className='w-full flex items-center justify-around p-4 border-b-[1px] border-gray-200'>
                                                        <h2 className='text-xl font-semibold'>قیمت کل</h2>
                                                        <p className='text-lg'>{total}</p>
                                                    </div>
                                                    <div className='w-full flex items-center justify-around p-4'>
                                                        <h2 className='text-xl font-semibold'>مجموع</h2>
                                                        <p className='text-lg'>{finalPrice !== 0 ? finalPrice : total}</p>
                                                        <span className={`bg-red-600 p-1 rounded-full text-xs text-white ${offer !== 0 ? "block" : "hidden"}`}>{offer} %</span>
                                                    </div>
                                                </div>
                                                <button className='p-4 bg-blue-400 w-full mt-4 rounded-xl text-white text-xl font-semibold' onClick={() => {
                                                    setSecondRound(true)

                                                }}>اقدام به پرداخت</button>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className='p-6 bg-gray-500 mt-20 rounded-lg'>
                                                <h2 className='text-lg text-white  tracking-wider'>کد تخفیف دارید؟برای وارد کردن <p className='text-blue-400 inline-block cursor-pointer' onClick={() => {
                                                    setFirstRound(true)
                                                    setSecondRound(false)
                                                }}>اینجا </p>کلیک کنید</h2>
                                            </div>
                                            <div className='  mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-x-10'>
                                                <div className='col-span-1   lg:col-span-2 p-4 flex flex-col items-start'>
                                                    <h1 className='text-4xl'>جزئیات خرید</h1>
                                                    <div className=' mt-2 w-full flex flex-col items-start'>

                                                        <div className='w-full flex justify-between mt-4'>
                                                            <input className='w-[47%] p-2 bg-transparent border-b-[1px] border-gray-400 outline-none ' type="text" placeholder='نام خود را وارد کنید' />
                                                            <input className='w-[47%] p-2 bg-transparent border-b-[1px] border-gray-400 outline-none ' type="text" placeholder='نام خانوادگی خود را وارد کنید' />
                                                        </div>

                                                        <div className='w-full flex justify-between  mt-4'>

                                                            <div className='flex flex-col items-start w-[47%]'>
                                                                <label htmlFor="">استان</label>
                                                                <select className='w-full  p-1 bg-gray-100 mt-2  border-[1px] border-gray-400 rounded-lg outline-none  '>
                                                                    <option value="تهران">تهران</option>
                                                                </select>
                                                            </div>
                                                            <div className='flex flex-col items-start w-[47%]'>
                                                                <label htmlFor="">شهر</label>
                                                                <select className='w-full  p-1 bg-gray-100 mt-2  border-[1px] border-gray-400 rounded-lg outline-none  '>
                                                                    <option value="تهران">تهران</option>
                                                                </select>
                                                            </div>

                                                        </div>

                                                        <input className='w-full mt-6 p-2 bg-transparent border-b-[1px] border-gray-400 outline-none ' type="text" placeholder='خیابان' />
                                                        <input className='w-full mt-6 p-2 bg-transparent border-b-[1px] border-gray-400 outline-none ' type="text" placeholder='شماره واحد / پلاک' />
                                                        <input className='w-full mt-6 p-2 bg-transparent border-b-[1px] border-gray-400 outline-none ' type="text" placeholder='تلفن همراه ' />
                                                        <input className='w-full mt-6 p-2 bg-transparent border-b-[1px] border-gray-400 outline-none ' type="text" placeholder='ایمیل' />




                                                    </div>
                                                </div>
                                                <div className='col-span-1 p-4 lg:col-span-1'>
                                                    <h2 className='text-2xl font-semibold'>مجموع کل سبد خرید</h2>
                                                    <div className='rounded-lg  shadow-[0_0_5px_rgba(0,0,0,0.1)] flex flex-col mt-4 overflow-hidden border-[1px] border-gray-300'>
                                                        <table className='w-full'>
                                                            <thead>
                                                                <tr className='bg-gray-200'>
                                                                    <td className='p-4 text-lg font-semibold'>محصول</td>
                                                                    <td className='p-4 text-lg font-semibold'>قیمت</td>
                                                                </tr>
                                                            </thead>
                                                            <tbody >
                                                                {products?.map(product => (
                                                                    <tr key={product.id} className='odd:bg-white even:bg-gray-100'>
                                                                        <td className='p-2 text-lg'>{product.title}</td>
                                                                        <td className='p-2 text-lg'>{product.price * product.qty}</td>
                                                                    </tr>
                                                                ))}
                                                                <tr className='odd:bg-white even:bg-gray-100'>
                                                                    <td className='p-2 text-lg flex'>قیمت کل
                                                                    <span className={`bg-red-600 p-1 flex items-center justify-center mr-1 rounded-full text-xs text-white  ${offer !== 0 ? "flex" : "hidden"}`}>{offer} %</span>
                                                                    </td>
                                                                    <td className='p-2 text-lg'>{offer == 0 ? total : finalPrice}
                                                                    </td>
                                                                </tr>
                                                                <tr className='odd:bg-white even:bg-gray-100'>
                                                                    <td className='p-2 text-lg'>حمل و نقل</td>
                                                                    <td className='p-2 text-lg'>{transport}</td>
                                                                </tr>
                                                                <tr className='odd:bg-white even:bg-gray-100'>
                                                                    <td className='p-2 text-lg'>مجموع</td>
                                                                    <td className='p-2 text-lg'>{offer == 0 ? transport + total : finalPrice + transport }</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <div className=' mt-4  rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.1)] overflow-hidden '>
                                                        <div className='p-2 flex items-center justify-between border-b-[1px] border-gray-300'>
                                                            <h3 className='flex items-center justify-between font-semibold'> <BsCircleFill className='mx-2 text-xs  text-blue-600' /> انتخاب بانک </h3>
                                                        </div>
                                                        <div className='w-full overflow-x-scroll bg-gray-50  no-scrollbar flex flex-col items-start p-2'>
                                                            <div className='flex items-center justify-between w-32 p-2  '>
                                                                <label htmlFor="melat" className='cursor-pointer font-semibold'>
                                                                    بانک ملت
                                                                </label>
                                                                <input type="radio" id='melat' name='banks' onChange={() => setDisableBtn(false)} />
                                                            </div>
                                                            <div className='flex items-center justify-between w-32 mt-2 p-2  '>
                                                                <label htmlFor="melli" className='cursor-pointer font-semibold'>
                                                                    بانک ملی
                                                                </label>
                                                                <input type="radio" id='melli' name='banks' onChange={() => setDisableBtn(false)} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button disabled={disableBtn} className={`p-4 bg-red-400 w-full mt-4  text-white text-xl font-semibold ${disableBtn ? "opacity-50" : "opacity-100"}`} onClick={() => {
                                                        setFinalRound(true)
                                                        showModal()
                                                     
                                                    }}>اقدام به پرداخت</button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                        </>
                    ) : (
                        <Alert variant="filled" severity="warning">
                            جهت مشاهده سبد خرید  <a className='text-blue-600 cursor-pointer' onClick={() => navigate('/Login')}>وارد</a> شوید
                        </Alert>
                    )}

                </div>
            </div>
            <Footer />
        </div>
    )
}
