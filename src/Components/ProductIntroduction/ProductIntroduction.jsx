import React, { useState } from 'react'
import CommentBox from '../CommentBox/CommentBox'
import { AiFillStar } from 'react-icons/ai'
import { IoMdArrowDropleft } from 'react-icons/io'
import baner1 from "/./src/assets/گوشی-موبایل-شیائومی-مدل-Redmi-9A-2.jpg"
import baner2 from "/./src/assets/صفحه-نمایش-گوشی-موبایل-شیائومی-مدل-Redmi-9A.jpg"
import baner3 from "/./src/assets/سیستم-تشخیص-چهره-گوشی-موبایل-شیائومی-مدل-Redmi-9A.jpg" 


export default function ProductIntroduction() {

    const [showSection, setShowSection] = useState('معرفی')
    const [showAllIntroduction, setShoAllIntroduction] = useState(false)


    return (
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
                        <h1 className='text-xl md:text-3xl text-[#515151] my-4 font-semibold'>معرفی محصول</h1>
                        <p className='text-lg my-4 font-extralight text-justify'>اگر به دنبال تهیه یک هدفون بی‌سیم گیمینگ هستید، هدفون بلوتوثی مدل K55 به‌عنوان یکی از جدیدترین گزینه‌های موجود در بازار ارزش بررسی را دارد. این مدل با ابعادی کوچک تولید شده است. ابعاد و وزن کم آن، جابه‌جایی این وسیله و استفاده طولانی‌مدت از آن را آسان می‌کند و باعث خستگی گوش‌ها نخواهد شد. این مدل برای اتصال به دستگاه‌ به بلوتوث نسخه 5.0 مجهز شده است و در مدت زمان اندکی، اتصال با گوشی موبایل اندروید یا ios شما برقرار خواهد شد. هدفون بی سیم K55 دارای یک میکروفون با کیفیت است و ...</p>
                        {showAllIntroduction && (
                            <p className='text-lg mb-4 font-extralight text-justify'>اگر به دنبال تهیه یک هدفون بی‌سیم گیمینگ هستید، هدفون بلوتوثی مدل K55 به‌عنوان یکی از جدیدترین گزینه‌های موجود در بازار ارزش بررسی را دارد. این مدل با ابعادی کوچک تولید شده است. ابعاد و وزن کم آن، جابه‌جایی این وسیله و استفاده طولانی‌مدت از آن را آسان می‌کند و باعث خستگی گوش‌ها نخواهد شد. این مدل برای اتصال به دستگاه‌ به بلوتوث نسخه 5.0 مجهز شده است و در مدت زمان اندکی، اتصال با گوشی موبایل اندروید یا ios شما برقرار خواهد شد. هدفون بی سیم K55 دارای یک میکروفون با کیفیت است و این ویژگی، آن را برای مکالمه مناسب می‌سازد. از ویژگی‌های اصلی این محصول محفظه نگهدارنده یا همان کیس آن است. این کیس قابلیت شارژ هدفون را دارد. برای شارژ آن کافی است از درگاه USB-C تعبیه شده بر روی کیس و کابل شارژ درون بسته‌بندی استفاده کنید. گفتنی است باتری 400 میلی‌آمپر ساعتی این هدفون در حدود 4-6 ساعت مکالمه و 4-6 ساعت پخش موسیقی را پاسخ‌گو خواهد بود.</p>
                        )}
                        <p className='text-blue-400 cursor-pointer text-xl' onClick={() => setShoAllIntroduction(prev => !prev)}>{showAllIntroduction ? "- بستن" : "+ بیشتر"}</p>
                    </div>
                ) : showSection == "توضیحات" ? (
                    <div className=' p-5'>
                        <h1 className='text-xl md:text-3xl text-[#515151] my-4 font-semibold'>طراحی و کیفیت ساخت گوشی شیائومی ردمی 9A</h1>
                        <p className='text-lg my-4 font-extralight text-justify'>اگر به دنبال تهیه یک هدفون بی‌سیم گیمینگ هستید، هدفون بلوتوثی به عنوان گوشی‌ای که قیمت خیلی زیادی ندارد، باید به این موضوع اشاره کنیم که داخل بسته بندی Redmi 9A آیتم‌های خاصی دیده نمی شود. دفترچه راهنما، ابزار خارج کردن سیم کارت و شارژ ۱۰ واتی را به همراه کابل USB مشاهده می‌کنید. این گوشی شیائومی در ابعاد ۱۶۴.۹ در ۷۷.۱ در ۹ میلی متر ساخته شده و وزن آن هم ۱۹۶ گرم است. در حال کلی باید به این موضوع اشاره کنیم که این گوشی خیلی خوب در دست قرار میگیرد. قاب این گوشی بافت جالب توجهی دارد و به همین دلیل خیلی خوب داخل دست قرار میگیرد. البته باید به این موضوع اشاره کنیم که قاب پشتی گوشی خیلی زود اثر انگشت را به خود جلب می‌کند. قاب پشتی که به صورت مات طراحی شده میزبان دوربین‌های پشت است و به جز دوربین‌ها چیزی روی آن قرار نگرفته است. به همین دلیل گوشی بسیار ساده به نظر می‌رسد. زمانی که به گوشی نگاه می‌کنید، متوجه می‌شوید که صفحه نمایش آن حاشیه‌های بسبتا بزرگی دارد.</p>
                        {showAllIntroduction && (
                            <div>
                                <p className='text-lg mb-4 font-extralight text-justify'>اگر به دنبال تهیه یک هدفون بی‌سیم گیمینگ هستید، هدفون بلوتوثی البته که با توجه به قیمت ارزان این گوشی نیاید انتظار زیادی از این محصول داشته باشید. روی صفحه نمایش ناچ قطره‌ ای قرار گرفته که داخل آن دوربین سلفی دیده می‌شود. روی لبه بالای گوشی جک ۳.۵ میلی صدا قرار گرفته و روی لبه پایین هم پورت micro-USB و اسپیکر گوشی  و میکروفن را مشاهده می‌کنید. خیلی دوست داشتیم که روی این گوشی پورت USB C مشاهده می کردیم. روی لبه سمت چپ گوشی محل قرار گرفتن سیم کارت و کارت حافظه را مشاهده می‌کنید. همچنین باید به این موضوع اشاره کنیم که این گوشی در سه رنگ آبی و سبز و مشکی راهی بازار شده است.</p>
                                <div className='flex justify-around my-20'>
                                    <img src={baner1} alt="img" />
                                </div>
                                <h1 className='text-xl md:text-3xl text-[#515151] my-4 font-semibold'>صفحه نمایش شیائومی ردمی 9a</h1>
                                <p className='text-lg mb-4 font-extralight text-justify'>اگر به دنبال تهیه یک هدفون بی‌سیم گیمینگ هستید، هدفون بلوتوثی البته که با توجه به قیمت ارزان این گوشی نیاید انتظار زیادی از این محصول داشته باشید. روی صفحه نمایش ناچ قطره‌ ای قرار گرفته که داخل آن دوربین سلفی دیده می‌شود. روی لبه بالای گوشی جک ۳.۵ میلی صدا قرار گرفته و روی لبه پایین هم برای گوشی Redmi 9A از صفحه نمایش ۶.۵ اینچی با وضوح HD+ یا ۷۲۰ در ۱۶۰۰ پیکسل استفاده شده است. صفحه نمایشی که تراکم پیکسلی آن به ۲۶۹ پیکسل در هر اینچ می‌رسد. صفحه نمایش عملکرد خوبی در محیط‌های داخلی دارد، اما در زیر نور خورشید نظر شما را به خود جلب نمی‌کند. چرا که روشنایی گوشی زیاد نیست. صفحه نمایش رنگ‌ها را خوب نشان می‌دهد، اما عالی نیست. البته که در تنظیمات گوشی می‌توانید حالت نمایش رنگ‌ها را تغییر دهید، اما این موضوع هم باعث نمی‌شود که رنگ‌ها بهتر نشان داده شوند. رابط کاربری MIUI همیشه یکسری ویژگی‌های خاص و جذاب را پیش روی کاربران قرار می‌دهد و این اتفاق را روی این گوشی ارزان قیمت هم مشاهده می‌کنیم. به طور مثال روی صفحه نمایش LCD این گوشی حالت مطالعه و حتی دارک مود هم در نظر گرفته شده است. این ویژگی‌ها باعث می‌شوند که بتوانید بهتر با گوشی کار کنید. در حالت کلی باید بگوییم که صفحه نمایش در انجام فعالیت‌های معمولی عملکرد خوبی دارد و به نیاز شما پاسخ می‌دهد.</p>
                                <div className='flex justify-around my-20'>
                                    <img src={baner2} alt="img" />
                                </div>
                                <h1 className='text-xl md:text-3xl text-[#515151] my-4 font-semibold'>اسپیکر شیائومی 9A</h1>
                                <p className='text-lg mb-4 font-extralight text-justify'>اگر به دنبال تهیه یک هدفون بی‌سیم گیمینگ هستید، هدفون بلوتوثی البته که با توجه به قیمت ارزان این گوشی نیاید انتظار زیادی از این محصول داشته باشید. روی صفحه نمایش ناچ قطره‌ ای قرار گرفته که داخل آن دوربین سلفی دیده می‌شود. روی لبه بالای گوشی جک ۳.۵ میلی صدا قرار گرفته و روی لبه پایین هم برای تنها یک اسپیکر روی این گوشی قرار دارد که به وظیفه خودش به خوبی عمل می‌کند. میکروفن کوچکی روی این محصول قرار گرفته که حجم صدای خیلی زیادی تولید نمی کند، اما کیفیت مناسبی دارد. این اسپیکر در زمان پخش موسیقی  و تماشای ویدیوهای مختلف عملکرد قابل قبولی دارد. این گوشی جک ۳.۵ میلی متری خروجی صدا هم دارد و می‌توانید از هدفون‌های مختلف روی این محصول استفاده کنید. با استفاده از هدفون به رادیو هم دسترسی خواهید داشت.</p>
                                <div className='flex justify-around my-20'>
                                    <img src={baner3} alt="img" />
                                </div>
                                <h1 className='text-xl md:text-3xl text-[#515151] my-4 font-semibold'>جمع بندی</h1>
                                <p className='text-lg mb-4 font-extralight text-justify'>به عنوان یک گوشی ارزان قیمت واقعا با محصول خوش ساخت و قابل قبولی سر و کار دارید. باتری فوق العاده از ویژگی های جذاب این گوشی به حساب می‌آید. صفحه نمایش هم نظر شما را به خود جلب می‌کند و تنها دوربین پشت این گوشی هم نیاز شما را برطرف خواهد کرد. این گوشی برای استفاده‌های معمولی بسیار مناسب است.</p>
                            </div>

                        )}
                        <p className='text-blue-400 cursor-pointer text-xl' onClick={() => setShoAllIntroduction(prev => !prev)}>{showAllIntroduction ? "- بستن" : "+ بیشتر"}</p>
                    </div>

                ) : showSection == "توضیحات تکمیلی" ? (
                    <div className='flex flex-col items-start py-8'>
                        <h1 className='text-xl md:text-2xl text-[#515151] my-2 font-semibold'>مشخصات فنی</h1>
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
    )
}
