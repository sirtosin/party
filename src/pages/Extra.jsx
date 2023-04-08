import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { thanks } from "../asset";

export const Extra = () => {
  const member = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center flex-col ">
        <img src={thanks} className="w-3/4 md:w-1/4 rounded my-8" alt="" />
        <h2 className=" text-center mx-4 text-2xl font-semibold">
        Welcome to the winning team. 💯 🚀
        </h2>
        <article  className="shadow-xl rounded-lg py-4 bg-white flex flex-col w-[90%] sm:w-2/3 px-8 sm:px-20 my-8">
 <h2 className="text-center font-semibold text-gray-500 capitalize text-xl">your details are below</h2>
        <div className="flex items-center justify-between w-full m-3">
          <h2 className="font-bold capitalize ">name: </h2>
          <p className="text-gray-400 font-semibold text-sm">{member.name}</p>
        </div>
        <div className="flex items-center justify-between w-full m-3">
          <h2 className="font-bold capitalize ">phone number: </h2>
          <p className="text-gray-400 font-semibold text-sm">{member.phone}</p>
        </div>
        <div className="flex items-center justify-between w-full m-3">
          <h2 className="font-bold capitalize ">address: </h2>
          <p className="text-gray-400 font-semibold text-sm">{member.address} </p>
        </div>
        <div className="flex items-center justify-between w-full m-3">
          <h2 className="font-bold capitalize ">LGA: </h2>
          <p className="text-gray-400 font-semibold text-sm">{member.LGA}</p>
        </div>
        <div className="flex items-center justify-between w-full m-3">
          <h2 className="font-bold capitalize ">ward: </h2>
          <p className="text-gray-400 font-semibold text-sm">{member.ward.slice(0,20)}</p>
        </div>
        <div className="flex items-center justify-between w-full m-3">
          <h2 className="font-bold capitalize ">sex: </h2>
          <p className="text-gray-400 font-semibold text-sm">{member.sex}</p>
        </div>
        </article>

      </div>
      <Footer />
    </div>
  );
};
