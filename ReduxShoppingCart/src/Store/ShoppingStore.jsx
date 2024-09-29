import {configureStore} from '@reduxjs/toolkit'
import shoppingReducer from '../Slice/ShoppingSlice'
export const ShoppingStore=configureStore({
    reducer:shoppingReducer
})