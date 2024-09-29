import { useEffect, useState } from "react";
 function RandNumber()
{
    const [isnumber,numberFun]=useState(false)
    const[isspecialCha,charNumFun]=useState(false)
    const[changeLen,lenFun]=useState(5)
    const [password,loadPassword]=useState("")
    function generateNumber()
    {
        let newStr=""
        let str="ABCDEFGabcdefg"
        if(isnumber)str+="123456789"
        if(isspecialCha)str+="*&%$#@"
        for(let i=0;i<changeLen;++i)
        {
            let rand=Math.floor(Math.random()*str.length)
            // console.log(rand);
            newStr+=str[rand]
        }
        console.log(newStr); 
        loadPassword(newStr)  
    }
    useEffect(()=>{generateNumber()},[])
    useEffect(()=>{
        generateNumber()
    },[isnumber,isspecialCha,changeLen])

    return ( 

        <>
        <div>
            <button onClick={()=>numberFun(!isnumber)}>{isnumber?"dont't show number":"show number"}</button>
            <button onClick={()=>charNumFun(!isspecialCha)}>{isspecialCha?"dont't show character":"show character"}</button>
        </div>
        <div>
            <button onClick={()=>lenFun(changeLen+1)}>+</button>
            <button onClick={()=>lenFun(changeLen-1)}>-</button>
            <h4>our length {changeLen}</h4>
        </div>
        <h2>your passowrd is: {password}</h2>
        </>




    );
}
export default RandNumber