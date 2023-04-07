import React from 'react'
import { guy } from '../asset';
export const Advert = () => {
  return (
    <div className="flex items-center space-x-4 lg:justify-between bg-gray-800 w-full h-max px-2 lg:px-10 2xl:justify-around">
      <div className="">
        <img
          src="https://images.pexels.com/photos/2379429/pexels-photo-2379429.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="flex-1"
          alt=""
        />
      </div>
      <div className="w-1/2 flex flex-col space-y-5">
        <h2 className="text-xl lg:text-4xl text-white font-black">
          " Somewhere inside all of us is the power to change the world.
        </h2>
        <small className="text-white">
          <p className="lg:text-xl ">John Maisner </p>
          <h5 className="text-xs">CHAIRMAN</h5>
        </small>
      </div>
    </div>
  );
}
