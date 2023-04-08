import React, { memo, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Policies } from "../components/Policies";
import { Advert } from "../components/Advert";
import { Movement } from "../components/Movement";
import { Donate } from "../components/Donate";
import { fetchMembers } from "../services/user";
export const Home = memo(() => {

  useEffect(() => {
    handleMembers()
  },[])

  const handleMembers = async () => {
    const members =  await fetchMembers();
    console.log(members)
  }

  return (
    <>
      <Header />
      <Hero />
      <Policies />
      <Advert />
      <Movement />
      <Donate />
      <Footer />
    </>
  );
});
