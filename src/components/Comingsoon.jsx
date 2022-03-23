import React from "react";
import ooo from "../assets/ooo_logo.png";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import Marquee from "react-fast-marquee";

const Comingsoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <img
        src={ooo}
        alt="OnOffOnline Logo"
        width={300}
        className="w-56 sm:w-64 md:mb-2 -mt-10"
      />

      <h3 className="text-4xl lg:text-5xl text-center pt-2 md:pt-5 mx-3 mt-5 lg:w-3/6">
        Bringing services that helps in building the brands of the future.
      </h3>
      <Marquee
        style={{ width: "200%" }}
        className="text-2xl lg:text-4xl bg-black text-white py-2 absolute -left-10 -right-10 top-10 items-start uppercase md:mb-4"
        gradient={false}
        loop={0}
        delay={0}
        speed={40}
        direction="right"
      >
        &nbsp;coming soon • coming soon • coming soon • coming soon • coming
        soon • coming soon • coming soon • coming soon • coming soon • coming
        soon • coming soon • coming soon • coming soon • coming soon • coming
        soon •{" "}
      </Marquee>
      <div className=" h-14 w-screen flex flex-row justify-center mt-16 items-center">
        <p className="text-black mr-2 text-lg font-light">For more updates follow us on</p>{" "}
        <a href="https://www.instagram.com/onoffonline.in">
          <AiOutlineInstagram
            size={30}
            color={"#000"}
            className="cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default Comingsoon;
