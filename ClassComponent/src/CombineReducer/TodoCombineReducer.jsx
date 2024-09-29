import {combineReducers} from 'redux'
import TodoReducer from '../Reducer/TodoReducer'

const RootAllReducer=combineReducers({
    todoReducer:TodoReducer
})
export default RootAllReducer 