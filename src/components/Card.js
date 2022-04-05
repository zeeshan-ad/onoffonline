import React from "react";
import './Cards.css'
import ExpandingArrow from "../components/ExpandingArrow";


const Card = (props) => {
  return (
    <div className="card ">
      <a className="hover:-rotate-3 card_image"><img className="image_of_card" src={props.image} /></a>
      <h5 className="card__desc font-medium mt-10 self-start text-2xl">{props.desc}</h5>
      <div className="flex flex-row w-3/6 justify-end md:justify-start self-start">
        <p className="text-xs md:text-lg whitespace-nowrap pt-4">
          SERVICES
        </p>
        <ExpandingArrow color="black" />
      </div>
    </div>
  );
};

export default Card;




