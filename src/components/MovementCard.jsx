import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsFillPersonVcardFill, BsTicketPerforated } from "react-icons/bs";
import { HiOutlineFingerPrint } from "react-icons/hi";
import { MdHowToVote } from "react-icons/md";
import { GiVote } from "react-icons/gi";

export const MovementCard = () => {
  const data = [
    {
      id: 1,
      icon: <MdLocationPin />,
      title: "Go to your assigned voting location",
    },
    {
      id: 2,
      icon: <BsFillPersonVcardFill />,
      title: "Present your ID",
    },
    {
      id: 3,
      icon: <HiOutlineFingerPrint />,
      title: "Your fingers will be marked with ink",
    },
    {
      id: 4,
      icon: <BsTicketPerforated />,
      title: "Take your tickets",
    },
    {
      id: 5,
      icon: <MdHowToVote />,
      title: "Cast your vote secretly",
    },
    {
      id: 6,
      icon: <GiVote />,
      title: "Deposit ticket in the ballot box",
    },
  ];
  return (
    <div className="grid grid-cols-3">
      {data.map((item) => (
        <div
          key={item.id}
          className=" flex items-center flex-col space-y-4 m-2"
        >
          <div className="bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-500 hover:text-white w-[70px] h-[70px]  text-4xl">
            {item.icon}
          </div>
          <h2 className="text-gray-800 text-xl">step {item.id}</h2>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
