import React from "react";

export const SelectInput = ({ data, onChange,name }) => {
  return (
    <>
    <label htmlFor={name} className="my-2 font-semibold text-gray-500 capitalize">{name}</label>
      <select
        className="p-2 rounded border-gray-50 text-sm text-gray-500 w-3/4"
        onChange={onChange}
        name={name}
        required
      >
        <option value=""></option>
        {data.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </>
  );
};
