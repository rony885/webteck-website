import React from "react";
import AboutInfo from "./AboutInfo";
import Team from "./Team";
import Counter from "./Counter";
import Choose from "./Choose";
import Testimonial from "./Testimonial";
// import Blog from "./Blog";
// import Brand from "./Brand";

const About = () => {
  return (
    <div>
      <AboutInfo />
      <Counter />
      <Choose />
      <Testimonial />
      {/* <Blog /> */}
      {/* <Brand /> */}
      <Team />
    </div>
  );
};

export default About;
