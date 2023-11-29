import React from "react";
import Menu1 from "../Assets/Menu1.png";
import Menu4 from "../Assets/Menu4.png";
import Menu5 from "../Assets/Menu5.png";
import Menu6 from "../Assets/Menu6.png";

const Menu = () => {
  const workInfoData = [
    {
      img: Menu1,
      title: "MENU MIXTES 1 ",
      text: "Servi avec: 1 soupe, 1 salade, 1 riz Changement de brochettes en 5 boeuf au fromage + 2€",
    },
    {
      img: Menu5,
      title: "MENU COMPOSÉS",
      text: "Servi avec 1 soupe, 1 salade , （1 riz supplément 1 € ）",
    },
    {
      img: Menu5,
      title: "MENU MIXTES 2",
      text: "Servi avec: 1 soupe, 1 salade, 1 riz",
    },
    {
      img: Menu5,
      title: "MENU MIXTES 3",
      text: "Servi avec: 1 soupe, 1 salade,",
    },
    {
      img: Menu6,
      title: "MENU RAVIOLIS",
      text: "Servi avec: 1 soupe, 1 salade, 1 riz",
    },
    {
      img: Menu4,
      title: "MENUS BROCHETTES",
      text: "Servi avec: 1 soupe, 1 salade, 1 riz",
    },
  ];
  return (
    <div id="Menu" className="food-section-wrapper">
      <div className="food-section-top">
        <p className="primary-subheading">Menu</p>
        <h1 className="primary-heading">
          Decouvrez nos menus et nos plats à la carte
        </h1>
      </div>
      <div className="food-section-bottom">
        {workInfoData.map((data) => (
          <div className="food-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.img} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
