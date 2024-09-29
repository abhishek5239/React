import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import {ShoppingStore} from './Store/ShoppingStore.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ListingProducts from './Component/listingProducts.jsx'
import BillingProduct from './Component/billingproduct.jsx'
import AddProduct from './Component/addProduct.jsx'
const router=createBrowserRouter([
    {
      path:"/",
      element:<ListingProducts/>

    },
    {
      path:"/billing",
      element:<BillingProduct/>
    },
    {
      path:"/addProduct",
      element:<AddProduct/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={ShoppingStore}>
    <RouterProvider router={router}/>
    </Provider>
    
 
)
