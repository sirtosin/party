import React from "react";
import { hero } from "../asset";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <div>
      <img className="w-full object-cover h-[500px]" src={hero} alt="" />
      <div className="absolute top-1/2 flex items-center justify-center flex-col space-y-5 left-1/4">
        <h2 className="text-xl lg:text-4xl font-bold text-white">
          Leadership. Experience. Values.
        </h2>
        <p className="tracking-wide uppercase  text-white">
          NEW LEADERS FOR NEW GENERATION
        </p>
        <Button
          color="#dfdfdf"
          onClick={() => console.log("btn")}
          title="Become a member"
        />
      </div>
    </div>
  );
};
