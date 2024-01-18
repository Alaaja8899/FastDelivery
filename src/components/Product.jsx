import React, { useEffect } from 'react'
import { useProdContext } from '../Context/ProductsContext'

function Product(props) {
    const {img , price , name , id }=props.data
    
    const {addToCart , removeFromCart ,  cartItems}=useProdContext()
    
    return(
        <div className='flex md:w-fit w-[160px] h-[290px] flex-col border-2  items-center justify-center'>
            <div className="img-container md:w-[200px] w-[120px] overflow-hidden p-3">
            <img src={img} className='h-full w-full' />
            </div>
            <h2 className='font-bold text-[#333]'>{name}</h2>
            <p className=' text-gray-500'>${price}</p>
            {cartItems[id] >0 ? <ProductAmount id={id} />:<button className='bg-black px-3 py-2 text-white w-full rounded ' onClick={()=> addToCart(id)}>AddToCart</button>}
        </div>
    )
}



const ProductAmount = (props)=>{
    const {addToCart , removeFromCart ,  cartItems}=useProdContext()
    return(
        <div className='flex justify-between w-full items-center gap-3'>
            <button className='bg-black px-3 py-2 text-white w-full rounded' onClick={()=> addToCart(props.id)}>+</button>
            <h2 className='font-bold'>({cartItems[props.id]})</h2>
            <button className='bg-black px-3 py-2 text-white w-full rounded' onClick={()=> removeFromCart(props.id)}>-</button>
        </div>
    )

}

export default Product
