import emailjs from 'emailjs-com'
import React, { useState } from "react";
import Textra from "react-textra";
import Circletext from "../components/Circletext";
import ExpandingArrow from "../components/ExpandingArrow";
import Marquee from "react-fast-marquee";
import GridWorks from "../components/GridWorks";
import Slider from "react-slick";
import useWindowDimensions from "../util/windows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pentonic from "../assets/Pentonic.png";
import Saz from "../assets/Saz.png";
import ParkerLogo from "../assets/ParkerLogo.png";
import Hunkemoller from "../assets/hunkemoller.png";
import DND from "../assets/DND.png";
import EventzInspired from "../assets/EventzInspired.png";
import GyanJaipur from "../assets/GyanJaipur.png";
import Krunkk from "../assets/Krunkk.png";
import Linc from "../assets/Linc.png";
import Pilot from "../assets/Pilot.png";
import Billions from "../assets/Billions.png";
import Luxor from "../assets/Luxor.png";
import Notes from "../components/Notes";
import Slide from "../components/Slide";
import Services from "../components/Services";
import ooo from "../assets/ooo_logo.png";
import Comingsoon from "../components/Comingsoon";
import FeaturedWork from "../components/FeaturedWork";
import InstaFeeds from '../components/InstaFeeds';
import Cards from '../components/Cards'
import TypeWriterEffect from 'react-typewriter-effect';


