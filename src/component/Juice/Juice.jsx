import React, { useState } from 'react';
import { products } from '../mockData.js';
import ProductCard from '../ProductCard.jsx';
import Search from '../Search.jsx';
import ThemeBtn from '../ThemeBtn.jsx';
import NoproductPage from '../../component/NoproductPage.jsx';



function Juice() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm.toLowerCase());
  };

  const filteredProducts = products.filter(item => {
    if (searchTerm === "") {
      return item.category === "Bikes";
    } else {
      return item.category === "Bikes" && item.productName.toLowerCase().includes(searchTerm);
    }
  });

  console.log(filteredProducts)
  

  return (
    <>
    <ThemeBtn/>
      <div className='flex flex-col justify-center items-center gap-10 py-10 dark:bg-black bg-[#f8f6f3]  pt-24'>
        <div className='flex flex-wrap gap-10 justify-around items-center w-full'>
          <p className='text-4xl font-medium text-[#8bc34a] font-serif'>Bikes</p>
          <Search onSearch={handleSearch} />
        </div>
        <div className='grid place-items-center gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  '>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((bike, index) => (
              <ProductCard
                productImage={bike.productImage}
                category={bike.category}
                productName={bike.productName}
                price={bike.price}
                key={index}
              />
            ))
          ) : (
           
            <NoproductPage/>
         
          )}
        </div>
      </div>
    </>
  );
}

export default Juice;
