import React, { memo, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom/dist";
import { EXCOS } from "../constants";
import { Vision } from "../components/Vision";

export const About = memo(() => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/excos");

  return (
    <div>
      <Header />
      <img
        loading="lazy"
        className="w-full mb-10"
        src="https://fastcredit-ng.com/static/media/aboutpictures.22237054203d1eac46b7.png"
        alt=""
      />
      <Vision/>
      <h2 className="text-2xl lg:text-4xl font-black text-center mt-20">
        Meet our team
      </h2>
      <p className="text-center text-gray-500">Team of winners and leaders</p>
      {/* <div className="flex items-center justify-end mr-10">
        <Button
          color="gray"
          onClick={handleNavigate}
          title="view excos by ward"
        />
      </div> */}
      <section className="flex flex-wrap items-center justify-evenly my-8">
        {EXCOS.slice(0, 10).map((info) => (
          <div
            key={info.id}
            className="w-[300px] m-3 rounded-lg group bg-white shadow-md"
          >
            <img
              loading="lazy"
              className="w-full rounded-t-lg shadow-sm"
              src={info.img}
              alt={info.name}
            />
            <div className="p-4">
              <h2 className="font-semibold text-sm">{info.name}</h2>
              <p className="text-xs ">{info.tilte}</p>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
});
