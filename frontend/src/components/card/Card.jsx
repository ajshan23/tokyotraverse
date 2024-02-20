import React from "react";

const Card = (props) => {
  return (
    <div className="w-[582px] h-[346px]  " style={{ backgroundImage: `url(${props.imageurl})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '346px' ,width:"582px"}}>
      <div className={`w-full h-full flex flex-row justify-between`}>
        <div className=" w-[50%] flex flex-col pt-[49px] pl-[56px]  text-white">
          <div className="pb-[25px]">
            <div className="px-1 py-1 text-lg w-fit font-bold bg-[#F01F26]">
              NEW ARRIVAL
            </div>
          </div>
          <div className="font-semibold text-2xl pb-[25px]">Monkey D. RUffy Shirt - Navy / S</div>
          <div className="pb-[28px]">only on   $169</div>
          <div className="w-[183px] h-[50px]">
            <button className="px-[36px] py-[14px] text-xl font-semibold bg-[#F01F26] rounded">
              CHECKOUT
            </button>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src={props.img} alt="" className="w-[226px] h-[209px]" />
        </div>
      </div>
    </div>
  );
};

export default Card;
