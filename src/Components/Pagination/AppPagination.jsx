import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'




export default function AppPagination({datas , setItems, showItemCount, defaultPage }) {

    // const { products } = useSelector(state => state.filterItems)
    // const { offerCodes } = useSelector(state => state.allOfferCodes)

    const productsShowCount = showItemCount
    const pageSize = Math.ceil(datas?.length / productsShowCount)
    const pageNumber = defaultPage
    const endSlice = productsShowCount * pageNumber
    const startSlice = endSlice - productsShowCount

    const [allItems, setAllItems] = useState(datas)
    const [activePage, setActivePage] = useState(pageNumber)
    const [pagination, setPagination] = useState({
        to: endSlice,
        from: startSlice
    })


    useEffect(() => {
        
        setAllItems(datas)
    }, [datas])



    useEffect(() => {
        
        let sliceItemsForShow = allItems?.slice(pagination.from, pagination.to)
   
        setItems(sliceItemsForShow)
    }, [pagination.from, pagination.to , allItems])


    useEffect(() => {
        setActivePage(1)
        setPagination({ from: startSlice, to: endSlice })
    }, [allItems])



    const handlePagination = (event, page) => {
        const to = productsShowCount * page
        const from = to - productsShowCount
        setPagination({ from: from, to: to })

    }

    return (
        <div className='p-4 flex items-center justify-center' dir='ltr'>
            <Pagination color='primary' count={pageSize} defaultPage={activePage} onChange={handlePagination} />
        </div>
    )
}
