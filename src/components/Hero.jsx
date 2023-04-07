import React from "react";
import { hero1 } from "../asset";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <div>
      <img className="w-full md:object-cover  md:h-[500px]" src={hero1} alt="" />
      <div className="absolute top-40 sm:top-1/2 ml-10 sm:ml-32 flex flex-col space-y-4 ">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Leadership. Experience. Values.
        </h2>
        <p className="md:tracking-wide uppercase text-white">
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
