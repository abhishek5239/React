import { useEffect, useState } from "react";

function FetchData()
{
    const [data,loadData]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((resonse)=>
        {
            return resonse.json();
        }).then((res)=>{
            loadData(res)
            console.log(data);
        })
        
    },[])
  
    return (
        <>
       {data.map((val)=>(
         <div>
         <h2>body : {val.body}</h2>
         <h2>title : {val.title}</h2>
     </div>
       ))}
        </>
    );
}

export default FetchData