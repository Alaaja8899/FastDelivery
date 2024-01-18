import React, { useEffect, useState } from 'react';
import Product from './Product';
import { newData } from '../dummyData';
import { useProdContext } from '../Context/ProductsContext';

function Products() {
  const { selectedCategory , search } = useProdContext();
  const [products, setProducts] = useState(newData); // Use state hook to manage products

  useEffect(() => {

    if (selectedCategory !== "All") {
      const filteredProducts = newData.filter((prod) => {
        const categoryMatch = prod.category.toLowerCase().includes(selectedCategory.toLowerCase());
        const searchMatch = prod.name.toLowerCase().includes(search.toLowerCase()); // Assuming 'name' is the property to search for
      
        return categoryMatch && searchMatch;
      });
      
      setProducts(filteredProducts); // Update products state with filtered products
    } else {
      setProducts(newData); // Reset to all products if the selected category is "All"
    }

  }, [selectedCategory , search]);
    
  useEffect(()=>{
    if (selectedCategory === "All"){
      const filteredProducts = newData.filter((prod) => {
        const searchMatch = prod.name.toLowerCase().includes(search.toLowerCase()) || prod.category.toLowerCase().includes(search.toLowerCase()) // Assuming 'name' is the property to search for
      
        return searchMatch;
      });
      
      setProducts(filteredProducts); // Update products state with filtered products
    }

  } , [search])
  return (
    <div className='flex flex-wrap gap-4 md:p-6 sm:p-3 justify-around'>
      {products && products.map((prod, key) => <Product data={prod} key={key} />)}
    </div>
  );
}

export default Products;
