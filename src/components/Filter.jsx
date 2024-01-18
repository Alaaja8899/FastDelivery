import React, { useState } from 'react';
import { useProdContext } from '../Context/ProductsContext';

function Filter() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { setSelectedCategory} = useProdContext()

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSelectedCategory(category)
  };

  return (
    <div className='container mx-auto md:px-6 p-2 flex items-center justify-center flex-wrap gap-3'>
      <p
        onClick={() => handleCategoryClick('All')}
        className={`px-4 rounded border-2 border-gray-300 cursor-pointer ${
          activeCategory === 'All' ? 'b-black text-white bg-black' : ''
        }`}
      >
        All
      </p>
      <p
        onClick={() => handleCategoryClick('Shoes')}
        className={`px-4 rounded border-2 border-gray-300 cursor-pointer ${
          activeCategory === 'Shoes' ? 'b-black text-white bg-black' : ''
        }`}
      >
        Shoes
      </p>
      <p
        onClick={() => handleCategoryClick('jacket')}
        className={`px-4 rounded border-2 border-gray-300 cursor-pointer ${
          activeCategory === 'jacket' ? 'b-black text-white bg-black' : ''
        }`}
      >
        jacket
      </p>
      <p
        onClick={() => handleCategoryClick('t-shirt')}
        className={`px-4 rounded border-2 border-gray-300 cursor-pointer ${
          activeCategory === 't-shirt' ? 'b-black text-white bg-black' : ''
        }`}
      >
        t-shirt
      </p>
      <p
        onClick={() => handleCategoryClick('shirt')}
        className={`px-4 rounded border-2 border-gray-300 cursor-pointer ${
          activeCategory === 'shirt' ? 'b-black text-white bg-black' : ''
        }`}
      >
        shirt
      </p>
      <p
        onClick={() => handleCategoryClick('hat')}
        className={`px-4 rounded border-2 border-gray-300 cursor-pointer ${
          activeCategory === 'hat' ? 'b-black text-white bg-black' : ''
        }`}
      >
        hat
      </p>
      <p
        onClick={() => handleCategoryClick('Sunglasses')}
        className={`px-4 rounded border-2 border-gray-300 cursor-pointer ${
          activeCategory === 'Sunglasses' ? 'b-black text-white bg-black' : ''
        }`}
      >
        Sunglasses
      </p>
    </div>
  );
}

export default Filter;
