import React from 'react'
import { Chairman, guy } from '../asset';
export const Advert = () => {
  return (
    <div className="flex items-center space-x-4 lg:justify-between bg-gray-800 w-full h-max px-2 lg:px-10 2xl:justify-around">
      <div className="">
        <img src={Chairman} className="flex-1 lg:w-3/4" alt="" />
      </div>
      <div className=" flex flex-col space-y-5">
        <h2 className="text-xl lg:text-4xl text-white font-black">
          " Somewhere inside all of us is the power to change the world.
        </h2>
        <small className="text-white">
          <p className="lg:text-xl ">Pastor Dayo Ekong </p>
          <h5 className="text-xs">CHAIRMAN</h5>
        </small>
      </div>
    </div>
  );
}
