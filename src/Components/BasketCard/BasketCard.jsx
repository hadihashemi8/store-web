import React, { useEffect, useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { removeProduct, updateCount } from '../../redux/slices/buySlice'
import swal from 'sweetalert'

export default function BasketCard(props) {

    const [qty, setQty] = useState(props.qty)
    const [totalPrice, setTotalPrice] = useState(props.qty * props.price)
    const dispatch = useDispatch()

    const handleChange = (e) => {

        const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1
        setQty(value)
    }

    const addHandler = () => {

        if (qty < props.count) {
            setQty(prev => prev + 1)
        } else {
            swal({
                icon: 'error',
                title: 'اوپس',
                text: 'موجودی این محصول تموم شد!',
                button: "تایید"
            })
        }
    }


    const minHandler = () => {
        qty > 1 && setQty(prev => prev - 1)
    }

    const removeHandler = () => {
        swal({
            icon: 'info',
            // title: 'اوپس',
            text: ' آیا از حذف محصول مطمئن هستین؟',
            buttons: ["لغو", "تایید"]
        })
            .then(res => {
                if (res) {
                    dispatch(removeProduct({ id: props.id }))
                }
            })
    }

    useEffect(() => {

        setTotalPrice(props.price * qty)
        dispatch(updateCount({ id: props.id, qty }))
    }, [qty])



    return (
        <tr className='border-b-[1px] border-main-blue'>
            <td className='text-center  p-4 flex items-center justify-around'>
                <img className='w-12 h-12' src={props.src} alt="" />
                <p className='text-xs text-justify'>
                    {props.title}
                </p>
            </td>
            <td className='text-center  p-4'>{props.price}</td>
            <td className='text-center  p-4 '>

                <div className='flex items-center justify-between  border-[1px] border-red-500'>
                    <button className='bg-red-500 w-5 h-5 p-1 text-xl  flex items-center justify-center text-white' onClick={addHandler}>+</button>
                    <input className='w-5 h-5 outline-none text-center' type="number" value={qty} onChange={handleChange} />
                    <button className='bg-red-500 w-5 h-5 p-1 text-xl  flex items-center justify-center text-white' onClick={minHandler}>-</button>
                </div>
            </td>
            <td className='text-center  p-4'>{totalPrice}</td>
            <td className='text-center  p-4 '>
                <button className='p-1 outline-none bg-red-700 rounded text-white' onClick={removeHandler}>
                    <FiTrash2 />
                </button>
            </td>
        </tr>
    )
}
