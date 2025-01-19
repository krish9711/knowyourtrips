import React from "react";
import Logo from "../assets/logo.png";
// import { BsTwitter } from "react-icons/bs";
// import { SiLinkedin } from "react-icons/si";
// import { BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {

  const handleEmailClick = () => {
    navigator.clipboard.writeText("business@knowyourtrips.com");
    alert("Email copied to clipboard");
  };


  return (
    <div className="footer-wrapper">
      <div className="footer-section-two">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-section-one">
          <div className="footer-icons">
            <IoMail onClick={handleEmailClick} />
          </div>
          <div className="footer-text" onClick={handleEmailClick}>
            business@knowyourtrips.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;