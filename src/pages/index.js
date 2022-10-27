import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Business from "../components/Businesses";
import { homeObjOne } from "../components/InfoSection/data";
import InfoSection from "../components/InfoSection";
import Idea from "../components/IdeaSection";
import Services from "../components/Services";
import Questions from "../components/Questions";
import Contact from "../components/Contact";
import Slider from "../components/Testimony";
import Payment from "../components/Payment";
import Certificate from "../components/Certificate";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Business />
      <Idea />
      <InfoSection id="about" {...homeObjOne} />
      <Services />
      <Certificate />
      <Contact />
      <Slider />
      <Questions />
      <Payment />
      <Footer />
    </>
  );
};

export default Home;
