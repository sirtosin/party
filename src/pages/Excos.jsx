import React, { useEffect, useState } from "react";
import { EXCOS, LGALIST, WardList, WardList2 } from "../constants";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Selector } from "../components/Dropdown";
import { Mission } from "../components/Mission";

export const Excos = () => {
  const [ward, setWard] = useState("");
  const [LGA, setLGA] = useState("");
  const [excos, setExcos] = useState([]);
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5).slice(0, 4);
  };

  useEffect(() => {
    setExcos(handleShuffle(EXCOS));
  }, [ward]);

  return (
    <div>
      <Header />
      <img
        loading="lazy"
        className="w-full sm:h-[300px] lg:h-[400px] object-cover mb-10"
        src="https://images.pexels.com/photos/11022648/pexels-photo-11022648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <Mission />
      <h2 className="text-2xl lg:text-4xl font-black text-center mt-10">
        Meet our representatives
      </h2>
      <p className="text-center text-gray-500">Team of winners and leaders</p>
      <div className="flex items-center justify-center mt-10 flex-col space-y-5">
        <Selector
          data={LGALIST}
          selected={LGA}
          setSelected={setLGA}
          selectTitle="select LGA"
        />
        <select
          name="ward"
          className="w-full sm:w-3/4 font-medium h-auto shadow rounded my-3 p-2"
          onChange={(e) => setWard(e.target.value)}
        >
          <option value="">select ward</option>
          {WardList2.map((ward) =>
            ward.lga === LGA
              ? ward.name.map((res) => (
                  <option key={res} value={res}>
                    {res}
                  </option>
                ))
              : null
          )}
        </select>
      </div>
      <section className="flex flex-wrap items-center justify-evenly my-8">
        {ward &&
          excos.map((info) => (
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
