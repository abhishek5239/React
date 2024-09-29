

export const AddItem=(item)=>({
        type:"ADD_ITEM",
    payload:item
})

export const DeleteItem =(nametodo)=>({
    type:"Delete_Item",
    payload:nametodo
})
export const setData=(data)=>({
type:"GET_DATA",
payload:data
})
export const getData =()=>{

    return (dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            return res.json()
        }).then((response)=>{
           dispatch(setData(response))
        }).catch((e)=>{console.log("error dected ", e);})
    }
}