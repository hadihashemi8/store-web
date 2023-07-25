import { configureStore } from "@reduxjs/toolkit";
import buyReducers from "../slices/buySlice"
import addFavouriteSlice from "../slices/addFavouriteSlice";
import offerCodesReducer from "../slices/offerCodesSlice";

export default configureStore({
    reducer: {
        basket: buyReducers,
        favouriteProducts: addFavouriteSlice,
        allOfferCodes: offerCodesReducer
    }
})