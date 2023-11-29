import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="food-section-wrapper" id="Avis">
      <div className="food-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">Les derniers avis</h1>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Un super déjeuner : un service attentionné, des mets de qualité, bien
          cuisinés et une place au calme. Nous reviendrons avec les enfants pour
          leur faire découvrir cette belle découverte.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
