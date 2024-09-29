import {createSlice,nanoid} from '@reduxjs/toolkit'

// ! 1. mention the initial state of you slice. if you want to store something before hand

const initialState={
    // ? it will be an empty array
    todos:[
        {
            id:1,
            text:"abhishek"
        }
    ],
    myData:{}
}

// !. 2. first we export a slice
export const todoSlice=createSlice({
    //* Name for your slice is very imp. -> also we mention the initial state and the reducers which we want to
    //* assign to those slice
    name:'todo',
    initialState,

    // *2.a Add reducer
    reducers:{
        // *provide name
        // state-> the initial state of the store what is present in the store
        // action -> we send the payload or what we want to perform the actin
        // *2.b create a todo object. this single object include an unique id and payload

        // * 2.c this is your first reducer 
        addTodo:(state,action)=>{
            // create todo object
            const todo={
                id:nanoid(),
                text:action.payload
            }
            // *2.d push in the state which we have define up
            state.todos.push(todo)
            state.myData[todo.id]=action.payload
        },

        // * 2.e This is your second reducer and like this this you can make as many reducer
        removeTodo:(state,action)=>{

            // as we are deleting here we suppose in the payload we will be getting the id of the todo we
            // want to delete
            state.todos=state.todos.filter((valTodo)=>valTodo.id!==action.payload)
        },

        UpdateTodoList:(state,action)=>{
            state.todos=state.todos.map((val)=>{
                if(val.id===action.payload.id)
                {
                    console.log("in slice");
                    val.text=action.payload.txt
                    console.log(val.text,action.payload.txt);
                    return val;
                }
                return val;
            }
               

            )
        }


        
    }
})

// !3 export these each method in the reducer

export const {addTodo,removeTodo,UpdateTodoList}=todoSlice.actions


// ! 4 also export the whole reducer. Now we do this so that our store should be aware of whole reducer
export default todoSlice.reducer