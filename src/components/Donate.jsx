import React from "react";
import { Button } from "./Button";

export const Donate = () => {
  return (
    <div className="flex items-center space-x-8 bg-gray-800 justify-center h-[200px] p-4 ">
      <h3 className="text-xl lg:text-4xl text-white font-black">
        Would you like to become one of our donors?
      </h3>
      <Button onClick={() => console.log("btn")} title="donate" color="gray" />
    </div>
  );
};
