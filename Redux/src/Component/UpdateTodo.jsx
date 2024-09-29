import { useDispatch } from 'react-redux'
import {UpdateTodoList} from '../features/todo/todoSlice'
import { useState } from 'react';
function UpdateTodo(props) {
    const dispatch = useDispatch();
    console.log(props.id);
    const [updateState, updateFun] = useState('')
    const upfun = (val) => { 
        console.log(val)

        if (updateState != "") {
            console.log("hi")
            dispatch(UpdateTodoList(val))
        }
        // changeUpdate(!update)
        updateFun('')
        props.changeUpdate(prevalue=>!prevalue)

    }
    return (
        <>
            <div>
                <input type="text" value={updateState} onChange={(e) => updateFun(e.target.value)} />
                <button onClick={() => upfun({ id: props.id, txt: updateState })}> update</button>
            </div>
        </>)
}

export default UpdateTodo