import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SelectInput } from "../components/SelectInput";
import { bg } from "../asset";
import BasicModal from "../components/Modal";
export const Login = memo(() => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const [image, setImage] = useState('')
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
  const [topping, setTopping] = useState("new");
  const [openModal, setOpenModal] = useState(false);
  const handleMesageOpen = () => setOpenModal(true);
  const handleClose = () => {setOpenModal(false)
  navigate('/')}

  const onOptionChange = (e) => {
    setTopping(e.target.value);
  };

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
    handleMesageOpen();

    const payload = {
      email: inputFile.email,
      password: inputFile.password,
    };

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
      {openModal && (
        <BasicModal handleClose={handleClose} openModal={openModal} />
      )}
      <div className="w-full flex flex-col items-center justify-center bg-[#f4f6f5] ">
        <h2 className=" lg:text-2xl capitalize font-bold mt-5">
          what member are you? 🙃
        </h2>
        <section className="my-5 flex items-center space-x-10">
          <div>
            <input
              type="radio"
              name="topping"
              value="old"
              className="accent-gray-500 mr-3"
              id="old"
              checked={topping === "old"}
              onChange={onOptionChange}
            />
            <label
              className="my-2 font-semibold text-gray-500 capitalize"
              htmlFor="old"
            >
              old member
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="topping"
              value="new"
              id="new"
              className="accent-gray-500 mr-3"
              checked={topping === "new"}
              onChange={onOptionChange}
            />
            <label
              className="my-2 font-semibold text-gray-500 capitalize"
              htmlFor="new"
            >
              new member
            </label>
          </div>
        </section>
        {topping === "new" ? (
          <NewMember
            handleChange={handleChange}
            inputFile={inputFile}
            setImage={setImage}
            image={image}
          />
        ) : (
          <OldMember handleChange={handleChange} inputFile={inputFile} />
        )}
        <div className="mt-10 lg:mt-0 mb-10 flex items-center flex-col justify-center space-y-3">
          {/* <Link to="/member/login">
            <p className="italic text-xs font-semibold text-gray-900 cursor-pointer hover:text-gray-500">
              👉 Existing member? login here
            </p>
          </Link> */}
          <Button
            color="gray"
            onClick={handleSubmit}
            title={topping === "old" ? "  👉 proceed" : "  👉 become a member"}
          />
        </div>
      </div>

      <Footer />
    </>
  );
});

export const OldMember = ({ handleChange, inputFile }) => (
  <form className="w-3/4 lg:w-1/2 my-4 lg:ml-32">
    <TextInput
      placeholder="input your membership number"
      onChange={handleChange}
      value={inputFile.name}
      name="membership number"
      type="text"
    />
  </form>
);
export const NewMember = ({ handleChange, setImage, inputFile ,image}) => (
  <form className="w-3/4 lg:w-1/2 my-4 lg:ml-32">
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
      onChange={handleChange}
      value={inputFile.address}
      name="address"
      type="text"
    />
    <TextInput
      placeholder="input your image"
      value={image}
      onChange={(e) => setImage(e.target.files[0])}
      name="image upload"
      type="file"
    />
    <SelectInput
      value={inputFile.sex}
      onChange={handleChange}
      data={["male", "female"]}
      name="sex"
    />
  </form>
);
