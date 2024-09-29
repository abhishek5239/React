import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import TodoStore from './Store/TodoStore.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={TodoStore}>
<App />

</Provider>  

)
