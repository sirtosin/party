import React from "react";

export const TextInput = ({type, placeholder, name, value,onChange}) => {
  return (
    <div className="flex items-start flex-col w-full">
      <label
        htmlFor={name}
        className={
          name === "email" || name === "state"
            ? " my-2 font-semibold text-gray-500 capitalize"
            : " my-2 font-semibold text-gray-500 capitalize required"
        }
      >
        {name}{" "}
        <small className="text-[8px] font-light">
          {name === "email" && "(optional)"}
        </small>
      </label>
      <input
        maxlength="255"
        required={name !== "email" && name !== "state" ? true : false}
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
