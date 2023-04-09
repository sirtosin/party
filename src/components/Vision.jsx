import React from 'react'
import { visionData } from '../constants';
import {HiBadgeCheck} from 'react-icons/hi'

export const Vision = () => {
  return (
    <div className='mx-10 my-5'>
      <h2 className='capitalize text-2xl lg:text-4xl font-black text-center'>
        party vision
      </h2>
      <p className="my-3">
        The Labour Party will demonstrate that it is still possible to form and
        conduct the affairs of a political party on identifiable ideology, i.e.
        progressive issue- based politics.
      </p>
      <p className="my-3">
        Therefore, we boldly affirm that the Party’s principles, objectives and
        character shall be unreservedly rooted in the ideology Social Democracy.
        Consequently, the vision of the Labour Party is to urgently transform
        all facets of the Nigerian nation with a view to:
      </p>
      {visionData.map((info) => 
      <p key={info} className='my-5 flex items-center space-x-4'>
<HiBadgeCheck className='text-green-500 mr-3'/>
        {info}
      </p>
      )}
    </div>
  );
}
