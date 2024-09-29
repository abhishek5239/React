import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Component/Counter'
import UserContextProvider from './ContextProvider/ContextProvider'
function App() {
 

  return (
   <>
   <UserContextProvider>


<Counter/>

   </UserContextProvider>
   
   </>
  )
}

export default App
