import React from "react";
import Button from "../layouts/Button";
import {Link} from "react-router-dom";
import img from "../assets/img/hero.jpg"

const Home = () => {
    
const backgroundColor = 'bg-brightColor';
  return (
    <div className=" container flex flex-col items-center gap-10 md:flex-row pt-32 pb-20" >
      <div className=" flex flex-col text-center lg:text-start gap-5">
        <h1 className=" font-semibold text-5xl leading-tight">Journey To Explore World</h1>

        <p>
          With 'WonderTour' you can experience new travel and the best tourist 
          destinations that we have to offer!
        </p>
        <div className=" lg-pl-24">
            <Link to="/Tour" spy={true} smooth={true} duration={500}> 
            <Button title="Tours" backgroundColor={backgroundColor}/>
            </Link>
        </div>
      </div>
      <div className=" mt-14 lg:mt-0 w-full lg:w-4/5" >
        <img src={img} alt="img" className=" rounded-full"/>
      </div>
    </div>
  );
};

export default Home;
