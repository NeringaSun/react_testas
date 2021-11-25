import React from "react";

const Hero = ({ title, subtitle }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};

export default Hero;
