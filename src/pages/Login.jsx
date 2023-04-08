import React, { useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextInput } from '../components/TextInput'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SelectInput } from '../components/SelectInput'
import BasicModal from '../components/Modal'
import { addMember } from '../services/user'
import { LGALIST, WardList } from "../constants";
import { Selector } from '../components/Dropdown'

export const Login = memo(() => {
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState("");
  const [LGA, setLGA] = useState("");
  const [ward, setWard] = useState("");
  const navigate = useNavigate();
  const [inputFile, setInputFile] = useState({
    email: '',
    phone: '',
    ward: '',
    LGA: '',
    sex: '',
    name: '',
    occupation: '',
    address: '',
    state: 'lagos',
  })
  const [topping, setTopping] = useState('new')
  const [openModal, setOpenModal] = useState(false)
  const handleMesageOpen = () => setOpenModal(true)
  const handleClose = () => {
    setOpenModal(false)
    navigate('/')
  }

  const onOptionChange = (e) => {
    setTopping(e.target.value)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputFile({
      ...inputFile,
      [name]: value,
    })
  }

  
  // image upload
    const widget = (file) => {
      const url =
        "https://api.cloudinary.com/v1_1/dquwxckdi/auto/upload";
      // e.preventDefault();
      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", "665679589221868");
      formData.append("upload_preset", "ub5r39y6");
      formData.append("timestamp", new Date());
      // formData.append("signature", signData.signature);
      // formData.append("eager", "c_pad,h_300,w_400|c_crop,h_200,w_260");
      formData.append("folder", "fastcredit");

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          console.log(JSON.parse(data));
          setImage(JSON.parse(data));
        });
    };
  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    if (!file) return;
    widget(file);
  };

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    // handleMesageOpen()
    navigate('/welcome')

    const payload = {
      email: inputFile.email,
      state: inputFile.state,
      image:image.secure_url,
      address: inputFile.address,
      phone: inputFile.phone,
      name: inputFile.name,
      ward:ward,
      LGA:LGA,
      occupation: inputFile.occupation,
      sex: inputFile.sex,
    };

localStorage.setItem('user', JSON.stringify(payload))
  addMember(payload)
  .then((res) => console.log('res', res))
  .catch((err) => console.log('err', err))
    setInputFile({
      email: "",
      phone: "",
      occupation: "",
      name: "",
      address: "",
      state: "",
      ward: "",
      LGA: "",
      sex: "",
    });
  }

  return (
    <>
      <Header />
      {openModal && (
        <BasicModal handleClose={handleClose} openModal={openModal} />
      )}
      <div className="w-full flex flex-col items-center justify-center bg-[#f4f6f5] ">
        <h2 className="mt-5 font-bold capitalize lg:text-2xl">
          what member are you? 🙃
        </h2>
        <section className="flex items-center my-5 space-x-10">
          <div>
            <input
              type="radio"
              name="topping"
              value="old"
              className="mr-3 accent-gray-500"
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
              className="mr-3 accent-gray-500"
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
            LGA={LGA}
            setLGA={setLGA}
            ward={ward}
            setWard={setWard}
            handleFileInput={handleFileInput}
          />
        ) : (
          <OldMember handleChange={handleChange} inputFile={inputFile} />
        )}
        <div className="flex flex-col items-center justify-center mt-10 mb-10 space-y-3 lg:mt-0">
          {/* <Link to="/member/login">
            <p className="text-xs italic font-semibold text-gray-900 cursor-pointer hover:text-gray-500">
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
})

export const OldMember = ({ handleChange, inputFile }) => (
  <form className="w-3/4 my-4 lg:w-1/2 lg:ml-32">
    <TextInput
      placeholder="input your membership number"
      onChange={handleChange}
      value={inputFile.name}
      name="membership number"
      type="text"
    />
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


    <SelectInput
      value={inputFile.sex}
      onChange={handleChange}
      data={["male", "female"]}
      name="sex"
    />
  </form>
);
export const NewMember = ({
  handleChange,
  setImage,
  image,
  inputFile,
  ward,
  LGA,
  setLGA,handleFileInput,
  setWard,
}) => (
  <form className="w-3/4 my-4 lg:w-1/2 lg:ml-32">
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
    <Selector
      data={LGALIST}
      selected={LGA}
      setSelected={setLGA}
      selectTitle="select LGA"
    />
    <Selector
      data={WardList}
      selected={ward}
      setSelected={setWard}
      selectTitle="select Ward"
    />
    {/* <TextInput
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
    /> */}
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
      onChange={handleFileInput}
      name="image upload"
      accept="image/*"
      type="file"
    />
    <SelectInput
      value={inputFile.sex}
      onChange={handleChange}
      data={["Male", "Female"]}
      name="sex"
    />
  </form>
);
