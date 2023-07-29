import { createSlice } from "@reduxjs/toolkit";
import datas from "../../datas/datas";

const filterItems = createSlice({
    name: "filter",
    initialState: { products: [...datas.allProducts] },
    reducers: {
        filter(state, action) {
            if (action.payload.title == "همه محصولات") {
                state.products = [...datas.allProducts]
            } else if (action.payload.title == "لبتاب") {
                const items = datas.allProducts.filter(item => item.cat == "labtop")
                state.products = items
            }
            else if (action.payload.title == "گوشی") {
                const items = datas.allProducts.filter(item => item.cat == "phone")
                state.products = items
            }
            else if (action.payload.title == "تلوزیون") {
                const items = datas.allProducts.filter(item => item.cat == "Tv")
                
                state.products = items
            }
            else if (action.payload.title == "ساعت") {
                const items = datas.allProducts.filter(item => item.cat == "watch")
                state.products = items
            }

        }
    }
})

export const { filter } = filterItems.actions

export default filterItems.reducer