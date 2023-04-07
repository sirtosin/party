import React from "react";

export const TextInput = ({type, placeholder, name, value,onChange}) => {
  return (
    <>
      <label htmlFor={name} className="my-2 font-semibold text-gray-500 capitalize">
        {name}
      </label>
      <input
      required
        type={type}
        placeholder={placeholder}
        name={name}
        className="p-2 rounded border-gray-50 text-sm text-gray-500 w-3/4"
        value={value}
        onChange={onChange}
      />
    </>
  );
};
