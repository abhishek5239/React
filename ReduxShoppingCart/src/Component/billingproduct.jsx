import {useSelector} from 'react-redux'
function BillingProduct()
{
const data=useSelector(state=>state.selectProducts)

const totalFun=()=>{
    let sum=0;

    for(let i of data)
    {
        let amt=parseInt(i.amount)
        let qnt=parseInt(i.quantity)
        sum+=(amt*qnt)
       
    }
    console.log("sum",sum);
    return sum
}
    return (<>
    {
        data.map((val)=>(
            <div>
                <h3>product : {val.product}</h3>
                <h3>amount : {parseInt(val.amount)*parseInt(val.quantity)}</h3>

                
            </div>
        ))
       
    }
     <h3>total bill: {totalFun()}</h3>
    </>)
}

export default BillingProduct