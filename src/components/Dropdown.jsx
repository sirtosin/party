import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

export const Selector = ({ data, setSelected, selected ,selectTitle}) => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const makeSelection = (country) => {
    if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
      setSelected(country?.name);
      setOpen(false);
      setInputValue("");
    }
  };
  useEffect(() => {
    setCountries(data);
  }, [data, setCountries]);
  return (
    <div className="w-3/4 font-medium h-auto shadow rounded my-3">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : selectTitle}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder={`Enter ${selectTitle} name`}
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {countries?.map((country) => (
          <li
            key={country?.name}
            className={`p-2 text-sm flex items-center justify-between mx-20 hover:bg-sky-600 hover:text-white
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue) ||
              country?.name?.toLowerCase().includes(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => makeSelection(country)}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
