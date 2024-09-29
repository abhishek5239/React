import { useSelector } from 'react-redux'
import { addTodo} from '../features/todo/todoSlice'
import { removeTodo } from '../features/todo/todoSlice'
import UpdateTodo from './UpdateTodo'
import { useState } from 'react'

function ShowTodo() {
    // ! 1. gives an callback which returns the state and we have to map it.
    const showTodo = useSelector((state) => state.todos)
  
    const [update, changeUpdate] = useState(false)
    const [saveId,saveIdFun]=useState('')
    // * UseDispatch is a hook when we assign it gives you an function which we can call using the dispatch

    const fun = (id) => {
        dispatch(removeTodo(id))
    }

    const showUpdate=(id)=>{

        saveIdFun(id)
        changeUpdate(!update)
    }
    

    return (
        <>
            {showTodo.map(val => (
                <div>
                    <h3>{val.text}</h3>
                    <button onClick={() => fun(val.id)}>delete</button>
                    {!update ? <button onClick={() =>showUpdate(val.id)}>Update</button> : ''}

                    {(saveId===val.id && update ) && <UpdateTodo id={val.id} changeUpdate={changeUpdate}/>}

                       
                </div>

            ))}
             
        </>
    );
}
export default ShowTodo