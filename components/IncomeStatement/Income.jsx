import React from 'react';
import { incomeData } from '../../data/income';
import { GiReceiveMoney } from 'react-icons/gi';

const Income = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll shadow'>
      <h1>Income</h1>
      <ul>
      {incomeData.map((income) => (
            <li
                key={income.id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
            >
                <div className='bg-green-400 rounded-lg p-3'>
                    <GiReceiveMoney className='text-yellow-900 text-2xl' />
                </div>
                <div className='pl-4'>
                <p className='text-gray-800 font-bold'>{income.incomeType}</p>
                </div>
                <p className='lg:flex md:hidden absolute right-6 text-sm'>${income.total}</p>
            </li>
        ))}
    
      </ul>
    </div>
  );
};

export default Income;