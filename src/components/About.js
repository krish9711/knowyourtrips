import React from "react";
import AboutBackground from "../assets/about-background.png";
import MyTripsPage from "../assets/mytrips-image.png";
import AboutImage from "../assets/AboutImage.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutImage} alt="" className="homepage-image" />
        {/* <img src={MyTripsPage} alt="" className="mytrips-image" /> */}
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Your All-in-One Travel Companion
        </h1>
        <p className="primary-text">
          Get streamlined travel planning with our user-friendly app. Effortless
          booking, personalized recommendations, and hassle-free itineraries.
        </p>
        <p className="primary-text">
          Real-time updates, convenient flight and airport taxis booking, and
          secure payment options for a stress-free travel experience.
        </p>
      </div>
    </div>
  );
};

export default About;