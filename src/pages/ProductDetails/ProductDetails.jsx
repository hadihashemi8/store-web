import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import "./ProductDetails.css";
import { AiFillStar, AiOutlineSafety } from 'react-icons/ai';
import { BsShop, BsTruck } from 'react-icons/bs';
import { BiHomeAlt2 } from 'react-icons/bi';
import { GrCircleAlert } from 'react-icons/gr'
import RelatedProducts from "../../Components/RelatedProducts/RelatedProducts"
import datas from '../../datas/datas';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../../redux/slices/buySlice';
import Properties from '../../Components/Properties/Properties';
import ProductIntroduction from '../../Components/ProductIntroduction/ProductIntroduction';



const colors = [
    { id: 1, colorEnName: 'red', colorFaName: 'قرمز' },
    { id: 2, colorEnName: 'green', colorFaName: 'سبز' },
    { id: 3, colorEnName: 'blue', colorFaName: 'آبی' },
    { id: 4, colorEnName: 'yellow', colorFaName: 'زرد' },
]


export default function ProductDetails() {

    const dispatch = useDispatch()
    const { products } = useSelector(state => state.basket)
    const params = useParams()
    const [product, setProduct] = useState()
    const [colorName, setColorName] = useState('_')
    const [size, setSize] = useState('_')
    const [isProductDon, setIsProductDon] = useState(null)




    const addHandler = () => {
        dispatch(addToBasket({
            ...product,
            qty: 1
        }))

    }





    useEffect(() => {
        const item = datas.allProducts.find(item => item.id == params.productId)

        setProduct(item)

        if (item.count == 0) {
            setIsProductDon(true)
        }else{
            setIsProductDon(false)
        }
    }, [params])


    useEffect(() => {
        const item = products?.find(item => item.id == params.productId)
        if (item) {
            setProduct(item)
        }

        if (item?.qty == item?.count) {
            setIsProductDon(true)
        }


    }, [products])






    return (
        <div className='max-w-screen-2xl mx-auto bg-main-gray relative '>
            <NavBar />

            {/* Breadcrumb */}
            <Breadcrumb links={[
                { id: 1, title: 'خانه', to: '/' },
                { id: 2, title: 'جزئیات محصول', to: '/ProductDetails', productId: params.productId },
            ]} />

            {/* product details section */}
            <div className=' p-4 '>

                {/* product details container */}
                <div className=' bg-white  rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.1)] p-4 '>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-2  border-b-[1px] border-gray-300 p-2 pb-4'>
                        <div className=' col-span-1 '>
                            <div>
                                <h2 className='text-xl font-semibold text-red-600'>پیشنهاد شگفت انگیز</h2>
                            </div>

                            <div className='mt-2 p-1 flex items-center justify-center '>
                                <img src={product?.src} />
                            </div>
                        </div>

                        <div className=' col-span-1 px-4 flex flex-col items-start'>
                            <div className='flex flex-col items-start'>
                                <h2 className='text-lg mb-2'>{product?.title}</h2>
                                <span className='w-full h-[1px] bg-gray-300'></span>
                                <p className='text-xs mt-2'>Apple iPhone XR 128GB Mobile Phone</p>


                                <div className='flex justify-around mt-4'>
                                    <div className='flex items-center justify-between'>
                                        <AiFillStar className='text-yellow-400 mr-1 text-lg' />
                                        <AiFillStar className='text-yellow-400 mr-1 text-lg' />
                                        <AiFillStar className='text-yellow-400 mr-1 text-lg' />
                                        <AiFillStar className='text-yellow-400 mr-1 text-lg' />
                                        <AiFillStar className='text-gray-300 mr-1 text-lg' />
                                    </div>
                                    <p className='text-blue-600 text-lg mr-4 cursor-pointer'>11 دیدگاه</p>
                                    <p className='text-blue-600 text-lg mr-4 cursor-pointer'>3 پرسش</p>
                                </div>

                                <span className='w-full h-[1px] bg-gray-300'></span>



                            </div>

                            <div className='mt-10 flex flex-col items-start'>
                                <div>
                                    <h3 className='text-xl font-semibold text-gray-500'>رنگ : {colorName}</h3>
                                    <div className=' flex items-center justify-between py-4'>
                                        {colors.map(color => (
                                            <label key={color.id} className='radio relative w-6 h-6 mx-1 cursor-pointer'>
                                                <input type="radio" name='colorBox' className='hidden w-4' onChange={() => setColorName(color.colorFaName)} />
                                                <span className={`w-full h-full bg-${color.colorEnName}-500 absolute top-0 left-0 rounded-full`}></span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <h3 className='text-xl font-semibold text-gray-500'>سایز : {size}</h3>
                                    <select className='bg-main-gray cursor-pointer w-24 mt-4' onChange={(e) => setSize(e.target.value)}>
                                        <option value="40">40</option>
                                        <option value="42">42</option>
                                        <option value="44">44</option>
                                        <option value="46">46</option>
                                    </select>
                                </div>

                                <div className='mt-4'>
                                    <p className='mt-1'><strong>برند :</strong> اپل</p>
                                    <p className='mt-1'><strong>حافظه داخلی:</strong>  256 گیگابایت</p>
                                    <p className='mt-1'><strong>مقدار رم :</strong> 3 گیگابایت</p>
                                    <p className='mt-1'><strong>رزولوشن عکس:</strong>  12 مگاپیکسل</p>
                                    <p className='mt-1'><strong>تعداد سیم کارت:</strong> 2</p>
                                    <p className='mt-1'><strong>ویژگی‌های خاص:</strong>  مقاوم در برابر آب مناسب عکاسی مناسب عکاسی سلفی مناسب بازی مجهز به حس‌گر تشخیص چهره</p>
                                </div>
                            </div>

                            <div className='py-4 px-2 mt-10 bg-gray-100 shadow-[inset_0_0_5px_3px_rgba(0,0,0,0.1)] rounded-xl border-[1px] border-gray-300 w-full'>
                                <h2 className='text-blue-500'>ارسال رایگان سفارش‌ها برای اعضای ویژه</h2>
                                <p className='text-xs mt-2'>۲۹ هزارتومان هزینه ارسال به سراسر ایران برای کاربران غیر دیجی‌پلاس</p>
                            </div>

                        </div>

                        <div className='col-span-1 '>
                            <div className='rounded-xl  flex-col items-start bg-[#F9F9F9] shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.1)] flex  py-6 px-4'>
                                <h2 className='text-lg md:text-3xl font-semibold text-red-600'>فروشنده</h2>

                                <div className='mt-4  border-b-[1px] border-gray-300 w-full pb-5 flex items-center justify-between'>
                                    <div className='flex items-start justify-between'>
                                        <BsShop className='text-2xl' />
                                        <div className='mr-4 '>
                                            <h3 className=' font-semibold'>فروشگاه شما</h3>
                                            <p className='mt-2'>89.6% رضایت از کالا عملکرد عالی</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-4  border-b-[1px] border-gray-300 w-full pb-5 flex items-center justify-between'>
                                    <div className='flex items-start justify-between'>
                                        <AiOutlineSafety className='text-2xl' />
                                        <div className='mr-4 '>
                                            <p className=' text-lg'>گارانتی اصالت و سلامت فیزیکی کالا</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-4  border-b-[1px] border-gray-300 w-full pb-5 flex items-center justify-between'>
                                    <div className='flex items-start justify-between'>
                                        <BiHomeAlt2 className='text-2xl' />
                                        <div className='mr-4 '>
                                            <h3 className={`text-lg ${isProductDon && "text-red-600"}`} >{isProductDon ? " ناموجود در انبار فروشنده" : "موجود در انبار فروشنده"}</h3>
                                            <p className='mt-2  flex items-center '> <BsTruck className='ml-2' /> ارسالی  کالا از 1 روز دیگر</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-4  border-b-[1px] border-gray-300 w-full pb-5 flex items-center justify-between'>
                                    <div className='flex items-center justify-between  py-4'>
                                        <GrCircleAlert className='text-lg' />
                                        <div className='mr-4 '>
                                            <p className=' text-sm'> قیمت فروشنده</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-lg '>{product?.price}</p>
                                            {/* <span className='p-1 mr-2 text-xs bg-red-600 rounded-full text-white'>
                                                25%
                                            </span> */}
                                        </div>
                                        {/* <p className='text-xl'>150000 تومان</p> */}
                                    </div>
                                </div>

                                <button onClick={addHandler} className='p-4 bg-red-500 w-full mt-4 rounded-xl text-white text-lg font-semibold' >افزودن به سبد خرید</button>

                            </div>
                        </div>
                    </div>


                    <Properties />

                </div>

                {/* Introduction part */}
                <ProductIntroduction />

                <RelatedProducts />
            </div>


            <Footer />
        </div>
    )
}
