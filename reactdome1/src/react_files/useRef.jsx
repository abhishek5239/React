import { useRef, useState } from "react";

function UseRef() {
    const [count, setCount] = useState(0);
    let ref=useRef(0)
    
    let funcount = () => {
       alert(count+1)
       setCount("using usestate: ",count+1)
    }
    let refCount=()=>{
        ref.current=ref.current+1;
        alert(`using useref ${ref.current}`)
    }

    return (
        <>
            <h2>Hello</h2>
            <button onClick={funcount}>Click me</button>
            <button onClick={refCount}> clear here two</button>
        </>
    );
}

export default UseRef;
