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
import { IoMdArrowDropleft } from 'react-icons/io';
import CommentBox from '../../Components/CommentBox/CommentBox';
import RelatedProducts from '../../Components/relatedProducts/relatedProducts';
import datas from '../../datas/datas';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../../redux/slices/buySlice';



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
    const [showSection, setShowSection] = useState('معرفی')
    const [showAllIntroduction, setShoAllIntroduction] = useState(false)




    const addHandler = () => {
        dispatch(addToBasket({
            ...product,
            qty: 1
        }))

    }


    useEffect(() => {
        setProduct(datas.allProducts.find(item => item.id == params.productId))
    }, [params  ,products])
    
    
    
    useEffect(() => {
        
        if(products.length > 0){
          
            const x = products.find(item => item?.id == product?.id)
       
            setProduct(x)
        }
        
    }, [products , product])



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
                                <h2 className='text-3xl font-semibold text-red-600'>فروشنده</h2>

                                <div className='mt-4  border-b-[1px] border-gray-300 w-full pb-5 flex items-center justify-between'>
                                    <div className='flex items-start justify-between'>
                                        <BsShop className='text-2xl' />
                                        <div className='mr-4 '>
                                            <h3 className='text-xl font-semibold'>فروشگاه شما</h3>
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
                                            <h3 className={`text-xl ${product?.qty == product?.count && "text-red-600"}`} >{product?.qty == product?.count ? " ناموجود در انبار فروشنده" : "موجود در انبار فروشنده"}</h3>
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
                                            <p className='text-xl '>{product?.price}</p>
                                            {/* <span className='p-1 mr-2 text-xs bg-red-600 rounded-full text-white'>
                                                25%
                                            </span> */}
                                        </div>
                                        {/* <p className='text-xl'>150000 تومان</p> */}
                                    </div>
                                </div>

                                <button onClick={addHandler} className='p-4 bg-red-500 w-full mt-4 rounded-xl text-white text-xl font-semibold' >افزودن به سبد خرید</button>

                            </div>
                        </div>
                    </div>


                    <div>
                        <div className='flex flex-wrap   justify-around items-center '>
                            <div className='  flex justify-around items-center w-36  my-4 '>
                                <img className='w-8 h-8 ' src="/./src/assets/footer/contact-us.svg" alt="" />
                                <h3 className='text-center my-2 text-sm'>پشتیبانی 24 ساعته</h3>
                            </div>
                            <div className='  flex justify-around items-center w-36  my-4  '>
                                <img className='w-8 h-8 ' src="/./src/assets/footer/delivery.svg" alt="" />
                                <h3 className='text-center my-2 text-sm'>تحویل اکسپرس</h3>
                            </div>
                            <div className='  flex justify-around items-center w-36  my-4 '>
                                <img className='w-8 h-8 ' src="/./src/assets/footer/payment-terms.svg" alt="" />
                                <h3 className='text-center my-2 text-sm'>پرداخت در محل</h3>
                            </div>
                            <div className='  flex justify-around items-center w-  my-4 '>
                                <img className='w-8 h-8 ' src="/./src/assets/footer/return-policy.svg" alt="" />
                                <h3 className='text-center my-2 text-sm'>۷ روز ضمانت بازگشت
                                </h3>
                            </div>
                            <div className='  flex justify-around items-center w-36  my-4 '>
                                <img className='w-8 h-8 ' src="/./src/assets/footer/origin-guarantee.svg" alt="" />
                                <h3 className='text-center my-2 text-sm'>ضمانت اصل بودن کالا</h3>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Introduction part */}
                <div className=' bg-white  rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.1)] p-4  mt-8'>
                    <div className='flex justify-around small:justify-between pb-5 border-b-[1px] border-gray-200'>
                        <ul className='flex items-center justify-between'>
                            <li className={`p-2 mx-1 bg-gray-100 rounded-md cursor-pointer small:text-lg border-t-2 border-transparent text-sm  ${showSection == "معرفی" && "active"}`} onClick={() => setShowSection("معرفی")}>معرفی</li>
                            <li className={`p-2 mx-1 bg-gray-100 rounded-md cursor-pointer small:text-lg border-t-2 border-transparent text-sm  ${showSection == "توضیحات" && "active"}`} onClick={() => setShowSection("توضیحات")}>توضیحات</li>
                            <li className={`p-2 mx-1 bg-gray-100 rounded-md cursor-pointer small:text-lg border-t-2 border-transparent text-sm  ${showSection == "توضیحات تکمیلی" && "active"}`} onClick={() => setShowSection("توضیحات تکمیلی")}>توضیحات تکمیلی</li>
                            <li className={`p-2 mx-1 bg-gray-100 rounded-md cursor-pointer small:text-lg border-t-2 border-transparent text-sm  ${showSection == "نظرات" && "active"}`} onClick={() => setShowSection("نظرات")}>نظرات</li>
                        </ul>
                    </div>

                    <div>

                        {showSection == "معرفی" ? (
                            <div className=' p-5'>
                                <h1 className='text-3xl text-[#515151] my-4 font-semibold'>معرفی محصول</h1>
                                <p className='text-lg my-4 font-extralight text-justify'>اگر به دنبال تهیه یک هدفون بی‌سیم گیمینگ هستید، هدفون بلوتوثی مدل K55 به‌عنوان یکی از جدیدترین گزینه‌های موجود در بازار ارزش بررسی را دارد. این مدل با ابعادی کوچک تولید شده است. ابعاد و وزن کم آن، جابه‌جایی این وسیله و استفاده طولانی‌مدت از آن را آسان می‌کند و باعث خستگی گوش‌ها نخواهد شد. این مدل برای اتصال به دستگاه‌ به بلوتوث نسخه 5.0 مجهز شده است و در مدت زمان اندکی، اتصال با گوشی موبایل اندروید یا ios شما برقرار خواهد شد. هدفون بی سیم K55 دارای یک میکروفون با کیفیت است و ...</p>
                                {showAllIntroduction && (
                                    <p className='text-lg mb-4 font-extralight text-justify'>اگر به دنبال تهیه یک هدفون بی‌سیم گیمینگ هستید، هدفون بلوتوثی مدل K55 به‌عنوان یکی از جدیدترین گزینه‌های موجود در بازار ارزش بررسی را دارد. این مدل با ابعادی کوچک تولید شده است. ابعاد و وزن کم آن، جابه‌جایی این وسیله و استفاده طولانی‌مدت از آن را آسان می‌کند و باعث خستگی گوش‌ها نخواهد شد. این مدل برای اتصال به دستگاه‌ به بلوتوث نسخه 5.0 مجهز شده است و در مدت زمان اندکی، اتصال با گوشی موبایل اندروید یا ios شما برقرار خواهد شد. هدفون بی سیم K55 دارای یک میکروفون با کیفیت است و این ویژگی، آن را برای مکالمه مناسب می‌سازد. از ویژگی‌های اصلی این محصول محفظه نگهدارنده یا همان کیس آن است. این کیس قابلیت شارژ هدفون را دارد. برای شارژ آن کافی است از درگاه USB-C تعبیه شده بر روی کیس و کابل شارژ درون بسته‌بندی استفاده کنید. گفتنی است باتری 400 میلی‌آمپر ساعتی این هدفون در حدود 4-6 ساعت مکالمه و 4-6 ساعت پخش موسیقی را پاسخ‌گو خواهد بود.</p>
                                )}
                                <p className='text-blue-400 cursor-pointer text-xl' onClick={() => setShoAllIntroduction(prev => !prev)}>{showAllIntroduction ? "- بستن" : "+ بیشتر"}</p>
                            </div>
                        ) : showSection == "توضیحات" ? (
                            <div className=' p-5'>
                                <h1 className='text-3xl text-[#515151] my-4 font-semibold'>طراحی و کیفیت ساخت گوشی شیائومی ردمی 9A</h1>
                                <p className='text-lg my-4 font-extralight text-justify'>اگر به دنبال تهیه یک هدفون بی‌سیم گیمینگ هستید، هدفون بلوتوثی به عنوان گوشی‌ای که قیمت خیلی زیادی ندارد، باید به این موضوع اشاره کنیم که داخل بسته بندی Redmi 9A آیتم‌های خاصی دیده نمی شود. دفترچه راهنما، ابزار خارج کردن سیم کارت و شارژ ۱۰ واتی را به همراه کابل USB مشاهده می‌کنید. این گوشی شیائومی در ابعاد ۱۶۴.۹ در ۷۷.۱ در ۹ میلی متر ساخته شده و وزن آن هم ۱۹۶ گرم است. در حال کلی باید به این موضوع اشاره کنیم که این گوشی خیلی خوب در دست قرار میگیرد. قاب این گوشی بافت جالب توجهی دارد و به همین دلیل خیلی خوب داخل دست قرار میگیرد. البته باید به این موضوع اشاره کنیم که قاب پشتی گوشی خیلی زود اثر انگشت را به خود جلب می‌کند. قاب پشتی که به صورت مات طراحی شده میزبان دوربین‌های پشت است و به جز دوربین‌ها چیزی روی آن قرار نگرفته است. به همین دلیل گوشی بسیار ساده به نظر می‌رسد. زمانی که به گوشی نگاه می‌کنید، متوجه می‌شوید که صفحه نمایش آن حاشیه‌های بسبتا بزرگی دارد.</p>
                                {showAllIntroduction && (
                                    <div>
                                        <p className='text-lg mb-4 font-extralight text-justify'>اگر به دنبال تهیه یک هدفون بی‌سیم گیمینگ هستید، هدفون بلوتوثی البته که با توجه به قیمت ارزان این گوشی نیاید انتظار زیادی از این محصول داشته باشید. روی صفحه نمایش ناچ قطره‌ ای قرار گرفته که داخل آن دوربین سلفی دیده می‌شود. روی لبه بالای گوشی جک ۳.۵ میلی صدا قرار گرفته و روی لبه پایین هم پورت micro-USB و اسپیکر گوشی  و میکروفن را مشاهده می‌کنید. خیلی دوست داشتیم که روی این گوشی پورت USB C مشاهده می کردیم. روی لبه سمت چپ گوشی محل قرار گرفتن سیم کارت و کارت حافظه را مشاهده می‌کنید. همچنین باید به این موضوع اشاره کنیم که این گوشی در سه رنگ آبی و سبز و مشکی راهی بازار شده است.</p>
                                        <div className='flex justify-around my-20'>
                                            <img src="/./src/assets/گوشی-موبایل-شیائومی-مدل-Redmi-9A-2.jpg" alt="img" />
                                        </div>
                                        <h1 className='text-3xl text-[#515151] my-4 font-semibold'>صفحه نمایش شیائومی ردمی 9a</h1>
                                        <p className='text-lg mb-4 font-extralight text-justify'>اگر به دنبال تهیه یک هدفون بی‌سیم گیمینگ هستید، هدفون بلوتوثی البته که با توجه به قیمت ارزان این گوشی نیاید انتظار زیادی از این محصول داشته باشید. روی صفحه نمایش ناچ قطره‌ ای قرار گرفته که داخل آن دوربین سلفی دیده می‌شود. روی لبه بالای گوشی جک ۳.۵ میلی صدا قرار گرفته و روی لبه پایین هم برای گوشی Redmi 9A از صفحه نمایش ۶.۵ اینچی با وضوح HD+ یا ۷۲۰ در ۱۶۰۰ پیکسل استفاده شده است. صفحه نمایشی که تراکم پیکسلی آن به ۲۶۹ پیکسل در هر اینچ می‌رسد. صفحه نمایش عملکرد خوبی در محیط‌های داخلی دارد، اما در زیر نور خورشید نظر شما را به خود جلب نمی‌کند. چرا که روشنایی گوشی زیاد نیست. صفحه نمایش رنگ‌ها را خوب نشان می‌دهد، اما عالی نیست. البته که در تنظیمات گوشی می‌توانید حالت نمایش رنگ‌ها را تغییر دهید، اما این موضوع هم باعث نمی‌شود که رنگ‌ها بهتر نشان داده شوند. رابط کاربری MIUI همیشه یکسری ویژگی‌های خاص و جذاب را پیش روی کاربران قرار می‌دهد و این اتفاق را روی این گوشی ارزان قیمت هم مشاهده می‌کنیم. به طور مثال روی صفحه نمایش LCD این گوشی حالت مطالعه و حتی دارک مود هم در نظر گرفته شده است. این ویژگی‌ها باعث می‌شوند که بتوانید بهتر با گوشی کار کنید. در حالت کلی باید بگوییم که صفحه نمایش در انجام فعالیت‌های معمولی عملکرد خوبی دارد و به نیاز شما پاسخ می‌دهد.</p>
                                        <div className='flex justify-around my-20'>
                                            <img src="/./src/assets/صفحه-نمایش-گوشی-موبایل-شیائومی-مدل-Redmi-9A.jpg" alt="img" />
                                        </div>
                                        <h1 className='text-3xl text-[#515151] my-4 font-semibold'>اسپیکر شیائومی 9A</h1>
                                        <p className='text-lg mb-4 font-extralight text-justify'>اگر به دنبال تهیه یک هدفون بی‌سیم گیمینگ هستید، هدفون بلوتوثی البته که با توجه به قیمت ارزان این گوشی نیاید انتظار زیادی از این محصول داشته باشید. روی صفحه نمایش ناچ قطره‌ ای قرار گرفته که داخل آن دوربین سلفی دیده می‌شود. روی لبه بالای گوشی جک ۳.۵ میلی صدا قرار گرفته و روی لبه پایین هم برای تنها یک اسپیکر روی این گوشی قرار دارد که به وظیفه خودش به خوبی عمل می‌کند. میکروفن کوچکی روی این محصول قرار گرفته که حجم صدای خیلی زیادی تولید نمی کند، اما کیفیت مناسبی دارد. این اسپیکر در زمان پخش موسیقی  و تماشای ویدیوهای مختلف عملکرد قابل قبولی دارد. این گوشی جک ۳.۵ میلی متری خروجی صدا هم دارد و می‌توانید از هدفون‌های مختلف روی این محصول استفاده کنید. با استفاده از هدفون به رادیو هم دسترسی خواهید داشت.</p>
                                        <div className='flex justify-around my-20'>
                                            <img src="/./src/assets/سیستم-تشخیص-چهره-گوشی-موبایل-شیائومی-مدل-Redmi-9A.jpg" alt="img" />
                                        </div>
                                        <h1 className='text-3xl text-[#515151] my-4 font-semibold'>جمع بندی</h1>
                                        <p className='text-lg mb-4 font-extralight text-justify'>به عنوان یک گوشی ارزان قیمت واقعا با محصول خوش ساخت و قابل قبولی سر و کار دارید. باتری فوق العاده از ویژگی های جذاب این گوشی به حساب می‌آید. صفحه نمایش هم نظر شما را به خود جلب می‌کند و تنها دوربین پشت این گوشی هم نیاز شما را برطرف خواهد کرد. این گوشی برای استفاده‌های معمولی بسیار مناسب است.</p>
                                    </div>

                                )}
                                <p className='text-blue-400 cursor-pointer text-xl' onClick={() => setShoAllIntroduction(prev => !prev)}>{showAllIntroduction ? "- بستن" : "+ بیشتر"}</p>
                            </div>

                        ) : showSection == "توضیحات تکمیلی" ? (
                            <div className='flex flex-col items-start py-8'>
                                <h1 className='text-2xl text-[#515151] my-2 font-semibold'>مشخصات فنی</h1>
                                <p className=' my-2 font-extralight text-justify'>HBQ-I7 Bluetooth Handsfree</p>

                                <div className='w-full mt-4'>

                                    <div className='flex flex-col items-start mt-4'>
                                        <div className='flex items-center justify-between'>
                                            <IoMdArrowDropleft />
                                            <p className='text-xl font-semibold text-[#515151]'>مشخصات کلی</p>
                                        </div>
                                        <div className='w-full flex flex-col items-start mt-4'>
                                            <div className='flex flex-col md:flex-row md:items-center md:justify-between w-full  lg:w-4/5'>
                                                <div className='md:w-1/4 p-4 my-2 md:mx-2 bg-gray-100 border-r-2 border-main-blue'>
                                                    قابلیت پخش موسیقی
                                                </div>
                                                <div className='md:w-3/4 p-4 my-2 md:mx-2 bg-gray-100 border-r-2 border-red-700'>
                                                    دارد
                                                </div>
                                            </div>
                                            <div className='flex flex-col md:flex-row md:items-center md:justify-between w-full  lg:w-4/5'>
                                                <div className='md:w-1/4 p-4 my-2 md:mx-2 bg-gray-100 border-r-2 border-main-blue'>
                                                    قابلیت پخش موسیقی
                                                </div>
                                                <div className='md:w-3/4 p-4 my-2 md:mx-2 bg-gray-100 border-r-2 border-red-700'>
                                                    دارد
                                                </div>
                                            </div>
                                            <div className='flex flex-col md:flex-row md:items-center md:justify-between w-full  lg:w-4/5'>
                                                <div className='md:w-1/4 p-4 my-2 md:mx-2 bg-gray-100 border-r-2 border-main-blue'>
                                                    قابلیت پخش موسیقی
                                                </div>
                                                <div className='md:w-3/4 p-4 my-2 md:mx-2 bg-gray-100 border-r-2 border-red-700'>
                                                    دارد
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-start mt-4'>
                                        <div className='flex items-center justify-between'>
                                            <IoMdArrowDropleft />
                                            <p className='text-xl font-semibold text-[#515151] '>مشخصات کلی</p>
                                        </div>
                                        <div className='w-full flex flex-col items-start mt-4'>
                                            <div className='flex flex-col md:flex-row md:items-center md:justify-between w-full  lg:w-4/5'>
                                                <div className='md:w-1/4 p-4 my-2 md:mx-2 bg-gray-100 border-r-2 border-main-blue'>
                                                    قابلیت پخش موسیقی
                                                </div>
                                                <div className='md:w-3/4 p-4 my-2 md:mx-2 bg-gray-100 border-r-2 border-red-700'>
                                                    دارد
                                                </div>
                                            </div>
                                            <div className='flex flex-col md:flex-row md:items-center md:justify-between w-full  lg:w-4/5'>
                                                <div className='md:w-1/4 p-4 my-2 md:mx-2 bg-gray-100 border-r-2 border-main-blue'>
                                                    قابلیت پخش موسیقی
                                                </div>
                                                <div className='md:w-3/4 p-4 my-2 md:mx-2 bg-gray-100 border-r-2 border-red-700'>
                                                    دارد
                                                </div>
                                            </div>
                                            <div className='flex flex-col md:flex-row md:items-center md:justify-between w-full  lg:w-4/5'>
                                                <div className='md:w-1/4 p-4 my-2 md:mx-2 bg-gray-100 border-r-2 border-main-blue'>
                                                    قابلیت پخش موسیقی
                                                </div>
                                                <div className='md:w-3/4 p-4 my-2 md:mx-2 bg-gray-100 border-r-2 border-red-700'>
                                                    دارد
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ) : (
                            <div className='flex flex-col items-start py-8'>
                                <h1 className=' text-[#515151] my-2 font-semibold'>نظرت در مورد این محصول چیه؟</h1>
                                <p className=' my-1 text-sm text-[#847C89] font-extralight text-justify'>برای ثبت نظر، از طریق دکمه افزودن دیدگاه جدید نمایید. اگر این محصول را قبلا خریده باشید، نظر شما به عنوان خریدار ثبت خواهد شد.</p>

                                <div className='grid grid-cols-1 md:grid-cols-3 gap-4   w-full mt-8'>

                                    <div className='col-span-1 md:col-span-1 relative'>
                                        <div className='sticky top-0 left-0 '>

                                            <div className='border-[1px]  border-[#EEEEEE] flex flex-col items-center   rounded-lg p-4 bg-white'>
                                                <p className='text-sm my-4 text-[#847C89]'>متوسط امتیازها</p>
                                                <p className='text-4xl my-3'>4.5</p>
                                                <div className='p-2 my-4 flex items-center justify-center w-full bg-[#F3F3F3] rounded-lg'>
                                                    <AiFillStar className='text-yellow-400 mr-1 text-lg' />
                                                    <AiFillStar className='text-yellow-400 mr-1 text-lg' />
                                                    <AiFillStar className='text-yellow-400 mr-1 text-lg' />
                                                    <AiFillStar className='text-yellow-400 mr-1 text-lg' />
                                                    <AiFillStar className='text-gray-300 mr-1 text-lg' />
                                                </div>
                                            </div>
                                            <div className='border-[1px] mt-2  border-[#EEEEEE] flex flex-col items-center   rounded-lg p-4 py-8 bg-white'>
                                                <ul className='w-full px-4'>
                                                    <li className='flex items-center justify-between mt-2'>
                                                        <p>5ستاره</p>
                                                        <span className='p-1 relative rounded-lg mr-2 bg-[#EEEEEE] w-full overflow-hidden'>
                                                            <span className='p-1 absolute top-0 -right-2/3  bg-blue-500 w-full'></span>
                                                        </span>
                                                    </li>
                                                    <li className='flex items-center justify-between mt-2'>
                                                        <p>5ستاره</p>
                                                        <span className='p-1 relative rounded-lg mr-2 bg-[#EEEEEE] w-full overflow-hidden'>
                                                            <span className='p-1 absolute top-0 -right-3/4  bg-blue-500 w-full'></span>
                                                        </span>
                                                    </li>
                                                    <li className='flex items-center justify-between mt-2'>
                                                        <p>5ستاره</p>
                                                        <span className='p-1 relative rounded-lg mr-2 bg-[#EEEEEE] w-full overflow-hidden'>
                                                            <span className='p-1 absolute top-0 -right-1/2  bg-blue-500 w-full'></span>
                                                        </span>
                                                    </li>
                                                    <li className='flex items-center justify-between mt-2'>
                                                        <p>5ستاره</p>
                                                        <span className='p-1 relative rounded-lg mr-2 bg-[#EEEEEE] w-full overflow-hidden'>
                                                            <span className='p-1 absolute top-0 -right-3/4 bg-blue-500 w-full'></span>
                                                        </span>
                                                    </li>
                                                </ul>

                                            </div>


                                        </div>
                                    </div>

                                    <div className='col-span-1 md:col-span-2 '>
                                        <div>
                                            <div className='w-full flex flex-col md:flex-row justify-between items-center'>
                                                <div className='w-full md:w-1/2 mt-2 md:mt-0 md:mx-2 relative'>
                                                    <input className='w-full peer p-5 outline-none border-[1px] border-[#CED4DA] rounded-lg focus:border-[#0761F6]' type="text" dir='ltr' required />
                                                    <label className='absolute right-4 top-1/2 text-[#847C89] -translate-y-1/2 pointer-events-none  duration-300 peer-focus:text-xs  peer-focus:top-1/4 peer-valid:text-xs  peer-valid:top-1/4'>ایمیل خود را وارد کنید</label>
                                                </div>
                                                <div className='w-full md:w-1/2 mt-2 md:mt-0 md:mx-2 relative'>
                                                    <input className='w-full peer p-5 outline-none border-[1px] border-[#CED4DA] rounded-lg focus:border-[#0761F6]' type="text" required />
                                                    <label className='absolute right-4 top-1/2 text-[#847C89] -translate-y-1/2 pointer-events-none  duration-300 peer-focus:text-xs  peer-focus:top-1/4 peer-valid:text-xs  peer-valid:top-1/4'>نام خود را وارد کنید</label>
                                                </div>
                                            </div>

                                            <div className='p-4 flex flex-col items-start justify-between'>
                                                <div className='flex items-center '>
                                                    <input className='w-4 h-4' type="checkbox" id='save-email' />
                                                    <label className='mr-2' htmlFor="save-email">ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.</label>
                                                </div>

                                                <div className='mt-8'>
                                                    <p className='text-[#847C89] text-lg'>امتیاز شما</p>
                                                    <div className=' my-4 flex items-center justify-center '>
                                                        <AiFillStar className='text-yellow-400  text-2xl' />
                                                        <AiFillStar className='text-yellow-400 mr-1 text-2xl' />
                                                        <AiFillStar className='text-yellow-400 mr-1 text-2xl' />
                                                        <AiFillStar className='text-yellow-400 mr-1 text-2xl' />
                                                        <AiFillStar className='text-gray-300 mr-1 text-2xl' />
                                                    </div>
                                                </div>
                                            </div>

                                            <textarea className='border-[1px] border-[#CED4DA] outline-none p-4 rounded-lg w-full' placeholder='متن مورد نظر' rows="10" ></textarea>


                                            <div className='mt-6 flex flex-col items-center'>
                                                <div className='flex flex-col md:flex-row w-full'>
                                                    <div className='md:w-1/2 mt-2 md:mt-0 md:ml-2'>
                                                        <label className='text-green-600' htmlFor="positive">نقاط مثبت</label>
                                                        <input id='positive' className='w-full mt-2  p-5 outline-none border-[1px] border-[#CED4DA] rounded-lg focus:border-[#0761F6] duration-300' type="text" placeholder='متن مورد نظر' />
                                                    </div>
                                                    <div className='md:w-1/2 mt-2 md:mt-0 md:mr-2'>
                                                        <label className='text-red-600' htmlFor="nagetive">نقاط منفی</label>
                                                        <input id='nagetive' className='w-full mt-2  p-5 outline-none border-[1px] border-[#CED4DA] rounded-lg focus:border-[#0761F6] duration-300' type="text" placeholder='متن مورد نظر' />
                                                    </div>
                                                </div>

                                                <button className='w-full p-3 bg-green-600 text-white rounded-lg outline-none mt-6'>ثبت نظر</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col items-center w-full mt-20'>
                                    {/* comment box */}
                                    <CommentBox />
                                    <CommentBox />
                                    <CommentBox />
                                    <CommentBox />

                                </div>

                            </div>
                        )}


                    </div>
                </div>

                <RelatedProducts />
            </div>


            <Footer />
        </div>
    )
}
