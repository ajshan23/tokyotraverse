import React from "react";
import Card from "../card/Card";
import tshirt from "../../assets/blacktshirt.png";
import about from "../../assets/about.png";
import Carousel from "./Carousel";
const Offeres = () => {
  return (
    <div className="pt-[40px] px-[120px] w-full flex flex-col justify-center items-center">
      <div className="flex flex-col w-full justify-center items-center relative">
        <div className="font-semibold text-3xl font-lexend pb-[27px] ">
          OFFERS
        </div>
        <div className="pb-[14px]">
          Find a variety of your favourite anime products
        </div>
        <div className="w-full text-end pb-[12px]">View All</div>
      </div>
      <div className="border-t  border-[#F01F26] w-full py-[44px] flex flex-row justify-around items-center">
        <Card img={tshirt}  imageurl="https://res.cloudinary.com/djmvsz8em/image/upload/v1706952825/apqmu3qra1qmcyhspu82.png"/>
        <Card img={tshirt} imageurl="https://res.cloudinary.com/djmvsz8em/image/upload/v1706952825/qkdmqzki8jlf4gv2sop7.png" />
      </div>
      <div className="border-b  border-[#F01F26] pb-[44px]">
        <Carousel />
      </div>
      <div className="border-b border-[#F01F26] pb-[44px]">
        <img src="https://res.cloudinary.com/djmvsz8em/image/upload/v1706952825/de4vgzckdg19wxewhjh0.png" alt="" />
      </div>
      <div className="pb-[44px]">

      </div>
    </div>
  );
};

export default Offeres;
