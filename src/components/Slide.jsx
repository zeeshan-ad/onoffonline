import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import sazShort from "../assets/sazShort.png";
import parker from "../assets/parkerShort.png";
import hm from "../assets/hm.png";
import hmShort from "../assets/hmShort.png";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);
const Slide = () => {
  const [ActiveIndex, setActiveIndex] = useState(0);
  const slideData = [
    {
      title: "Hunkemöller India",
      headiing:
        "Celebrity-centric activation campaign for global's brand Indian e-commerce launch",
      para: "Celebrity Sourcing & Activation | Creative Direction & Communication | Videography & Photography",
      image: parker,
      imageText: "Parker Pens India",
    },
    {
      title: "Parker Pens India",
      headiing:
        "3D digital video commercial to increase digital traction for product awareness",
      para: "3D Modelling | 3D Animation | Creative Direction & Communication | Digital Video Commercial",
      image: sazShort,
      imageText: "Saz American Brasserie",
    },
    {
      title: "Saz American Brasserie",
      headiing:
        "Digital design and creative communication to engage the new-age digital media consumer",
      para: "Digital Design | Social Media Marketing | Creative Design & Communication",
      image: hm,
      imageText: "Hunkemöller India",
    },
  ];

  return (
    <>
     
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        slidesPerView={"auto"}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <div className="absolute top-40 lg:top-52 bottom-0 md:flex flex-row z-30 xl:px-20 md:mx-14 hidden">
          <div className="flex flex-col justify-center w-6/6 h-5/5">
            <p className="text-white text-xs pb-2 lg:text-base uppercase">
              0{ActiveIndex + 1}&nbsp;|&nbsp;
              {ActiveIndex === 0
                ? slideData[0].title
                : ActiveIndex === 1
                ? slideData[1].title
                : ActiveIndex === 2 && slideData[2].title}
            </p>
            <h1 className="text-white text-2xl lg:text-4xl xl:text-6xl w-5/6 SerifDisplayFont">
              {ActiveIndex === 0
                ? slideData[0].headiing
                : ActiveIndex === 1
                ? slideData[1].headiing
                : ActiveIndex === 2 && slideData[2].headiing}
            </h1>
            <p className="text-white text-sm lg:text-base xl:text-lg w-5/6 pt-3">
              {ActiveIndex === 0
                ? slideData[0].para
                : ActiveIndex === 1
                ? slideData[1].para
                : ActiveIndex === 2 && slideData[2].para}
            </p>
          </div>
          {/* <div className="flex flex-col md:mt-40 lg:mt-72 justify-center w-2/6 h-5/5">
            <div className="flex flex-row md:justify-start md:-mb-5 lg:-mb-10 -ml-5 z-10">
              <p className="md:text-xs lg:text-base text-white whitespace-nowrap pt-5 lg:pt-4">
                NEXT UP
              </p>
            </div>
            <img
              className="w-3/6 xl:w-4/6"
              src={
                ActiveIndex === 0
                  ? slideData[0].image
                  : ActiveIndex === 1
                  ? slideData[1].image
                  : ActiveIndex === 2 && slideData[2].image
              }
              alt="next up"
            />
            <p className="text-xs lg:text-base text-white w-3/5 uppercase">
              {ActiveIndex === 0
                ? slideData[0].imageText
                : ActiveIndex === 1
                ? slideData[1].imageText
                : ActiveIndex === 2 && slideData[2].imageText}
            </p>
          </div> */}
        </div>
        <div className="flex flex-row mt-0 justify-between pt-2 md:hidden">
          <p className="text-xs font-medium">
            {ActiveIndex === 0
              ? slideData[0].title
              : ActiveIndex === 1
              ? slideData[1].title
              : ActiveIndex === 2 && slideData[2].title}
          </p>
          <p className="text-xs font-medium">0{ActiveIndex + 1}/03</p>
        </div>
        <div className="md:hidden mt-5 flex flex-row justify-between z-30 xl:px-20 md:px-14">
          <div className="flex flex-col justify-center">
            <p className="text-black text-xs pb-2 lg:text-base uppercase">
              0{ActiveIndex + 1}&nbsp;|&nbsp;
              {ActiveIndex === 0
                ? slideData[0].title
                : ActiveIndex === 1
                ? slideData[1].title
                : ActiveIndex === 2 && slideData[2].title}
            </p>
            <h1 className="text-black text-3xl lg:text-5xl xl:text-7xl w-5/6 SerifDisplayFont">
              {ActiveIndex === 0
                ? slideData[0].headiing
                : ActiveIndex === 1
                ? slideData[1].headiing
                : ActiveIndex === 2 && slideData[2].headiing}
            </h1>
            <p className="text-black text-sm lg:text-base xl:text-lg w-5/6 pt-3">
              {ActiveIndex === 0
                ? slideData[0].para
                : ActiveIndex === 1
                ? slideData[1].para
                : ActiveIndex === 2 && slideData[2].para}
            </p>
          </div>
        </div>
        <SwiperSlide>
          <img src={hmShort} alt="hunkemoller" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={parker} alt="Parker" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sazShort} alt="Saz" width={"100%"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slide;
