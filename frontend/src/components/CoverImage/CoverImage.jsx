import React from "react";
import coverImg from "../../assets/coverimg2.png";
import { FaSearch } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
const CoverImage = () => {
  return (
    <div className="w-full h-[596px] bg-[#F01F26]">
      <div className="px-[120px] flex flex-row w-full  relative overflow-hidden">
        <div className="flex flex-col pt-32 gap-6 w-[50%] h-[596px]">
        <div className="border border-white w-[60%] h-10 rounded flex flex-row">
            <input
              type="text"
              className="pl-5 w-full outline-none border-none bg-transparent placeholder:text-white placeholder:opacity-95 text-white"
              placeholder="Search By Anime, Character, Size...."
            />
            <button>
              <FaSearch color="white" className="mx-6" />
            </button>
          </div>
          <div className="text-4xl z-10 font-semibold text-white font-lexend">
            UNLEASH YOUR OTAKU PASSION <br /> WITH EXCLUSIVE <br /> MERCHANDISE
          </div>
          <div>
          <Link to="#category" smooth>
            <div className="bg-white h-10 flex w-fit">
            
              <button className="px-[40px] text-[#F01F26] font-lexend font-bold">
                EXPLORE
              </button>
              
            </div>
            </Link>
          </div>
        </div>

        <img
        
          src={coverImg}
          alt=""
          className=" w-[879px] h-[556px] absolute right-16 scale-150 bottom-32"
        />
      </div>
    </div>
  );
};

export default CoverImage;
