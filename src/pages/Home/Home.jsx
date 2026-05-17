import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Counter from "./Counter";
import Skills from "./Skills";
import Service from "./Service";
import Team from "./Team";
import Customer from "./Customer";
import Contact from "./Contact";
import Pricing from "./Pricing";
import Brand from "./Brand";
import FrequentlyQuestion from "./FrequentlyQuestion";
import Blog from "../About/Blog";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Counter />
      <Skills />
      <Service />
      <Team />
      <Customer />
      <Contact />
      <Pricing />
      <Brand />
      <FrequentlyQuestion />
      <Blog />
    </div>
  );
};

export default Home;
