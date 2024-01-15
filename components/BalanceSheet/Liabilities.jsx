import React from 'react';
import { liabilitiesData } from '../../data/liabilities';
import { GiTakeMyMoney } from 'react-icons/gi';

const Liabilities = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll shadow'>
      <h1>Liabilities</h1>
      <ul>
      {liabilitiesData.map((liability) => (
            <li
            key={liability.id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
            >
                <div className='bg-red-400 rounded-lg p-3'>
                    <GiTakeMyMoney className='text-yellow-900 text-2xl' />
                </div>
                <div className='pl-4'>
                <p className='text-gray-800 font-bold'>{liability.liabilityType}</p>
                </div>
                <p className='lg:flex md:hidden absolute right-6 text-sm'>${liability.total}</p>
            </li>
        ))}

      </ul>
    </div>
  );
};

export default Liabilities;