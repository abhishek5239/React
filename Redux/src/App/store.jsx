import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
export const store=configureStore({

    // ! here after adding the methods inside the reducers in the slice file we export and make our store
    // ! aware of it.
    //  we can also pass an object
    reducer:todoReducer,
})