import React, { createContext, useContext, useEffect, useState } from 'react'
import { newData } from '../dummyData';

const prodContext = createContext();

function defultCart(products) {
    let cart = {};
    products.map(prod => {
        cart[prod.id] = 0;
    });
    return cart;
}
export default function ProductsContextProvider({children}) {
    const [cartItems , setCartItems] = useState(defultCart(newData))

    const [selectedCategory , setSelectedCategory] = useState("All")

    const [amount , setAmount] = useState(0)
    
    const [search , setSearch] = useState('')

    const [CartMode , setCartMode] = useState(false)

    const [total , setTotal]= useState(0)

    

    const getTotalPrice = () => {
      let count = 0;
    
      newData.map((prod) => {
        if (cartItems[prod.id] > 0) {
          count += cartItems[prod.id] * prod.price; // Use prod.price instead of prod
        }
        return null; // Ensure a non-null value is returned to satisfy map
      });
    
      setTotal(count);
    };
        

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev , [itemId]:prev[itemId]+1}))
        GetAmount()
        getTotalPrice()
  }
  const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev , [itemId]:prev[itemId]-1}))
        GetAmount()
        getTotalPrice()
  }

  const removeItem=(itemId)=>{
    setCartItems((prev)=>({...prev , [itemId]:0}))
    GetAmount()
    getTotalPrice()
  }
    const reset=()=>{
      setCartItems(defultCart(newData))
    }

  const GetAmount = () => {
    let count = 0;
  
    for (let amount in cartItems) {
      if (cartItems.hasOwnProperty(amount) && cartItems[amount] > 0) {
        count++;
      }
    }
  
    setAmount(count);
  };
  

    useEffect(()=>{
            GetAmount()
            getTotalPrice()
    } , [cartItems])
    const contextValue = {cartItems ,  removeFromCart, addToCart , selectedCategory , setSelectedCategory , amount , search , setSearch , CartMode , setCartMode , removeItem , total , reset}
    return (
    <prodContext.Provider value={contextValue}>
        {children}
    </prodContext.Provider>
  )
}


export const useProdContext=()=>{
    return useContext(prodContext)
}

