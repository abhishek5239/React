

const initialState={
    todos:[
      "Abhishek"
    ],
    fetchData:[]
}

const TodoReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case "ADD_ITEM":
            return {
                ...state,
                todos:[...state.todos,action.payload]
            }
            case "Delete_Item":
                return {
                    ...state,
                    todos: state.todos.filter((val)=>(val!=action.payload))
                }

                case "GET_DATA":
                    return {
                        ...state,
                        fetchData:action.payload
                    }
                default:
                return state
    }
        

}

export default TodoReducer