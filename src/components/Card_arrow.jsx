import React from "react";

const Card_arrow = ({color}) => {
  return (
    <svg className="pl-2 md:pt-3 arrow">
      <defs>
        <marker
          id="m"
          markerWidth="4"
          markerHeight="8"
          refX="0"
          refY="1"
          viewBox="0 0 1 2"
        >
          <polygon points="0,0 1,1 0,2" fill={"color"} />
        </marker>
      </defs>
      <line
        x1="0"
        y1="50%"
        x2="40%"
        y2="50%"
        strokeWidth="2"
        markerEnd="url(#m)"
        stroke={color}
      />
    </svg>
  );
};

export default Card_arrow;
