import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductsContextProvider from './Context/ProductsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsContextProvider>
    
    <App />
    
    </ProductsContextProvider>
  
  </React.StrictMode>,
)