const Home = () => {
  //emailjs
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_yx0ztt7', 'template_2ajhc9p', e.target, 'c-xKwcaHuwJG9-S7C')
      .then(res => {
        console.log(res);
      }).catch(err => console.log(err));
  };
  const { height, width } = useWindowDimensions();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: width > 1000 ? 9 : width / 100,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: width > 1000 ? 9 : width / 100,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    rtl: true,
  };
  const [Note, setNote] = useState(true);

  return (
    <div className="Wrapper flex flex-col lg:pt-10">
      {Note && <Notes setNote={setNote} Note={Note} />}
      
      <div className="hero flex flex-col justify-center mb-0 px-6 md:px-10 pt-20 pb-14">
        <div className="">
          <h1 className="hero-text">We design and build</h1>
          <h1 className="hero-text SerifDisplayFont">
            <Textra
              effect="topDown"
              data={[
                "Campaigns",
                "Activations",
                "Strategy",
                "Content",
                "Aesthetic",
              ]}
            />
          </h1>
        </div>
        <div className="w-6/6 flex flex-col-reverse md:flex-row md:justify-between md:items-start pt-2 md:pt-0">
          <div className="w-6/6 md:w-3/6 lg:w-1/6 flex flex-row justify-between md:flex-col-reverse pt-3">
            <div className="md:w-2/6 h-20 -mt-4 lg:mt-12">
              <Circletext text="LET'S BUILD &#8226; LET'S BUILD &#8226;" />
            </div>
            <div className="flex flex-row w-3/6 justify-end md:justify-start">
              <p className="text-xs md:text-lg whitespace-nowrap pt-4">
                VIEW OUR SERVICES
              </p>
              <ExpandingArrow color="black" />
            </div>
          </div>
          <div className="w-6/6 md:w-4/6 lg:w-4/6">
            <h1 className="hero-text text-right">
              for the most <span className="lg:block">ambitious brands </span>
              <span className="lg:block">of tomorrow </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="slide-marquee">
        <Marquee
          className="text-base md:text-xl lg:text-2xl xl:text-2xl pb-2 items-start"
          gradient={false}
          loop={0}
          delay={0}
          speed={40}
          direction="right"
        >
          &nbsp;FEATURED • FEATURED • FEATURED • FEATURED • FEATURED • FEATURED
          • FEATURED • FEATURED • FEATURED • FEATURED • FEATURED • FEATURED •
          FEATURED • FEATURED • FEATURED •{" "}
        </Marquee>
        <Slide />
      </div>
      <div className="my-20">
        {/* <Services /> */}
        {/* <TypeWriterEffect
          textStyle={{
            fontFamily: 'Red Hat Display',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '75px',
            marginBottom: '20px'
          }}
          startDelay={100}
          cursorColor="black"
          text="OUR SERVICES"
          typeSpeed={100}
        /> */}
        <div
          className="px-6 md:px-10 flex flex-row justify-between"
        >
          <div className='our_services'>
          <div className="text-8xl w-1/2 self-center">
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
          </div>
          </div>
          <Cards />
        </div>
        <div className=" flex flex-row items-center md:gap-x-10 justify-start md:justify-between md:items-end mx-6 md:mx-10 mt-24 flex-wrap">
          <div className="flex flex-col">
            <div className="">
              <h1 className="work-text">Recent</h1>
              <h1 className="work-text SerifDisplayFont">Work</h1>
            </div>
            <div className="flex flex-row md:w-3/6 justify-start">
              <p className="uppercase text-xs md:text-lg whitespace-nowrap pt-4">
                see our portfolio
              </p>
              <ExpandingArrow color="black" />
            </div>
          </div>
          <GridWorks />
        </div>
        <div
          style={{ height: "90vh" }}
          className="px-6 flex flex-col justify-center"
        >
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl pb-20">
            Coming together is a beginning, staying together is progress, and
            working together is success.
          </p>
          <Slider {...settings}>
            <img
              src={ParkerLogo}
              alt="Parker"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img
              src={Billions}
              alt="Billions"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img src={DND} alt="DND" className="px-2 sm:px-3 md:px-4 lg:px-6" />
            <img
              src={EventzInspired}
              alt="Eventz"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img
              src={GyanJaipur}
              alt="Gyan Jaipur"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img
              src={Hunkemoller}
              alt="Hunkemoller"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img
              src={ParkerLogo}
              alt="Parker"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img
              src={Billions}
              alt="Billions"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img src={DND} alt="DND" className="px-2 sm:px-3 md:px-4 lg:px-6" />
            <img
              src={EventzInspired}
              alt="Eventz"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img
              src={GyanJaipur}
              alt="Gyan Jaipur"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img
              src={Hunkemoller}
              alt="Hunkemoller"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
          </Slider>
          <Slider {...settings2} className="pt-20">
            <img
              src={Krunkk}
              alt="krunkk"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img src={Linc} alt="Linc" className="px-2 sm:px-3 md:px-4 lg:px-6" />
            <img
              src={Luxor}
              alt="Luxor"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img
              src={Pentonic}
              alt="Pentonic"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img
              src={Pilot}
              alt="Pilot"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img src={Saz} alt="Saz" className="px-2 sm:px-3 md:px-4 lg:px-6" />
            <img
              src={Krunkk}
              alt="krunkk"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img src={Linc} alt="Linc" className="px-2 sm:px-3 md:px-4 lg:px-6" />
            <img
              src={Luxor}
              alt="Luxor"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img
              src={Pentonic}
              alt="Pentonic"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img
              src={Pilot}
              alt="Pilot"
              className="px-2 sm:px-3 md:px-4 lg:px-6"
            />
            <img src={Saz} alt="Saz" className="px-2 sm:px-3 md:px-4 lg:px-6" />
          </Slider>
        </div>
        <div className="px-6 md:px-10">
          <div className="border-t-2 border-t-black pt-10 flex flex-row justify-start gap-x-10 sm:gap-x-20">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Next Up
            </p>
            <div className="">
              <div>
                <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl cursor-pointer hover:pl-7 w-2">
                  Services
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl cursor-pointer hover:pl-7 w-2">
                  Work
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl cursor-pointer hover:pl-7 w-2">
                  Contact
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl cursor-pointer hover:pl-7 w-2">
                  Clients
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl cursor-pointer hover:pl-7 w-2">
                  Featured
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl cursor-pointer hover:pl-7 w-2">
                  Career
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-10 py-10 md:py-20 lg:py-34 flex flex-row justify-center">
          <form onSubmit={sendEmail} className="LandingForm flex flex-col items-center text-lg">
            <input type="text" id='input1' placeholder="Enter email address" name='email' required></input>
            <input type="text" id='input2' placeholder="Let's talk!" name='message' required></input>
            {/* <div
            
              style={{ backgroundColor: "#DEFF00" }}
              className="uppercase absolue px-5 py-3 bottom-0 cursor-pointer hover:-rotate-3 shadow-md"
            >
              get in touch
            </div> */}
            <button
              style={{ backgroundColor: "#f2f626", marginTop: '30px' }}
              className="uppercase absolue px-5 py-3 bottom-0 cursor-pointer hover:-rotate-3 shadow-md"
              type="submit"
            >
              get in touch
            </button>
          </form>
        </div>
        {/* <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={8}/>       */}
        <div className="workTogether my-10 -ml-20">
          <Marquee
            className="text-xl md:text-2xl lg:text-4xl xl:text-5xl pb-2 items-start"
            gradient={false}
            loop={0}
            delay={0}
            speed={40}
            direction="right"
          >
            &nbsp;LET'S WORK TOGETHER. LET'S WORK TOGETHER. LET'S WORK TOGETHER.
            LET'S WORK TOGETHER. LET'S WORK TOGETHER. LET'S WORK TOGETHER. LET'S
            WORK TOGETHER. LET'S WORK TOGETHER. LET'S WORK TOGETHER.{" "}
          </Marquee>
        </div>
        <div className="Footer flex flex-row justify-evenly items-center bg-black text-white h-12">
          <p className="cursor-pointer">Instagram</p>
          <p className="cursor-pointer">Facebook</p>
          <p className="cursor-pointer">Twitter</p>
          <p className="cursor-pointer">LinkedIn</p>
        </div>
      </div>
      </div>
      );
};

      export default Home;














