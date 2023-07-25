import { createSlice } from "@reduxjs/toolkit"
import swal from "sweetalert"

const getDataFromLocalStorage = JSON.parse(localStorage.getItem('basket'))


const buySlice = createSlice({
    name: 'cart',
    initialState: getDataFromLocalStorage || { products: [], total: 0, offer: 0, finalPrice: 0 },
    reducers: {
        addToBasket(state, action) {


            const check = state.products.findIndex(item => item.id == action.payload.id)
            if (check !== -1) {
                if (state.products[check].count == state.products[check].qty) {
                    swal({
                        icon: 'error',
                        title: 'اوپس',
                        text: 'موجودی این محصول تموم شد!',
                        button: "تایید"
                    })

                } else {
                    state.products[check].qty += action.payload.qty
                }
            } else {
                state.products.push(action.payload)
            }


            state.total = state.products.reduce((acc, cur) => acc + cur.price * cur.qty, 0)
            state.finalPrice = state.total - (state.offer / 100) * state.total
            localStorage.setItem('basket', JSON.stringify(state))

        },
        updateCount(state, action) {

            const check = state.products.findIndex(item => item.id == action.payload.id)
            if (check !== -1) {
                state.products[check].qty = action.payload.qty
            }

            state.total = state.products.reduce((prev, next) => prev + next.price * next.qty, 0)
            state.finalPrice = state.total - (state.offer / 100) * state.total
            localStorage.setItem('basket', JSON.stringify(state))

        },
        removeProduct(state, action) {

            state.products = state.products.filter(product => product.id !== action.payload.id)
            state.total = state.products.reduce((prev, next) => prev + next.price * next.qty, 0)
            state.finalPrice = state.total - (state.offer / 100) * state.total
            localStorage.setItem('basket', JSON.stringify(state))

        },
        addOfferCode(state, action) {
            state.offer = action.payload.offerCode.precent
            state.finalPrice = state.total - (state.offer / 100) * state.total
            localStorage.setItem('basket', JSON.stringify(state))


        }
    }
})


export const { addToBasket, updateCount, removeProduct, addOfferCode  } = buySlice.actions

export default buySlice.reducer