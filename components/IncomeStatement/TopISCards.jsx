import React from 'react'

const TopISCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg shadow'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$31,81.65</p>
                <p className='text-gray-600'>Income</p>
            </div>
            <p className='bg-red-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-red-700 text-lg'>-5%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg shadow'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$17,122.58</p>
                <p className='text-gray-600'>Expenses</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>-11%</span>
            </p>
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg shadow'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$13,059.07</p>
                <p className='text-gray-600'>Cash Flow</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+6%</span>
            </p>
        </div>
    </div>
  )
}

export default TopISCards;