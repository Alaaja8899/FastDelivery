import React, { useEffect, useRef, useState } from 'react'
import { useProdContext } from '../Context/ProductsContext'
import { newData } from '../dummyData';

function CartModelBox() {

  const handleDialUSSD = (usd) => {
    const ussdCode = `*712*611430930* ${usd}#`;
    window.location.href = `tel:${encodeURIComponent(ussdCode)}`;
  };
    const {cartItems , CartMode , setCartMode , total , reset} = useProdContext();
    const cartView = useRef(null)

    let products = newData.filter(prod => cartItems[prod.id] >0)
    useEffect(()=>{
          if (CartMode === true){
            cartView.current.classList.remove('hidden')
          } 
          else{
            cartView.current.classList.add('hidden')
          }     
    } , [CartMode])
    
  return (
    <div  className= ' bg-[rgb(0,0,0,0.4)] w-full h-screen flex justify-end hidden fixed' ref={cartView}>

      <div className="sideBar md:w-1/3 w-9/12 h-full bg-white border-2 border-gray-300 overflow-y-auto pb-[200px]">

        <button onClick={()=> setCartMode(false)}>Close x</button>

        {
          products.map(prod => <CartProduct data={prod} />)
        }

        <div className="calculation fixed bottom-0 p-3 justify-between w-full bg-white">
          <h2>TotalPrice : $ {total}</h2>
          <div className="final flex  gap-3 w-full">
            <button onClick={()=> handleDialUSSD(total)} className='bg-black text-white rounded px-2 py-2 '>
              Pay$$$
            </button>
            <button onClick={()=> reset()} className='bg-black text-white rounded px-2 py-2 '>
              ResetAll
            </button>
          </div>
        </div>  
      </div>

    </div>
  )
}


const CartProduct=(props)=>{
  const {img , price , name , id }=props.data
    
  const {addToCart , removeFromCart ,  cartItems ,removeItem}=useProdContext()

  return(
    <div className='flex border-2 gap-2 border-grey-300 items-center justify-between p-3 rounded flex-col'>
      <div className="img-container w-[80px] h-[80]">
      <img src={img}  className='h-full w-fit' />
      </div>
      <h2>{name}</h2>

      <div className="amounting flex  justify-center items-center gap-2">
        <button onClick={()=> addToCart(id)} className='rounded bg-black text-white px-3'>+</button>
        <h2 className='font-bold'>({cartItems[id]})</h2>
        <button onClick={()=> removeFromCart(id)} className='rounded bg-black text-white px-3'>-</button>
      </div>
      <button onClick={()=> removeItem(id)} className='rounded bg-black text-white px-3'>Remove (-)</button>

    </div>
  )
}


export default CartModelBox
