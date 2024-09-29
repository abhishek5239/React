import {configureStore} from '@reduxjs/toolkit'
import RootAllReducer from '../CombineReducer/TodoCombineReducer'
const TodoStore=configureStore({
    reducer:RootAllReducer
})

export default TodoStore