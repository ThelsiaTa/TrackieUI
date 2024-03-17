import React from 'react';

const TopCards = ({ data }) => {

  return (
    <div className='flex flex-col md:flex-row gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg shadow'>
          <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>{data["Soil Moisture %"]}</p>
            <p className='text-gray-600'>Soil Moist</p>
          </div>
          <p className={`bg-green-200 flex justify-center items-center p-2 rounded-lg`}>
            <span className={`text-green-700 text-lg`}>+10%</span>
          </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg shadow'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>{data["Temperature"]}</p>
          <p className='text-gray-600'>Temperature</p>
        </div>
        <p className={`bg-green-200 flex justify-center items-center p-2 rounded-lg`}>
          <span className={`text-green-700 text-lg`}>+20%</span>
        </p>
      </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg shadow'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>{data["Sun Intensity"]}</p>
          <p className='text-gray-600'>Sun Intensity</p>
        </div>
        <p className={`bg-green-200 flex justify-center items-center p-2 rounded-lg`}>
          <span className={`text-green-700 text-lg`}>+30%</span>
        </p>
      </div>              
    </div>
  );
};

export default TopCards;
