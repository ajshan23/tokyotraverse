import React from "react";
import bg from "../../assets/avatarback.png";
import pic from "../../assets/grouppic.png";
import { FaSearch } from "react-icons/fa";
const CoverImage2 = () => {
  return (
    <div
      className="aboutavatar w-full h-[260px] "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "260px",
      }}
    >
      <div className=" w-full h-full bg-[#F01F26] bg-opacity-80">
        <div className=" w-full h-full px-[120px] pb-6 flex flex-row font-lexend text-4xl font-bold text-white">
          <div className="flex flex-col w-[50%] justify-center items-start">
            <div className="border-2 border-white font-normal text-base w-[60%] h-10 rounded flex flex-row">
              <input
                type="text"
                className="pl-5 w-full outline-none border-none bg-transparent placeholder:text-white placeholder:opacity-95 text-white"
                placeholder="Search By Anime, Character, Size...."
              />
              <button>
                <FaSearch color="white" className="mx-6" />
              </button>
            </div>
            <div className="font-mono pt-8 font-bold">
                ELEVATE YOUR ANIME OBSESSION WITH PREMIUM MERCHANDISE AND COLLECTIBLES!
            </div>
          </div>
          <div className="pl-60">
            <img src={pic} alt="" className="w-[450px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverImage2;
