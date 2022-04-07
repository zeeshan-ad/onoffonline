import React from "react";
import './Cards.css'
import Card_arrow from "../components/Card_arrow";




const Card = (props) => {
  return (
    <div className="card ">
      <a className="hover:-rotate-3 card_image"><img className="image_of_card" src={props.image} /></a>
      
      <div className="flex flex-row  justify-end md:justify-start self-start">
      <h5 className="card__desc font-medium  self-start text-2xl">{props.desc}</h5>
        <Card_arrow color="black" />
      </div>
    </div>
  );
};

export default Card;




