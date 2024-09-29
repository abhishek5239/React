
// ! 1. This is the very first step where your app should know the store 
import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from './App/store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  // ! 2. here you have to wrap the top level component with provider and also assign the store to it.
  <React.StrictMode>
    
    <Provider store={store}>
    <App />
    </Provider>
   
  </React.StrictMode>,
)
