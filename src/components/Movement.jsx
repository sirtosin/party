import React from "react";
import { Button } from "./Button";
import { MovementCard } from "./MovementCard";

export const Movement = () => {
  return (
    <div className="flex my-8 px-6 justify-around items-center">
      <div className="w-1/2 flex flex-col space-y-4">
        <h2 className="text-xl lg:text-4xl font-black">
          How we can build a better country{" "}
          <span className="text-red-500">together! </span>
        </h2>
        <p className="text-justify">
          Elections make a fundamental contribution to democratic governance.
          Because direct democracy – a form of government in which political
          decisions are made directly by the entire body of qualified citizens –
          is impractical in most modern societies, democratic government must be
          conducted through representatives.
        </p>
        <Button
          onClick={() => console.log("btn")}
          title="voters staus check"
          color="gray"
        />
      </div>
      <div className="w-[45%]">
        <MovementCard />
      </div>
    </div>
  );
};
