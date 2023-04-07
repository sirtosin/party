import React from "react";

export const PolicyCard = ({ title, icon }) => {
  return (
    <div className="flex items-center flex-col bg-white hover:scale-105 ease-in-out duration-150 m-4 transition-all justify-center space-y-5 shadow-sm rounded-lg p-3 w-[200px] h-[200px]">
      <p className="text-4xl text-gray-500">{icon}</p>
      <p className="uppercase font-semibold text-sm lg:text-xl text-gray-500">{title}</p>
    </div>
  );
};
