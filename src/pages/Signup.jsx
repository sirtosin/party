import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [inputFile, setInputFile] = useState({
    number:''
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
    <Header/>
      <div className=" h-screen flex items-center justify-center">
        <form className="login-page shadow-xl w-1/3 mx-auto h-[500px] flex flex-col items-center space-y-6 justify-center">
          <h2 className="text-sm lg:text-xl capitalize font-bold ">
            {" "}
            enter your registered number
          </h2>
          <TextInput
            placeholder="input your party number"
            onChange={handleChange}
            value={inputFile.number}
            name=""
            type="text"
          />

          <Link to="/membership">
            <p className="italic text-xs font-semibold text-gray-900 cursor-pointer hover:text-gray-500">
              👉Not yet a member? join here
            </p>
          </Link>
          <Button color="gray" onClick={handleSubmit} title="proceed" />
        </form>
      </div>
      <Footer/>
    </>
  );
};
