import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import {TextInput} from '../components/TextInput'
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SelectInput } from "../components/SelectInput";
import {bg} from '../asset'
export const Login = () => {

  const [loading, setLoading] = useState(false);
  const [inputFile, setInputFile] = useState({
    email: "",
    password: "",
    phone: "",
    ward: "",
    LGA: "",
    sex: "",
    name: "",
    occupation: "",
    address: "",
    state: "lagos",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFile({
      ...inputFile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const payload = {
      email: inputFile.email,
      password: inputFile.password,
    };
    if (inputFile.password.length < 6) {
      setLoading(false);
      toast.error("password can not be less than 6 characters");
    }

    axios
      .post("https://mobileapp.fastcredit-ng.com/api/Admin/login", payload)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);

        setLoading(false);
      });
    setInputFile({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Header />
 
        <div className="w-full lg:mx-20 flex flex-col items-center justify-center">
          <h2 className=" lg:text-2xl capitalize font-bold mt-5">
            become a valued member
          </h2>
          <form className=" lg:mx-auto flex flex-col space-y-1 w-full lg:w-3/4">
            <aside className="ml-16 md:ml-32 lg:ml-0 flex flex-col items-center lg:items-start justify-center  lg:space-x-20 lg:flex-row ">
              <div className="flex flex-col w-full">
                <TextInput
                  placeholder="input your name"
                  onChange={handleChange}
                  value={inputFile.name}
                  name="name"
                  type="text"
                />
                <TextInput
                  placeholder="input your email"
                  onChange={handleChange}
                  value={inputFile.email}
                  name="email"
                  type="email"
                />
                <TextInput
                  placeholder="input your phone"
                  onChange={handleChange}
                  value={inputFile.phone}
                  name="phone"
                  type="tel"
                />
                <TextInput
                  placeholder="input your occupation"
                  onChange={handleChange}
                  value={inputFile.occupation}
                  name="occupation"
                  type="text"
                />
                <TextInput
                  placeholder="input your ward"
                  onChange={handleChange}
                  value={inputFile.ward}
                  name="ward"
                  type="text"
                />
              </div>
              <div className="flex flex-col w-full">
                <TextInput
                  placeholder="input your LGA"
                  onChange={handleChange}
                  value={inputFile.LGA}
                  name="LGA"
                  type="text"
                />
                <TextInput
                  placeholder="input your state"
                  onChange={handleChange}
                  value={inputFile.state}
                  name="state"
                  type="text"
                />
                <TextInput
                  placeholder="input your address"
                  value={inputFile.address}
                  name="address"
                  type="text"
                />
                <SelectInput
                  value={inputFile.sex}
                  onChange={handleChange}
                  data={["male", "female"]}
                  name="sex"
                />
              </div>
            </aside>
          </form>
          <div className="mt-10 lg:mt-0 mb-10 flex items-center flex-col justify-center space-y-3">
            <Link to="/member/login">
              <p className="italic text-xs font-semibold text-gray-900 cursor-pointer hover:text-gray-500">
                👉 Existing member? login here
              </p>
            </Link>
            <Button
              color="gray"
              onClick={handleSubmit}
              title="become a member
"
            />
          </div>
        </div>
      <Footer />
    </>
  );
};
