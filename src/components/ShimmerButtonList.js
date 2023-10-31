import React from 'react'

const ShimmerButtonList = () => {
  return (
    <div className="flex w-[87.5%] bg-white right-0 fixed -z-10">
      <div className="ml-1 flex whitespace-nowrap overflow-x-hidden scroll-container">
        {[...Array(15)].map((button, index) => (
          <div
            className="w-56 h-9 p-3 bg-gray-200 m-2 cursor-pointer font-medium"
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ShimmerButtonList
