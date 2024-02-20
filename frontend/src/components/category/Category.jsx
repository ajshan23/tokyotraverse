import React from "react";
import Single from "./Single";
import naruto from "../../assets/naruto.png"
import dragonballz from "../../assets/dragonballz.png"
import onepiece from "../../assets/onepiece.png"
import demonslayer from "../../assets/demonslayer.png"
import aot from "../../assets/aot.png"
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="pt-[40px] px-[120px] w-full flex flex-col justify-center items-center">
      <div className="flex flex-col w-full justify-center items-center relative">
        <div className="font-semibold text-3xl font-lexend pb-[27px] ">
          CATEGORIES
        </div>
        <div className="pb-[14px]">
          Find A Variety Of Your Favourite Anime Products
        </div>
        <div className="w-full text-end pb-[12px]">View All Categories</div>
      </div>
      <div className="border-b border-t border-[#F01F26] w-full py-[44px] flex flex-row justify-around items-center">
        <Link to="/onepiece"><Single img={onepiece} name="ONE PEICE"/></Link>
        <div className="h-64 border border-[#F01F26]"></div>
        <Link to="/naruto"><Single img={naruto} name="NARUTO SHIPPUDEN"/></Link>
        
        <div className="h-64 border border-[#F01F26]"></div>
        <Link to="/demonslayer"><Single img={demonslayer} name="DEMON SLAYER"/></Link>
        
        <div className="h-64 border border-[#F01F26]"></div>
        <Link to="/aot"><Single img={aot} name="ATTACK ON TITAN"/></Link>
        
        <div className="h-64 border border-[#F01F26]"></div>
        <Link to="/dragonballz"><Single img={dragonballz} name="DRAGONBALL Z"/></Link>
        
        
      </div>
    </div>
  );
};

export default Category;
