import React from "react";

export const TextInput = ({type, placeholder, name, value,onChange}) => {
  return (
    <div className="flex items-start flex-col w-full">
      <label htmlFor={name} className=" my-2 font-semibold text-gray-500 capitalize">
        {name}
      </label>
      <input
      required
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full lg:w-3/4 p-2 rounded border-gray-50 text-sm text-gray-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
