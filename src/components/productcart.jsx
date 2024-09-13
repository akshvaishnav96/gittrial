import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-6 shadow-lg bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{product.title}</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">All Details</button>
      </div>
      <div className="mb-4">
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">{product.inclusions}</span>
        <span className="ml-2 text-sm text-gray-500">{product.discount}</span>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
        <div>
          <ul className="list-disc ml-5">
            {product.features.map((feature, index) => (
              <li key={index} className="text-gray-700">{feature}</li>
            ))}
          </ul>
        </div>
        <div className="text-right mt-4 lg:mt-0">
          <p className="text-2xl font-bold">${product.estimatedCost.month} <span className="text-sm font-normal">/month</span></p>
          <p className="text-sm text-gray-500">${product.estimatedCost.year} /year</p>
          <p className="text-sm text-green-600 mt-2">{product.savings}</p>
        </div>
      </div>
      <button className="bg-yellow-500 text-white w-full py-3 rounded-lg">Switch & Save Today</button>
    </div>
  );
};

export default ProductCard;
