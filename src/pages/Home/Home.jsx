import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Main from "../../Components/Main/Main"
import StoreProperty from "../../Components/StoreProperty/StoreProperty"
import OfferBox1 from "../../Components/OfferBox1/OfferBox1"
import OfferBox2 from "../../Components/OfferBox2/OfferBox2"
import OfferBox3 from "../../Components/OfferBox3/OfferBox3"
import OfferBox4 from "../../Components/OfferBox4/OfferBox4"
import OfferBox5 from "../../Components/OfferBox5/OfferBox5"
import AmazingOffer from "../../Components/AmazingOffer/AmazingOffer"
import Categories from "../../Components/Categories/Categories"
import PopularPart from "../../Components/Populars/PopularPart"
import NewProducts from "../../Components/NewProducts/NewProducts"
import NewLaptops from "../../Components/NewLaptops/NewLaptops"
import NewWatchs from "../../Components/NewWatchs/NewWatchs"
import LastDocs from "../../Components/LastDocs/LastDocs"
import OurPartner from "../../Components/OurPartner/OurPartner"
import Footer from "../../Components/Footer/Footer"
import {SlArrowUp} from "react-icons/sl"
import AdStand1 from '../../Components/AdStand1/AdStand1'



export default function Home() {
    




    return (
        <div className=" max-w-screen-2xl mx-auto bg-main-gray relative overflow-x-hidden">
            
            <NavBar />
            <Main />
            <StoreProperty />
            <OfferBox1 />
            <AmazingOffer />
            <Categories />
            <OfferBox2 />
            <PopularPart />
            <OfferBox3 />
            <NewProducts />
            <OfferBox4 />
            <NewLaptops />
            <OfferBox5 />
            <NewWatchs />
            <LastDocs />
            <OurPartner />
            <Footer />





            
        </div>
    )
}
