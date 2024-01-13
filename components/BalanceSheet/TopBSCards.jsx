import React from 'react'

const TopBSCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg shadow'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'></p>
                <p className='text-gray-600'>Total Assets</p>
            </div>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg shadow'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'></p>
                <p className='text-gray-600'>Total Liabilities</p>
            </div>
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg shadow'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'></p>
                {/* Generate some date for the above */}
                {/* networth = assets - liabilities */}
                <p className='text-gray-600'>Net Worth</p>
            </div>
        </div>
    </div>
  )
}

export default TopBSCards;