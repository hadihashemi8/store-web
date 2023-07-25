import { createSlice } from "@reduxjs/toolkit"

const getFromLocal = JSON.parse(localStorage.getItem("favourite-product"))

const addFavouriteSlice = createSlice({
    name: "favourite-products",
    initialState: { favouriteProducts: getFromLocal ? getFromLocal : [] },
    reducers: {
        addToFavourite(state, action) {
            const check = state.favouriteProducts.findIndex(item => item.id == action.payload.id)
            if (check == -1) {
                state.favouriteProducts.push(action.payload)
            } else {
                state.favouriteProducts[check].isFavourite = false
                state.favouriteProducts.splice(check, 1)
            }

            localStorage.setItem("favourite-product", JSON.stringify(state.favouriteProducts))

        }
    }
})

export const { addToFavourite } = addFavouriteSlice.actions

export default addFavouriteSlice.reducer