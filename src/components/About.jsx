import React from "react";
import Button from "../layouts/Button";
import {Link} from "react-router-dom";
import img from "../assets/img/about.jpg";

const About = () => {
    const backgroundColor = 'bg-white';
  return (
    <div className="container min-h-screen flex flex-col justify-center lg:flex-row items-center md:px-32 px-5 bg-darkBackground gap-10">
      <div className=" w-full lg:w-2/4 space-y-4">
        <h1 className=" font-semibold text-4xl text-white leading-tight">
          At WonderTours, We are ready to provide you with the best trip of your
          Life!
        </h1>

        <p className=" text-[#bdbdbd] pb-5">Your dream vacation awaits, and we're here to make it a rality.</p>

        <Link to="/Contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Now" backgroundColor={backgroundColor}/>
        </Link>
      </div>
      <div className=" w-full lg:w-2/4">
        <img src={img} alt="img" className=" rounded-2xl" />
      </div>
    </div>
  );
};

export default About;
