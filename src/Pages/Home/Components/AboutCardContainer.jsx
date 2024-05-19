import React from "react";
import { styles } from "../../../styles";
import AboutCard from "./AboutCard";
import Tilt from "react-parallax-tilt";

const AboutCardContainer = () => {
  return (
    <Tilt
      className="w-full h-[500px] p-4 glass-card mt-16 flex sm:items-center sm:justify-end cursor-pointer"
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1}
      transitionSpeed={1000}
      glareColor='#50C878'
      glareEnable={true}
      glarePrerender={true}
    >
      <AboutCard />
    </Tilt>
  );
};

export default AboutCardContainer;
