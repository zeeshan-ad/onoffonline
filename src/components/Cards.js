import React from "react";
import Card from "./Card";
import './Cards.css'
import social from "../assets/services/1.png";
import dd from "../assets/services/4.png";
import ia from "../assets/services/6.png";
import pm from "../assets/services/8.png";
import wd from "../assets/services/11.png";
import cp from "../assets/services/13.png";
import pr from "../assets/services/15.png";
import em from "../assets/services/17.png";
import opm from "../assets/services/21.png";
import threed from "../assets/services/19.png";


const Cards = () => {
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
  })

  return (
    <div className="cards_container">
      <div className="cards">
        <Card title="Social Media Marketing" desc="Social media marketing" figure="$10" change="per month" image={social} />
        <Card
          title="Digital Design"
          desc="Digital Design"
          figure="$50"
          change="per month"
          modifier="inc"
          image={dd}
        />
        <Card title="Influencer Activation" desc="Influencer Activation" figure="$50" change="per month" image={ia} />
        <Card title="Performance Marketing" desc="Performance Marketing" figure="$100" change="per month" image={pm} />
        <Card title="Website Development" desc="Website Development" figure="$10" change="per month" image={threed} />
      </div>
      <div className="cards1">
        <Card
          title="Content Production"
          desc="Content Production"
          figure="$50"
          change="per month"
          modifier="inc"
          image={cp}
        />
        <Card title="Event Marketing" desc="Event Marketing" figure="$50" change="per month" image={pr} />
        <Card title="Public Relation- Elite" desc="Public Relation- Elite" figure="$100" change="per month" image={em} />
        <Card title="Offline Print Media" desc="Offline Print Media" figure="$50" change="per month" image={opm} />
        <Card title="3D Modelling & Animation" desc="3D Modelling & Animation" figure="$100" change="per month" image={em} />
      </div>
    </div>
  );
};

export default Cards;




