import React from "react";

const Circletext = ({text}) => {
  return (
    <svg className="circle" viewBox="0 0 2300 1000">
      <title>Let's build with onoffonline</title>
      <defs>
        <path
          d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
          id="textcircle"
        >
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="30s"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            repeatCount="indefinite"
          />
        </path>
      </defs>
      <text dy="70" textLength="1220">
        <textPath href="#textcircle">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default Circletext;
