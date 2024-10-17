import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import AddProduct from './Components/addProduct'
import ShopProduct from './Components/shopProduct'
import ProductInfo from './Components/ProductInfo'
import ShopCart from './Components/ShopCart'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='addProduct' element={<AddProduct/>}/>
      <Route  path='shopProduct' element={<ShopProduct/>}>
      </Route>
      <Route path='shopProduct/:productInfo' element={<ProductInfo/>}/>
      <Route path='ShopCart' element={<ShopCart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
