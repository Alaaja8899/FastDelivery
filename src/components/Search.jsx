import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { useProdContext } from '../Context/ProductsContext';
function Search() {
    const [searchText , setSearchText] = useState('');
    const {setSearch} = useProdContext()
    const passSearchValue=()=>{
      
      setSearch(searchText)

    }

    useEffect(()=>{
      passSearchValue()
    } , [searchText])

  return (
    <form className='flex container mx-auto mt-20 md:p-6 p-2 ' onSubmit={(e)=> e.preventDefault()} >
        <input onChange={(e)=> setSearchText(e.target.value)} value={searchText} type="text" placeholder='Search product' className=' border-2 border-gray-300 focus:border-gray-400 ease-linear outline-none w-full px-3 py-2 rounded'  />
        <button className=' bg-black px-3 py-2 rounded w-[11rem] text-white flex items-center gap-3'>
        <IoSearchSharp />
        Search
        </button>
    </form>
  )
}

export default Search
