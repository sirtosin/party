import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Policies } from "../components/Policies";
import { Advert } from "../components/Advert";
import { Movement } from "../components/Movement";
import { Donate } from "../components/Donate";
export const Home = () => {
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
};
