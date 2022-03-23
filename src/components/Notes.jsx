import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import ooo from "../assets/ooo_logo.png";

const Notes = ({ setNote, Note }) => {
  return (
    <div
      style={{ backgroundColor: "#DEFF00" }}
      className="max-h-64 note p-5 mb-8 -rotate-6 border-2 shadow-md border-black"
    >
      <AiOutlineClose
        className="cursor-pointer"
        onClick={() => setNote(!Note)}
      />
      <div className="flex flex-col items-center py-4">
        <p style={{ marginRight: 100, fontWeight:'300' }} className="text-3xl">
          "Marketing is <span style={{fontStyle:'italic', fontWeight:'300'}}>measurable</span> enthusiasm transferred to the consumer."
        </p>
        <p className="uppercase underline self-start text-xs pt-3 cursor-pointer">Contact us</p>
        <img className="-mr-28 mt-5" src={ooo} alt="OnOffOnline Logo" width={120} />
      </div>
    </div>
  );
};

export default Notes;
