import React from "react";
import { hero } from "../asset";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <div>
      <img className="w-full md:object-cover  md:h-[500px]" src={hero} alt="" />
      <div className="absolute top-36 md:top-1/2 lg:top-1/3 flex items-center justify-center flex-col space-y-3 md:space-y-5 ml-12 md:ml-20 lg:ml-52 xl:left-1/4 2xl:top-56 2xl:left-[33%]">
        <h2 className="text-2xl md:text-4xl font-bold text-red-500 ">
          Leadership. Experience. Values.
        </h2>
        <p className="md:tracking-wide uppercase text-red-900">
          NEW LEADERS FOR NEW GENERATION
        </p>
        <Button
          color="brown"
          onClick={() => console.log("btn")}
          title="Become a member"
        />
      </div>
    </div>
  );
};
