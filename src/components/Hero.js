
import React from "react";
import "../styles/hero.css";
import profileImage from "../assets/profile.jpeg"; // Replace with your actual image path

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>hi,</h1>
        <h2>welcome to my <span className="space">SPACE</span></h2>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Anushka Joshi" />
      </div>
    </section>
  );
};

export default Hero;
