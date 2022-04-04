import React from "react";
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

const Services = () => {
  return (
    <div
      className="px-6 md:px-10 flex flex-col justify-between"
    >
      {/* <div className="text-8xl w-1/6 self-center">
        <h1 className="-rotate-90">s</h1>
        <h1 className="-rotate-90 -mt-10">e</h1>
        <h1 className="-rotate-90 -mt-10">c</h1>
        <h1 className="-rotate-90 -mt-16">i</h1>
        <h1 className="-rotate-90 -mt-10">v</h1>
        <h1 className="-rotate-90 -mt-14">r</h1>
        <h1 className="-rotate-90 -mt-10">e</h1>
        <h1 className="-rotate-90 -mt-10">S</h1>
        <h1 className="-rotate-90 -mt-14">&nbsp;</h1>
        <h1 className="-rotate-90 -mt-10">r</h1>
        <h1 className="-rotate-90 -mt-10">u</h1>
        <h1 className="-rotate-90 -mt-10">O</h1>
<<<<<<< HEAD
      </div>
      <div className="servicesList w-5/6 ml-10 overflow-y-scroll flex flex-row justify-center flex-wrap gap-4 ">
        <div className="p-7 pb-5 bg-black text-white w-52 h-64">
=======
      </div> */}
      <h1 className="text-7xl md:text-9xl pb-8">Our <span className="SerifDisplayFont">Services</span></h1>
      <div className="servicesList grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div className="p-5 pb-5 bg-black text-white w-52 h-64">
>>>>>>> c650a78ad8fac2b0766772dc25f252805e14418e
          <div className="flex flex-row justify-between">
            <p className="text-lg font-semibold -mt-3 w-36 mb-4 pt-2 leading-5 uppercase">
              Social media marketing
            </p>
            <p className="text-right ">/01</p>
          </div>
          <img src={social} alt="Social media marketing" width={150} />
        </div>
        <div className="  p-5 pb-5 bg-black text-white w-52 h-64">
          <div className="flex flex-row justify-between">
            <p className="text-lg font-semibold -mt-3 mb-4 w-36 pt-3 leading-5 uppercase">
              Digital <br />
              Design
            </p>
            <p className="text-right">/02</p>
          </div>
          <img src={dd} alt="Digital" width={150} />
        </div>
        <div className="p-5 pb-5 bg-black text-white w-52 h-64">
          <div className="flex flex-row justify-between">
            <p className="text-lg font-semibold -mt-3 mb-4 w-36 pt-3 leading-5 uppercase">
              Influencer Activation
            </p>
            <p className="text-right">/03</p>
          </div>
          <img src={ia} alt="Influencer Activation" width={150} />
        </div>
        <div className="  p-5 pb-5 bg-black text-white w-52 h-64">
          <div className="flex flex-row justify-between">
            <p className="text-lg font-semibold -mt-3 mb-4 w-36 pt-3 leading-5 uppercase">
              Performance Marketing
            </p>
            <p className="text-right">/04</p>
          </div>
          <img src={pm} alt="Performance Marketing" width={150} />
        </div>
        <div className="p-5 pb-5 bg-black text-white w-52 h-64">
          <div className="flex flex-row justify-between">
            <p className="text-lg font-semibold -mt-3 mb-4 w-36 pt-3 leading-5 uppercase">
              Website Development
            </p>
            <p className="text-right">/05</p>
          </div>
          <img src={wd} alt="Website Development" width={150} />
        </div>
        <div className="p-5 pb-5 bg-black text-white w-52 h-64">
          <div className="flex flex-row justify-between">
            <p className="text-lg font-semibold -mt-3 mb-4 w-36 pt-3 leading-5 uppercase">
              Content Production
            </p>
            <p className="text-right">/06</p>
          </div>
          <img src={cp} alt="Content Production" width={150} />
        </div>
        <div className="p-5 pb-5 bg-black text-white w-52 h-64">
          <div className="flex flex-row justify-between">
            <p className="text-lg font-semibold -mt-3 mb-4 w-36 pt-3 leading-5 uppercase">
              Event Marketing
            </p>
            <p className="text-right">/07</p>
          </div>
          <img src={em} alt="Event Marketing" width={150} />
        </div>
        <div className="p-5 pb-5 bg-black text-white w-52 h-64">
          <div className="flex flex-row justify-between">
            <p className="text-lg font-semibold -mt-3 mb-4 w-36 pt-3 leading-5 uppercase">
              Public Relations
            </p>
            <p className="text-right">/08</p>
          </div>
          <img src={pr} alt="Public Relations" width={150} />
        </div>
        <div className="p-5 pb-5 bg-black text-white w-52 h-64">
          <div className="flex flex-row justify-between">
            <p className="text-lg font-semibold -mt-3 mb-4 w-36 pt-3 leading-5 uppercase">
              Offline Print Media
            </p>
            <p className="text-right">/09</p>
          </div>
          <img src={opm} alt="Offline Print Media" width={150} />
        </div>
        <div className="p-5 pb-5 bg-black text-white w-52 h-64">
          <div className="flex flex-row justify-between">
            <p className="text-lg font-semibold -mt-3 mb-4 w-36 pt-3 leading-5 uppercase">
              3d Modelling
              <br /> &amp; Animation
            </p>
            <p className="text-right">/10</p>
          </div>
          <img src={threed} alt=" 3d Modelling" width={150} />
        </div>
      </div>
    </div>
  );
};

export default Services;
