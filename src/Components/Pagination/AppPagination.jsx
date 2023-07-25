import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'




export default function AppPagination({datas ,  setItems , showItemCount , defaultPage}) {
    
    const productsShowCount = showItemCount
    const pageSize = Math.ceil(datas?.length / productsShowCount)
    const activePage = defaultPage
    const endSlice = productsShowCount * activePage
    const startSlice = endSlice - productsShowCount

    const [allItems, setAllItems] = useState(datas)
    const [pagination, setPagination] = useState({
        to: endSlice,
        from: startSlice
    })
   


    useEffect(() => {
        let sliceItemsForShow = allItems?.slice(pagination.from, pagination.to)
        setItems(sliceItemsForShow)
    }, [pagination.from , pagination.to])


    const handlePagination = (event, page) => {
        const to = productsShowCount * page
        const from = to - productsShowCount
        setPagination({from:from , to:to})
        
    }

    return (
        <div className='p-4 flex items-center justify-center' dir='ltr'>
            <Pagination color='primary' count={pageSize} defaultPage={activePage} onChange={handlePagination} />
        </div>
    )
}
