import React from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'

export default function LastOrders() {
  return (
    <div className='md:col-span-3 lg:col-span-2 mt-4'>

      <div className='bg-white  rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.1)] overflow-hidden '>


        <div className='p-2 flex items-center justify-between border-b-[1px] border-gray-300'>
          <h3 className='flex items-center justify-between'> <BsCircleFill className='mx-2 text-xs text-blue-600' /> آخرین سفارشات </h3>
        </div>
        <div className='w-full overflow-x-scroll h-72  no-scrollbar'>
          <table className='w-full ' >
            <thead className='bg-gray-300'>
              <tr>
                <th className='p-4 text-center'>#</th>
                <th className='p-4 text-center'>شماره سفارش</th>
                <th className='p-4 text-center'>تاریخ ثبت سفارش</th>
                <th className='p-4 text-center'>مبلغ پرداختی</th>
                <th className='p-4 text-center'>وضعیت سفارش</th>
                <th className='p-4 text-center'>جزییات</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b-[1px] border-gray-800'>
                <td className='p-4 text-center'>1</td>
                <td className='p-4 text-center'>2354632</td>
                <td className='p-4 text-center'>سه شنبه 13 دی 1401</td>
                <td className='p-4 text-center'>580,000 تومان</td>
                <td className='p-4 text-center'>سفارش در حال ارسال</td>
                <td className='p-4 flex items-center justify-around '><button className='flex items-center justify-around bg-lime-400 rounded-lg p-2'><IoIosArrowBack /></button></td>
              </tr>
              <tr className='border-b-[1px] border-gray-800'>
                <td className='p-4 text-center'>1</td>
                <td className='p-4 text-center'>2354632</td>
                <td className='p-4 text-center'>سه شنبه 13 دی 1401</td>
                <td className='p-4 text-center'>580,000 تومان</td>
                <td className='p-4 text-center'>سفارش در حال ارسال</td>
                <td className='p-4 flex items-center justify-around'><button className='flex items-center justify-around bg-lime-400 rounded-lg p-2'><IoIosArrowBack /></button></td>
              </tr>
              <tr className='border-b-[1px] border-gray-800'>
                <td className='p-4 text-center'>1</td>
                <td className='p-4 text-center'>2354632</td>
                <td className='p-4 text-center'>سه شنبه 13 دی 1401</td>
                <td className='p-4 text-center'>580,000 تومان</td>
                <td className='p-4 text-center'>سفارش در حال ارسال</td>
                <td className='p-4 flex items-center justify-around'><button className='flex items-center justify-around bg-lime-400 rounded-lg p-2'><IoIosArrowBack /></button></td>
              </tr>
              <tr className='border-b-[1px] border-gray-800'>
                <td className='p-4 text-center'>1</td>
                <td className='p-4 text-center'>2354632</td>
                <td className='p-4 text-center'>سه شنبه 13 دی 1401</td>
                <td className='p-4 text-center'>580,000 تومان</td>
                <td className='p-4 text-center'>سفارش در حال ارسال</td>
                <td className='p-4 flex items-center justify-around'><button className='flex items-center justify-around bg-lime-400 rounded-lg p-2'><IoIosArrowBack /></button></td>
              </tr>
              <tr className='border-b-[1px] border-gray-800'>
                <td className='p-4 text-center'>1</td>
                <td className='p-4 text-center'>2354632</td>
                <td className='p-4 text-center'>سه شنبه 13 دی 1401</td>
                <td className='p-4 text-center'>580,000 تومان</td>
                <td className='p-4 text-center'>سفارش در حال ارسال</td>
                <td className='p-4 flex items-center justify-around'><button className='flex items-center justify-around bg-lime-400 rounded-lg p-2'><IoIosArrowBack /></button></td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

    </div>
  )
}
