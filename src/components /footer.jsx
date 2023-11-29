import React from "react";
import Logo from "../Assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qui somme nous ? </span>
          <span>FAQ</span>
          <span>Testimonials</span>
          <span>Menu</span>
        </div>
        <div className="footer-section-columns">
          <span>+33-1234566789</span>
          <span>nuki@food.com</span>
          <span>press@food.com</span>
          <span>contact@nuki.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Mentions légales</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
