import React from "react";
import { useDispatch } from "react-redux";
import { addTocart, loadCart } from "../../features/ecomSlice";

const Product = ({image,id,name}) => {

  const dispatch=useDispatch()
  // const handleClick=async(e)=>{
  //   e.preventDefault();
   
  //  console.log(id);
  //  await fetch("/api/v1/users/createcart",{
  //   method:"POST",
  //   headers:{
  //     "Content-Type":"application/json"
  //   },
  //   body:JSON.stringify({productId:id})
  //  }).catch((err)=>console.log(err))
  //  await fetch("/api/v1/users/loadcart", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => dispatch(loadCart(data?.data)))
  //   .catch((err) => console.log(err));
  // }
  return (
    <div className="relative w-[236px] flex flex-col justify-between  group">
      <div className="relative group">
        <div className="w-[236px] h-[271px] flex justify-center items-center overflow-hidden"><img src={image} alt="" className=" w-full  group-hover:scale-105" /></div>
        
        <div className="absolute inset-x-0 bottom-0 bg-[#F01F26] text-white text-center py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          ADD TO BAG
        </div>
      </div>
      <div className='heading font-semibold text-sm pt-1'>{name}</div>
        <div className='text-sm pt-1'>simply dummy text of the printing and typesetting</div>
    </div>
  );
};

export default Product;
