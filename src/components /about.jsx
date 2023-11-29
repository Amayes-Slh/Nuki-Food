import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div id="About" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">A propos de nous</p>
        <h1 className="primary-heading">Crée en 1865 Nuki c'est avant tout </h1>
        <p className="primary-text">
          Des recettes sont savoureuses et préparées de manière traditionnelle à
          partir d'ingrédients choisis avec soin, pour vous proposer des plats
          qui invitent à explorer toute la gastronomie de l'Asie.
        </p>
        <p className="primary-text">
          UN PAS VERS L'AILLEURS - Entre amis, entre collègues ou en famille,
          les tables de ce restaurant et sont ambiance conviviale conviennent
          bien aux amateurs comme aux découvreurs de recettes d'ailleurs !
        </p>
      </div>
    </div>
  );
};

export default About;
