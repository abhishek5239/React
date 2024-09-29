import { useState } from 'react'
import userContext from '../Context/UserContext'

const UserContextProvider=({children})=>{
const [counter,counterFun]=useState(0)


    return (
        <userContext.Provider value={{counter,counterFun}}>
        {children}
        </ userContext.Provider>
    )
}

export default UserContextProvider