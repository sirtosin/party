import React, { useEffect, useState } from "react";
import { EXCOS, WardList } from "../constants";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Selector } from "../components/Dropdown";

export const Excos = () => {
  const [ward, setWard] = useState("");
  const [excos, setExcos] = useState([]);
  const handleShuffle = (options) => {
    return options.slice(0,4).sort(() => Math.random() - 0.5)
  };

  useEffect(() => {
    setExcos(handleShuffle(EXCOS));
  }, [ward]);

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center">
        <Selector
          data={WardList}
          selected={ward}
          setSelected={setWard}
          selectTitle="select Ward"
        />
      </div>

      <h2 className="text-2xl lg:text-4xl font-black text-center">
        Meet our representatives
      </h2>
      <p className="text-center text-gray-500">Team of winners and leaders</p>

      <section className="flex flex-wrap items-center justify-evenly my-8">
        {excos.map((info) => (
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
};
