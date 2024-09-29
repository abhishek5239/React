import { useEffect, useState } from "react";

function ColorChange()
{
    let [color,changColor]=useState("red")
    function butclick(clr)
    {
         changColor(clr)
    }

   
   
   
return (
    
    <>
    <div style={{color:color}}>
<h2>Hi</h2>
<button onClick={()=> butclick("blue")}>press</button>
<button onClick={()=> butclick("green")}>press</button>
<button onClick={()=> butclick("yellow")}>press</button>
    </div>
    </>
);
}

export default ColorChange