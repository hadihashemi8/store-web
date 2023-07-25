import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './MainOffer.css'




export default function MainOffer(props) {

    return (

            <div className=' w-full'>
                <h4 className=' text-xl'>پیشنهاد لحظه ای</h4>
                <div className='time-line    h-[2px] w-[120%] bg-blue-800 mt-2'></div>
                <div className='flex flex-col items-center'>
                    <div >
                        <img  src={props.src} alt="" />
                    </div>
                    <div className='flex flex-col items-center p-4'>
                        <p>{props.name}
                        </p>
                        <div className='flex justify-between items-start w-full mt-4'>
                            <span className='bg-red-600 rounded-full text-white  w-8 flex items-center justify-center h-8'>15%</span>
                            <div className='flex flex-col '>
                                <span className='new-price  text-2xl'>12000000 تومان</span>
                                <span className='old-price opacity-50 line-through text-2xl'>18000000 تومان</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
    )
}
