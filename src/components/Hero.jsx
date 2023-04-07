import React from "react";
import { bg } from "../asset";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <div>
      <img className="w-full md:object-cover  md:h-[500px]" src={bg} alt="" />
      <div className="absolute top-36 md:top-1/2 lg:top-1/3 flex md:items-center md:justify-center flex-col space-y-3 md:space-y-5 ml-12 md:ml-20 lg:ml-52 xl:left-1/4 2xl:top-56 2xl:left-[33%]">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 ">
          Leadership. Experience. Values.
        </h2>
        <p className="md:tracking-wide uppercase text-gray-900">
          NEW LEADERS FOR NEW GENERATION
        </p>
        <Button
          color="gray"
          onClick={() => console.log("btn")}
          title="Become a member"
        />
      </div>
    </div>
  );
};
