import React from 'react';
import { expensesData } from '../../data/expenses';
import { GiTakeMyMoney } from 'react-icons/gi';

const Expenses = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll shadow'>
      <h1>Expenses</h1>
      <ul>
      {expensesData.map((expense) => (
            <li
            key={expense.id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
            >
                <div className='bg-red-400 rounded-lg p-3'>
                    <GiTakeMyMoney className='text-yellow-900 text-2xl' />
                </div>
                <div className='pl-4'>
                <p className='text-gray-800 font-bold'>{expense.expenseType}</p>
                </div>
                <p className='lg:flex md:hidden absolute right-6 text-sm'>${expense.total}</p>
            </li>
        ))}

      </ul>
    </div>
  );
};

export default Expenses;