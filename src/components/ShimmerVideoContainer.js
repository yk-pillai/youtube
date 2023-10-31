import React from 'react'

const ShimmerVideoContainer = () => {
  return (
    <div className="flex flex-wrap mt-14">
      {[...Array(15)].map((value, index) => {
        return (
          <div className="w-[296px] h-[286px] m-3" key={index}>
            <div className="cursor-pointer bg-slate-200 w-[296px] h-[166px]"></div>
            <div className="bg-slate-200 w-[296px] h-16 mt-2"></div>
            <div></div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
}

export default ShimmerVideoContainer
