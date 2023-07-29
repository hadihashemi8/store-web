import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BsLaptop, BsPhone, BsSearch, BsWatch } from 'react-icons/bs'
import { MdOutlineMonitor } from "react-icons/md"
import { filter } from '../../redux/slices/filterSlice'




export default function FilterCategories() {

    const dispatch = useDispatch()
    const [filterItems, setFilterItems] = useState("همه محصولات")



    const filterHandler = (e) => {
        const value = e.target.value
        dispatch(filter({ title: value }))
        setFilterItems(value)
    }


    useEffect(() => {
        dispatch(filter({ title: "همه محصولات" }))
    }, [])


    return (
        <div className=' p-4'>
            <div className='rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.1)] bg-white   flex flex-col items-start justify-between p-4'>

                <h3 className='font-semibold border-r-4 border-main-blue pr-3'>دسته بندی</h3>

                <div className='flex items-center justify-start  mt-5 overflow-x-scroll  w-full no-scrollbar'>

                    <button value={"همه محصولات"} onClick={filterHandler} className={`shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)] hover:bg-main-blue hover:text-white transition-300  p-4 mx-2  flex  items-center justify-evenly rounded-lg cursor-pointer ${filterItems == "همه محصولات" ? "bg-main-blue text-white" : "bg-main-gray text-black"}`}>

                        همه محصولات

                    </button>
                    <button value={"تلوزیون"} onClick={filterHandler} className={`shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)] hover:bg-main-blue hover:text-white transition-300  p-4 mx-2  flex  items-center justify-evenly rounded-lg cursor-pointer ${filterItems == "تلوزیون" ? "bg-main-blue text-white" : "bg-main-gray text-black"}`}>
                        <MdOutlineMonitor />
                        تلوزیون
                    </button>
                    <button value={"گوشی"} onClick={filterHandler} className={`shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)] hover:bg-main-blue hover:text-white transition-300  p-4 mx-2  flex  items-center justify-evenly rounded-lg cursor-pointer ${filterItems == "گوشی" ? "bg-main-blue text-white" : "bg-main-gray text-black"}`}>
                        <BsPhone />
                        گوشی
                    </button>
                    <button value={"ساعت"} onClick={filterHandler} className={`shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)] hover:bg-main-blue hover:text-white transition-300  p-4 mx-2  flex  items-center justify-evenly rounded-lg cursor-pointer ${filterItems == "ساعت" ? "bg-main-blue text-white" : "bg-main-gray text-black"}`}>
                        <BsWatch />
                        ساعت
                    </button>
                    <button value={"لبتاب"} onClick={filterHandler} className={`shadow-[inset_0_0_18px_1px_rgba(100,100,100,0.1)] hover:bg-main-blue hover:text-white transition-300  p-4 mx-2  flex  items-center justify-evenly rounded-lg cursor-pointer ${filterItems == "لبتاب" ? "bg-main-blue text-white" : "bg-main-gray text-black"}`}>
                        <BsLaptop />
                        لبتاب
                    </button>

                </div>
            </div>
        </div>
    )
}
