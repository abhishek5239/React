import { useState } from "react"
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import {addProducts} from "../Slice/ShoppingSlice"
function AddProduct()
{
    const navigation=useNavigate()
    const dispatch=useDispatch()
    const [newProduct,newProductFun]=useState({})
    const fun=(e)=>{
        newProductFun((preval)=>({
            ...preval,
            [e.target.name]:e.target.value,
            
        }))
    }
    const submitFun = (e) => {
        e.preventDefault(); // Prevent the default form submission
        console.log("submit the form");
        dispatch(addProducts(newProduct));
        navigation("/"); // Navigate to the home page
      };
    return(<>
    
    <form onSubmit={submitFun} >
        <input type="text" name="productName"placeholder="product name" value={newProduct.productName} onChange={fun}/>
        <input type="text" name="productAmount" placeholder="Amount" value={newProduct.productAmount} onChange={fun} />
        <button type="submit"> Submit</button>
    </form>
    
    </>)
}

export default AddProduct