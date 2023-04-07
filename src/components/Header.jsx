import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "./Button";
import { logo } from "../asset";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);
  return (
    <>
      {/* desktop */}
      <header className="sticky z-50 top-0 left-0 hidden lg:flex items-center px-10 bg-gray-50 h-[80px] w-full  font-semibold capitalize justify-between">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="flex items-center space-x-10 ">
          <Link to="/about">
            <p className="hover:text-gray-500 cursor-pointer">about</p>{" "}
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
      <div className="flex items-center px-10 bg-gray-50 h-[80px] w-full  font-semibold capitalize justify-between lg:hidden sticky z-50 top-0 left-0">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        {toggle ? (
          <GrFormClose
            onClick={handleToggle}
            className="text-gray-500 font-bold cursor-pointer text-2xl"
          />
        ) : (
          <AiOutlineMenu
            onClick={handleToggle}
            className="text-gray-500 font-bold cursor-pointer text-2xl"
          />
        )}
        {toggle && (
          <header className="flex absolute top-16 bg-gray-900 text-white p-10 space-y-5 rounded-lg right-10 flex-col justify-center items-center ">
            <Link to="/about">
              <p className="hover:text-gray-500 cursor-pointer">about</p>{" "}
            </Link>
            <Link to="/membership">
              <p className="hover:text-gray-500 cursor-pointer">
                Become a memeber
              </p>{" "}
            </Link>
          </header>
        )}
      </div>
    </>
  );
};
