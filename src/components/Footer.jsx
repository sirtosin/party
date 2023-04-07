import React from 'react'
import { logo } from '../asset'
import { Link } from 'react-router-dom';

export const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <footer className="w-full bg-black/20 p-5 sm:p-10 bottom-0 flex lg:items-center justify-around ">
      <Link to="/">
        <img src={logo} className='sm:h-7 mt-5 sm:mt-0' alt="" />
      </Link>

      <div className="flex  lg:items-center flex-col lg:flex-row lg:justify-between">
        <div className="m-3 flex space-y-4 flex-col pl-10">
          <h2 className="text-sm lg:text-xl border-b-2 border-gray-50 w-max ">
            contact
          </h2>
          <div className="flex space-y-4 flex-col">
            <p className="hover:border-b-2 w-max duration-150 ease-in-out transition-all cursor-pointer text-xs lg:text-lg capitalize  hover:animate-bounce border-gray-300">
              {" "}
              +234 (0) 8140009000
            </p>
            <p className="hover:border-b-2 w-max duration-150 ease-in-out transition-all cursor-pointer text-xs lg:text-lg capitalize  hover:animate-bounce border-gray-300">
              {" "}
              info@bold-themes.com
            </p>
            <p className="hover:border-b-2 w-max duration-150 ease-in-out transition-all cursor-pointer text-xs lg:text-lg capitalize  hover:animate-bounce border-gray-300">
              665 Street, lagos City, IKD 10065
            </p>
          </div>
        </div>{" "}
        <div className="m-3 flex space-y-4 flex-col pl-10">
          <h2 className="text-sm lg:text-xl border-b-2 border-gray-50 w-max">
            Popular Links
          </h2>
          <div className="flex space-y-4 flex-col">
            <p className="hover:border-b-2 w-max duration-150 ease-in-out transition-all cursor-pointer text-xs lg:text-lg capitalize  hover:animate-bounce border-gray-300">
              {" "}
              home
            </p>
            <p className="hover:border-b-2 w-max duration-150 ease-in-out transition-all cursor-pointer text-xs lg:text-lg capitalize  hover:animate-bounce border-gray-300">
              {" "}
              about
            </p>
            <p className="hover:border-b-2 w-max duration-150 ease-in-out transition-all cursor-pointer text-xs lg:text-lg capitalize  hover:animate-bounce border-gray-300">
              contact
            </p>
          </div>
        </div>{" "}
        <div className="m-3 flex space-y-4 flex-col pl-10">
          <h2 className="text-sm lg:text-xl border-b-2 w-max border-gray-50">
            How Can You Help
          </h2>
          <div className="flex space-y-4 flex-col">
            <p className="hover:border-b-2 w-max duration-150 ease-in-out transition-all cursor-pointer text-xs lg:text-lg capitalize  hover:animate-bounce border-gray-300">
              donation
            </p>
            <p className="hover:border-b-2 w-max duration-150 ease-in-out transition-all cursor-pointer text-xs lg:text-lg capitalize  hover:animate-bounce border-gray-300">
              become a member
            </p>
            <p className="hover:border-b-2 w-max duration-150 ease-in-out transition-all cursor-pointer text-xs lg:text-lg capitalize  hover:animate-bounce border-gray-300">
              events
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
