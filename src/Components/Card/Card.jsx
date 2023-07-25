import { Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FiEye } from 'react-icons/fi'
import { GrCompare } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import BuyBtn from '../BuyBtn/BuyBtn'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket } from '../../redux/slices/buySlice'
import { addToFavourite } from '../../redux/slices/addFavouriteSlice'




export default function Card(props) {

    const dispatch = useDispatch()
    const { favouriteProducts } = useSelector(state => state.favouriteProducts)
    const [product, setProducts] = useState(props)


    useEffect(() => {
        const output = favouriteProducts?.find(item => item.id == product.id)
        if (output) {
            setProducts(output)
        }
    }, [])


    const addHandler = () => {
        dispatch(addToBasket({
            ...props,
            qty: 1
        }))

    }

    const addToFavourit = () => {
        dispatch(addToFavourite({ ...props, isFavourite: true }))
        setProducts({ ...props, isFavourite: !product.isFavourite })
        
    }





    return (
        <div className='relative rounded-lg group overflow-hidden bg-blue-100 h-full'>
            <Link to={`/ProductDetails/${product.id}`}>
                <div className={`w-full h-full flex flex-col bg-white items-center justify-between   cursor-pointer pb-4 ${props.shadow && ""}`}>
                    <div className='p-3 flex items-center justify-center '>
                    <img src={props.src} alt="" />
                    </div>
                    <div className='flex flex-col items-center justify-between'>
                        <p className='text-center px-4 text-lg mt-4'>
                            {props.title}
                        </p>
                        <p className='my-4 text-2xl text-green-800'>
                            {props.price}  تومان
                        </p>
                    </div>
                </div>
            </Link>

            <div className='absolute -top-full group-hover:top-0  duration-500  left-0  w-full h-2/3 flex flex-col items-center justify-between p-2 '>
                <div className=' self-end'>
                    <Tooltip title="جزئیات" placement="right-start">
                        <Link to={`/ProductDetails/${product.id}`}>
                            <div className='bg-white p-1 my-1 rounded-sm shadow-md cursor-pointer'>
                                <FiEye />
                            </div>
                        </Link>

                    </Tooltip>
                    <Tooltip title={product.isFavourite ? "حذف از برگزیده ها" : "افزودن به برگزیده ها"} placement="right-start">
                        <div onClick={addToFavourit} className='bg-white hover:text-red-600 p-1 my-1 rounded-sm shadow-md cursor-pointer'>
                            {product.isFavourite ? (
                                <AiFillHeart className='text-red-600' />
                            ) : (
                                <AiOutlineHeart  />
                            )}
                        </div>
                    </Tooltip>
                    <Tooltip title="مقایسه" placement="right-start">
                        <div className='bg-white p-1 my-1 rounded-sm shadow-md cursor-pointer'>
                            <GrCompare />
                        </div>
                    </Tooltip>
                </div>

                <BuyBtn handleClick={addHandler} >
                    افزودن به سبد خرید
                </BuyBtn>
            </div>
        </div>

    )
}
