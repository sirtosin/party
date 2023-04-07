import React from 'react'
import { PolicyCard } from './PolicyCard';
import { BsPatchCheck } from "react-icons/bs";
import {BiBookBookmark} from 'react-icons/bi'
import {GiHealthNormal} from 'react-icons/gi'
import {IoIosPeople} from 'react-icons/io'

export const Policies = () => {
  return (
    <div className="flex items-center flex-col space-y-5 my-10 justify-center">
      <h2 className="text-md border-b-2 border-gray-700  font-semibold">Policies</h2>
      <h1 className="ml-10 lg:ml-0 text-xl lg:text-3xl font-semibold">
        How we can build a better country together!
      </h1>
      <div className="flex items-center justify-center flex-wrap">
        <PolicyCard title="economy" icon={<BsPatchCheck />} />
        <PolicyCard title="education" icon={<BiBookBookmark />} />
        <PolicyCard title="health care" icon={<GiHealthNormal />} />
        <PolicyCard title="People" icon={<IoIosPeople />} />
      </div>
    </div>
  );
}
