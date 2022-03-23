import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ooo from "../assets/ooo_logo.png";
import ooowhite from "../assets/ooowhite.svg";

const Navigation = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div style={{background:"#F7F7F6"}} className="fixed NavAnimation top-0 shadow-md left-0 right-0 flex flex-row justify-between px-6 md:px-10 pt-5 pb-4 z-50">
        <div>
          <img src={ooo} alt="OnOffOnline Logo" className="w-32 sm:w-40" />
        </div>
        <div className="w-7/12 hidden pt-1 lg:flex lg:flex-row justify-between nav-menu">
          <Link to="/" className="hover-underline-animation">
            SERVICES
          </Link>
          <Link to="/" className="hover-underline-animation">
            WORK
          </Link>
          <Link to="/" className="hover-underline-animation">
            FEATURED
          </Link>
          <Link to="/" className="hover-underline-animation">
            CLIENTS
          </Link>
          <Link to="/" className="hover-underline-animation">
            CAREER
          </Link>
          <Link to="/" className="hover-underline-animation">
            CONTACT
          </Link>
        </div>
        <div
          className="block nav-menu lg:hidden"
          onClick={() => setToggleMenu(true)}
        >
          <h1 className="text-xs font-normal cursor-pointer">
            MENU &nbsp; &nbsp; |
          </h1>
        </div>
      </div>
      {ToggleMenu && (
        <div
          className={`slide-bottom
          fixed top-0 left-0 right-0 z-50`}
        >
          <div className="bg-black text-white h-4/6 flex flex-col items-start py-10">
            <div className="flex flex-row justify-between px-10 w-full">
            <div>
          <img src={ooowhite} alt="OnOffOnline Logo" className="w-28 sm:w-36" />
        </div>
              <div
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <h1 className="text-xs cursor-pointer pt-1">CLOSE &nbsp; —</h1>
              </div>
            </div>
            <div className="flex flex-col text-white nav-menu px-10 pt-20 pb-10">
              <Link to="/" className="hover-underline-animation2">
                SERVICES
              </Link>
              <Link to="/" className="hover-underline-animation2">
                WORK
              </Link>
              <Link to="/" className="hover-underline-animation2">
                FEATURED
              </Link>
              <Link to="/" className="hover-underline-animation2">
                CLIENTS
              </Link>
              <Link to="/" className="hover-underline-animation2">
                CAREER
              </Link>
              <Link to="/" className="hover-underline-animation2">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
