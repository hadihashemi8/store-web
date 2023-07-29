import { configureStore } from "@reduxjs/toolkit";
import buyReducers from "../slices/buySlice"
import addFavouriteSlice from "../slices/addFavouriteSlice";
import offerCodesReducer from "../slices/offerCodesSlice";
import filter from "../slices/filterSlice"



export default configureStore({
    reducer: {
        basket: buyReducers,
        favouriteProducts: addFavouriteSlice,
        allOfferCodes: offerCodesReducer,
        filterItems: filter
    }
})