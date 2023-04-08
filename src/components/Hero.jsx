import React from "react";
import { hero1 } from "../asset";
import { Button } from "./Button";
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/membership');
  }
  return (
    <div>
      <img className="w-full md:object-cover  md:h-[500px]" src={hero1} alt="" />
      <div className="absolute flex flex-col ml-10 space-y-4 top-40 sm:top-1/2 sm:ml-32 ">
        <h2 className="text-2xl font-bold text-white md:text-4xl">
          Leadership. Experience. Values.
        </h2>
        <p className="text-white uppercase md:tracking-wide">
          NEW LEADERS FOR NEW GENERATION
        </p>
        <Button
          color="gray"
          onClick={handleNavigate}
          title="Become a member"
        />
      </div>
    </div>
  );
};
