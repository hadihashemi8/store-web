import { createSlice } from "@reduxjs/toolkit";
import datas from "../../datas/datas";


const getLocal = JSON.parse(localStorage.getItem("offer-Codes"))

const offerCodes = createSlice({
    name: "offer",
    initialState: { offerCodes: getLocal ? getLocal :  [...datas.offerCodes] },
    reducers: {
        activeCodes(state, action) {
            const index = state.offerCodes.findIndex(item => item.code == action.payload.offerCode)
            state.offerCodes[index].expired = true
            console.log(state.offerCodes[index].expired);
            console.log(state.offerCodes[index]);
           localStorage.setItem("offer-Codes" , JSON.stringify(state.offerCodes))
        },
        removeCodes(state, action) {
            state.offerCodes = state.offerCodes.filter(item => item.code !== action.payload.code)
            localStorage.setItem("offer-Codes" , JSON.stringify(state.offerCodes))
        }
    }
})

export const { activeCodes, removeCodes } = offerCodes.actions

export default offerCodes.reducer