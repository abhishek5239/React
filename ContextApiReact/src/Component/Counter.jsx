import { useContext } from "react"
import userContext from "../Context/UserContext"
function Counter()
{
    const {counter,counterFun}=useContext(userContext)
    return (
        <>
        <h3>{counter}</h3>
        <button onClick={()=>counterFun(counter+1)}> +</button>
       
        </>
    )
}

 export default Counter