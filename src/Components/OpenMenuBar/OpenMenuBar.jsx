import React, { useEffect, useState } from 'react'
import './OpenMenuBar.css'




export default function OpenMenuBar(props) {

    const [menuItem, setMenuItem] = useState(props.menuItemInfo)
    const [subMenusShow, setSubMenusShow] = useState(false)
    const [selectOpenMenuInfo, setSelectOpenMenuInfo] = useState([])
    const [activeSelctOption , setActiveSelctOption] = useState(menuItem[0].category)



    const OpenMenuBarHandler = (itemId , itemCategory) => {
        setActiveSelctOption(itemCategory)
        setSubMenusShow(true)
        setSelectOpenMenuInfo(menuItem.filter(item => item.id == itemId))
    }

    useEffect(() => {
        console.log(selectOpenMenuInfo);


    }, [selectOpenMenuInfo])



    return (
        <div className='z-50 absolute top-full overflow-hidden right-0 bg-white shadow-[0_5px_15px_1px_rgba(0,0,0,0.5)] lg:w-[900px] xl:w-[1100px]  rounded-lg '>
            <div className='   w-full h-full flex  ' >
                {/* menu rigth part */}
                <div className='right-part  w-1/5  overflow-y-scroll   no-scrollbar border-l-2 border-blue-800'>
                    <ul >
                        {props.menuItemInfo.map(item => (
                            <li key={item.id} className={`rounded-lg hover:pr-6   p-4 hover:bg-main-gold   text-gray-400 hover:text-main-blue duration-300 ${activeSelctOption == item.category && "bg-main-gold text-main-blue"}`} onMouseOver={() => OpenMenuBarHandler(item.id , item.category)} onMouseLeave={() => setSubMenusShow(false)}>{item.category}</li>
                        ))}

                    </ul>
                </div>
                {/* menu left part */}
                <div className='left-part w-3/4 '>
                    {subMenusShow && (
                        <div onMouseOver={() => setSubMenusShow(true)} onMouseLeave={() => setSubMenusShow(false)} className='w-full h-full  flex items-start'>

                            {selectOpenMenuInfo && selectOpenMenuInfo[0].subMenu.map(item => (
                                <ul className=' p-2 mx-4 border-b-[1px] border-blue-800  '>
                                    <li className='text-xl text-black'>{item.subMenuTitle}</li>
                                    {item.subMenuItems.map(item => (
                                        <li className='text-base my-1 hover:-translate-x-1 text-black'>{item}</li>
                                    ))}

                                </ul>
                            ))}

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
