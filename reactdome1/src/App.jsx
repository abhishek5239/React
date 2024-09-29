import './App.css'
import Hello from './hello'
import { useState } from 'react'
import { TestProps,TestProps1 } from './react_files/testProps'

function App() {
  let a=21;
  
let [count,setcount]=useState(10)
function incrCount(){
  setcount((precount)=>precount+1)
}
  return (
    <>
    <Hello/>
    <button onClick={incrCount}> increment {count}</button>
    <TestProps name="Abhishek" age={a}/>


    </>
  )
}

export default App
