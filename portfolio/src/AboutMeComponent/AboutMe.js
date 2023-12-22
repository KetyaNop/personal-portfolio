import React from "react";
import aboutMeImage from "./../logo.svg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutMe">
      <h2>About Me</h2>
      <p>សួស្តី! I'm Ketya, a passionate web developer...</p>
      <img src={aboutMeImage} alt="About Me" />
      <p>In my spare time, I enjoy...</p>
    </div>
  );
}

export default AboutMe;
