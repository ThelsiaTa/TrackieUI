import React from 'react';

const TopCards = ({ data }) => {
    const topThreeProducts = data.products.slice(0, 3);    
  return (
    <div className='flex flex-col md:flex-row gap-4 p-4'>
      {topThreeProducts.map((product, index) => (
        <div key={index} className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg shadow'>
          <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>{product.price}</p>
            <p className='text-gray-600'>{product.title}</p>
          </div>
          <p className={`bg-green-200 flex justify-center items-center p-2 rounded-lg`}>
            <span className={`text-green-700 text-lg`}>{product.rating}%</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default TopCards;
