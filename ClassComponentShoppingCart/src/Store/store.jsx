import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Reducer/CartReducer";
const store=configureStore({
    reducer:cartReducer
})

export default store