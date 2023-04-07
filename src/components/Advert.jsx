import React from 'react'
import { guy } from '../asset';
export const Advert = () => {
  return (
    <div className='flex items-center justify-between bg-gray-800 w-full h-max px-10'>
      <div className=''>
        <img src={guy} className='flex-1' alt="" />
      </div>
      <div className='w-1/2 flex flex-col space-y-5'>
        <h2 className='text-xl lg:text-4xl text-white font-black'>" Somewhere inside all of us is the power to change the world.</h2>
        <small className='text-white'>
          <p className='text-xl '>John Maisner </p>
          <h5>CHAIRMAN</h5>
        </small>
      </div>
    </div>
  );
}
