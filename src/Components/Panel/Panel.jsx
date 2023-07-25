import React from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { TbEdit } from 'react-icons/tb'



export default function Panel() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-4 p-4 '>
      {/* dashboard navigations */}
      <div className='md:col-span-3 lg:col-span-2'>
        <div className='bg-white  rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.1)] '>


          <div className='p-2 flex items-center justify-between border-b-[1px] border-gray-300'>
            <h3 className='flex items-center justify-between'> <BsCircleFill className='mx-2 text-xs text-blue-600' /> اطلاعات شخصی </h3>

            <p className='flex items-center text-blue-600'>ویرایش <TbEdit className='mx-1' /></p>
          </div>

          <table className=' w-full border-b-[1px] border-gray-200'>
            <tr >
              <th className='text-right p-1 text-gray-400'> نام و نام خانوادگی :</th>
              <th className='text-right p-1 text-gray-400'>  شماره تماس :</th>

            </tr>
            <tr>
              <td className='text-right p-1 text-lg' >هادی</td>
              <td className='text-right p-1 text-lg'>0938682258</td>
            </tr>
          </table>

          <table className=' w-full border-b-[1px] border-gray-200'>
            <tr >
              <th className='text-right p-1 text-gray-400'> ایمیل :</th>
              <th className='text-right p-1 text-gray-400'>  کد ملی :</th>

            </tr>
            <tr>
              <td className='text-right p-1 text-lg' >hadi@gmail.com</td>
              <td className='text-right p-1 text-lg'>544676454</td>
            </tr>
          </table>

          <table className=' w-full border-b-[1px] border-gray-200'>
            <tr >
              <th className='text-right p-1 text-gray-400'> عضویت :</th>
              <th className='text-right p-1 text-gray-400'>  کد پستی :</th>

            </tr>
            <tr>
              <td className='text-right p-1 text-lg' >1381</td>
              <td className='text-right p-1 text-lg'>65161</td>
            </tr>
          </table>

          <table className=' w-full '>
            <tr >
              <th className='text-right p-1 text-gray-400'> آدرس :</th>


            </tr>
            <tr>
              <td className='text-right p-1 text-lg' >ارومیه/خیام</td>

            </tr>
          </table>
        </div>
      </div>
      {/* dashboard show pages */}
      <div className='  md:col-span-2 lg:col-span-2  '>
        <div className='rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.1)] bg-white overflow-y-scroll h-72'>
          <div className='p-2 flex items-center justify-between border-b-[1px] border-gray-300'>
            <h3 className='flex items-center justify-between'> <BsCircleFill className='mx-2 text-xs text-blue-600' /> آخرین اطلاعیه ها </h3>
          </div>
          <div className='p-4 border-b-[1px] border-gray-200'>
            <p className='text-gray-400'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
          </div>
          <div className='p-4 border-b-[1px] border-gray-200'>
            <p className='text-gray-400'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
          </div>
          <div className='p-4 border-b-[1px] border-gray-200'>
            <p className='text-gray-400'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
          </div>
          <div className='p-4 border-b-[1px] border-gray-200'>
            <p className='text-gray-400'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
          </div>
          <div className='p-4 border-b-[1px] border-gray-200'>
            <p className='text-gray-400'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
          </div>
          <div className='p-4 border-b-[1px] border-gray-200'>
            <p className='text-gray-400'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
          </div>
          <div className='p-4 border-b-[1px] border-gray-200'>
            <p className='text-gray-400'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
          </div>
        </div>
      </div>
      {/* dashboard pic */}
      <img className='md:col-span-1 lg:col-span-1 rounded-lg ' src="/./src/assets/stand.jpg" alt="" />
    </div>
  )
}
