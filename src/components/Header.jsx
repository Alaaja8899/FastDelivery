import React, { useEffect, useState } from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { useProdContext } from '../Context/ProductsContext';
import { newData } from '../dummyData';
function Header() {
      const {amount ,CartMode, setCartMode} =  useProdContext()
      
      const handleMode=()=>{
        if (CartMode === true){
          setCartMode(false)
        }
        else
        setCartMode(true)
      }
  return (
    <div className=' md:p-6 p-4 flex items-center justify-between fixed bg-white shadow top-0 right-0 left-0 h-[83px]'>
        <a href="#" className="brand flex gap-4 md:text-3xl text-2xl font-bold">
        <FaTruckFast />
        <span className='text-gray-400'>
        Fast
        <span className='text-black'>Delivery</span>
        </span>
        </a>



        <span className="cartItmeBtn cursor-pointer relative" onClick={handleMode}>
        <IoCart size={32}/>
        <span className=' absolute top-[-7px] right-[-7px] bg-white rounded-full w-[20px] h-[20px] border-2 border-gray-300 flex items-center justify-center text-center'>
            {amount}
        </span>
        </span>



    </div>
  )
}

export default Header
