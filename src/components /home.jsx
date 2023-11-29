import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";

import { FiArrowRight } from "react-icons/fi";
import Navbar from "./navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Savourez vos plats favoris, livrés chauds et frais !
          </h1>
          <p className="primary-text">
            Laissez nos talentueux chefs de s'occuper de toute la préparation,
            de l'épluchage minutieux à la découpe experte et à la marinade
            savoureuse, afin que vous puissiez savourer des saveurs authentiques
            et fraîches, le tout prêt à déguster.
          </p>
          <button className="secondary-button">
            Réserver et commander <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
