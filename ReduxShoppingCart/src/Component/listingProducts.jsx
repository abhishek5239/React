
import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {addSelectedItems} from '../Slice/ShoppingSlice'
import { useNavigate,Link } from 'react-router-dom';
function ListingProducts(){
const navigation=useNavigate()
const dispatch=useDispatch();
    const proceedFun=()=>
    {
dispatch(addSelectedItems(quantityProduct))
navigation("/billing")
    }

const products=useSelector(state=>state.products)
const [quantityProduct,quantityProductFun]=useState({})
const [totalProduct,totalProductFun]=useState(0)
const incrementQuantityFun =(pro,id1)=>{
    
   quantityProductFun(prevObj=>{
    console.log("prevobj", prevObj);
    console.log("quantity: ",prevObj[id1]?.quantity);
    let qnt
    if(prevObj[id1]?.quantity===undefined){
        console.log("in if");
        qnt=0}
    else
    qnt=prevObj[id1]?.quantity
    return {
    ...prevObj,
    [id1]:{

        product:pro.productName,
        amount:pro.money,
        quantity:qnt+1
    }
   }})
   totalProductFun(totalProduct+1)
}
console.log(quantityProduct);
    return (
        <>
        {
            products.map((val)=>(
                <div>
                    <h4>
                        {val.productName}
                    </h4>
                    <span>{val.money}</span>
                    <button>-</button>
                    <span>{quantityProduct[val.id]?.quantity==undefined?0:quantityProduct[val.id]?.quantity}</span>
                    <button onClick={()=>incrementQuantityFun(val,val.id)}>+</button>
                </div>
            ))
        }
        <div>
            <Link to="/addProduct">
            <button>Add  products</button>
            </Link>
            
        </div>
        <div>
            <h3>total quantity select : {totalProduct}</h3>
        </div>
        <div>
            <button onClick={proceedFun}>proceed for payment</button>
        </div>
        </>
    );
}

export default ListingProducts