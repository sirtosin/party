import React from 'react'
import { logo } from '../asset'
import { Link } from 'react-router-dom';

export const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <footer className="bottom-0 flex flex-col items-start w-full p-5 bg-black/20 sm:p-10 lg:items-center lg:flex-row lg:justify-around ">
      <Link to="/">
        <img src={logo} className="h-[60px] mt-5 sm:mt-0 lg:w-full" alt="" />
      </Link>

      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="flex flex-col pl-10 m-3 space-y-4">
          <h2 className="text-sm border-b-2 lg:text-xl border-gray-50 w-max ">
            contact
          </h2>
          <div className="flex flex-col space-y-4">
            <p className="text-xs capitalize transition-all duration-150 ease-in-out border-gray-300 cursor-pointer hover:border-b-2 w-max lg:text-lg hover:animate-bounce">
              {" "}
            Phone: <br  className='flex sm:hidden'/> 08074224681 , 08074224880
            </p>
            <p className="text-xs transition-all duration-150 ease-in-out border-gray-300 cursor-pointer hover:border-b-2 w-max lg:text-lg hover:animate-bounce">
              {" "}
              Email: <br className='flex sm:hidden' /> info@labourpartylagos.ng
            </p>
            <p className="text-xs capitalize transition-all duration-150 ease-in-out border-gray-300 cursor-pointer hover:border-b-2 w-[200px] lg:text-lg hover:animate-bounce">
              Office Address:  <br  className='flex sm:hidden'/> 59 Oduduwa Way, Ikeja GRA, Lagos, Nigeria. Contact
              Number
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-col pl-10 m-3 space-y-4">
          <h2 className="text-sm border-b-2 lg:text-xl border-gray-50 w-max">
            Popular Links
          </h2>
          <div className="flex flex-col space-y-4">
            <p className="text-xs capitalize transition-all duration-150 ease-in-out border-gray-300 cursor-pointer hover:border-b-2 w-max lg:text-lg hover:animate-bounce">
              {" "}
              home
            </p>
            <p className="text-xs capitalize transition-all duration-150 ease-in-out border-gray-300 cursor-pointer hover:border-b-2 w-max lg:text-lg hover:animate-bounce">
              {" "}
              about
            </p>
            <p className="text-xs capitalize transition-all duration-150 ease-in-out border-gray-300 cursor-pointer hover:border-b-2 w-max lg:text-lg hover:animate-bounce">
              contact
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-col pl-10 m-3 space-y-4">
          <h2 className="text-sm border-b-2 lg:text-xl w-max border-gray-50">
            How Can You Help
          </h2>
          <div className="flex flex-col space-y-4">
            <p className="text-xs capitalize transition-all duration-150 ease-in-out border-gray-300 cursor-pointer hover:border-b-2 w-max lg:text-lg hover:animate-bounce">
              donation
            </p>
            <p className="text-xs capitalize transition-all duration-150 ease-in-out border-gray-300 cursor-pointer hover:border-b-2 w-max lg:text-lg hover:animate-bounce">
              become a member
            </p>
            <p className="text-xs capitalize transition-all duration-150 ease-in-out border-gray-300 cursor-pointer hover:border-b-2 w-max lg:text-lg hover:animate-bounce">
              site map
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
