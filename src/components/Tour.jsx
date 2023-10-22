import React from "react";
import TourCard from "../layouts/TourCard";
import img1 from "../assets/img/dest1.jpg";
import img2 from "../assets/img/dest2.jpg";
import img3 from "../assets/img/dest3.jpg";

const Tour = () => {
  return (
    <div className=" flex flex-col justify-center md:mx-32 pt-32 pb-20">
      <h1 className=" font-semibold text-center text-4xl lg:mt-0 mt-16">Most Popular Destinatons</h1>

      <div className=" container flex flex-col gap-5 md:flex-row pt-10">
        <TourCard
          img={img1}
          title="Paris, France"
          para="Paris offers iconic landmarks like the Eiffel Tower and World-class art at the Louvre Museum."
        />
        <TourCard
          img={img2}
          title="Dubai, UAE"
          para="A city of superlatives, Dubai boasts towering skyscrapers, luxury shopping, and dessert adventures."
        />
        <TourCard
          img={img3}
          title="Venice, Italy"
          para="Explore the lovely canals and historic architecture of Venice  Italy, a city built on water."
        />
      </div>
    </div>
  );
};

export default Tour;
