import { useState } from "react";
// ! 1. we want to add the todo in our store
import {useDispatch} from 'react-redux'

// !2. we exported the method under the todo to call it
import {addTodo} from '../features/todo/todoSlice'

function AddTodo()
{
    const [input,setInput]=useState("")
    const dispatch=useDispatch()

    const submitForm=(e)=>{
        e.preventDefault()
        // ! 3. we used the dispatch and initialize an addtodo with the payload which is the input
        let inputStr=input.trim()
        if(inputStr.length>0)
        dispatch(addTodo(input))
        setInput("")



    }
    return (
        <>
        <form action="" onSubmit={submitForm}>
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
        <button type="submit">Submit</button>
        
        </form>
        </>
    );
}

export default AddTodo