import React from 'react'

export default function page({params}) {


  return (
    <div>
    <div className="border rounded-lg p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">danim jeans</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">All Details</button>
      </div>
      <div className="my-4">
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">00000</span>
        <span className="ml-2 text-sm text-gray-500">23% guaranteed discount</span>
      </div>
      <div className="my-4 flex justify-between items-center">
        <div>
          <p>No Exit Fees</p>
          <p>Monthly Billing Option</p>
          <p>No extra fees for credit card payments</p>
        </div>
        <div>
          <p className="text-lg font-bold">$23/month</p>
          <p className="text-sm text-gray-500">$2023/year</p>
        </div>
      </div>
      <button className="bg-yellow-500 text-white w-full py-2 rounded">Switch & Save Today</button>
    </div>
  


    </div>
  )
}
