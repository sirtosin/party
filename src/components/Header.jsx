import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "./Button";
import { logo } from "../asset";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);
    useEffect(() => window.scrollTo(0, 0), [window]);
  return (
    <>
      {/* desktop */}
      <header className=" shadow sticky z-50 top-0 left-0 hidden lg:flex items-center px-10 bg-gray-50 h-[80px] w-full  font-semibold capitalize justify-between">
        <Link to="/">
          <img className="h-7" src={logo} alt="" />
        </Link>
        <div className="flex items-center space-x-10 ">
        <Link to="/">
            <p className="cursor-pointer hover:text-gray-500">Home</p>{" "}
          </Link>
          <Link to="/about">
            <p className="cursor-pointer hover:text-gray-500">About Us</p>{" "}
          </Link>
          <Link to="/membership">
            <Button
              onClick={() => console.log("btn")}
              title=" Become a member
"
              color="gray"
            />
          </Link>
        </div>
      </header>
      {/* mobile */}
      <div className="shadow flex items-center px-10 bg-gray-50 h-[80px] w-full  font-semibold capitalize justify-between lg:hidden sticky z-50 top-0 left-0">
        <Link to="/">
          <img src={logo} className="h-7" alt="" />
        </Link>
        {toggle ? (
          <GrFormClose
            onClick={handleToggle}
            className="text-2xl font-bold text-gray-500 cursor-pointer"
          />
        ) : (
          <AiOutlineMenu
            onClick={handleToggle}
            className="text-2xl font-bold text-gray-500 cursor-pointer"
          />
        )}
        {toggle && (
          <header className="absolute flex flex-col items-center justify-center p-10 space-y-5 text-white bg-gray-900 rounded-lg top-16 right-10 ">
            <Link to="/about">
              <p className="cursor-pointer hover:text-gray-500">our team</p>{" "}
            </Link>
            <Link to="/membership">
              <p className="cursor-pointer hover:text-gray-500">
                Become a member
              </p>{" "}
            </Link>
          </header>
        )}
      </div>
    </>
  );
};
