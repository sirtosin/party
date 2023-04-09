import React from "react";

export const SelectInput = ({ data, onChange,name }) => {
  return (
       <div className="flex items-start flex-col w-full ">
    <label htmlFor={name} className="my-2 font-semibold text-gray-500 capitalize required">{name}</label>
      <select
        className="w-full p-2 rounded border-gray-50 text-sm text-gray-500 lg:w-3/4"
        onChange={onChange}
        name={name}
        required
      >
        <option value=""></option>
        {data.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
