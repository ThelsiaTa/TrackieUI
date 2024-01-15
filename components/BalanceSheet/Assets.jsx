import React from 'react';
import { assetsData } from '../../data/assets';
import { GiReceiveMoney } from 'react-icons/gi';

const Assets = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll shadow'>
      <h1>Assets</h1>
      <ul>
      {assetsData.map((asset) => (
            <li
                key={asset.id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
            >
                <div className='bg-green-400 rounded-lg p-3'>
                    <GiReceiveMoney className='text-yellow-900 text-2xl' />
                </div>
                <div className='pl-4'>
                <p className='text-gray-800 font-bold'>{asset.assetType}</p>
                </div>
                <p className='lg:flex md:hidden absolute right-6 text-sm'>${asset.total}</p>
            </li>
        ))}
    
      </ul>
    </div>
  );
};

export default Assets;