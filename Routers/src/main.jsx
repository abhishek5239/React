import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{RouterProvider,createBrowserRouter}from 'react-router-dom'
import Home from './Route/Home.jsx'
import About from './Route/About.jsx'
import Contactus from './Route/Contactus.jsx'
import Navbar from './Route/Navbar.jsx'
import Team from './Route/AboutUs/Team.jsx'
import Organization from './Route/AboutUs/Organization.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>
  },
  {
path:'/About',
element:<About/>,
children:[
  {
    path:"",
    element:<Team/>
  },
  {
    path:"Organization",
    element:<Organization/>
  }

]

  },
  {
    path:'/Contact',
    element:<Contactus/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
