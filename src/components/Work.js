import React from "react";
import Blog from "../assets/blog-image.png";
import Flight from "../assets/airport-image.png";
import Trips from "../assets/trips-image.png";
import FlightTakingOff from "../assets/flight-image.png";
import FlowDiagram from "../assets/KnowYourTrips-Flow.png";

const Work = () => {
  const workInfoData = [
    {
        image: FlightTakingOff,
        title: "Real-time Flight Updates",
        text: "Effortless check-in and real-time flight updates.",
      },
    {
      image: Flight,
      title: "Book Your Flight",
      text: "Convenient flight and airport taxi bookings in one place.",
    },
    {
      image: Trips,
      title: "Track Your Trip",
      text: "Create iteneraries, have all travel docs in one place and worry less about missing anything.",
    },
    {
        image: Blog,
        title: "Blog Your Experiences",
        text: "Blog about your adventures and join our community of travelers.",
      },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Use Cases</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Know Your Trips manages your travel experiences from start to finish.
        </p>
      </div>
      <div className="work-section-bottom">
        <img src={FlowDiagram} alt="" />
      </div>
      {/* <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Work;