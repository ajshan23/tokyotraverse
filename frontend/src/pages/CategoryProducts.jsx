import React, { useDebugValue, useEffect, useState } from "react";

import bg from "../assets/avatarback.png";
import {  FaSort } from "react-icons/fa";
import Product from "../components/Product/Product";
import { Link } from "react-router-dom";
const CategoryProducts = (props) => {
  // const aj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [products,setProducts]=useState()
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const getProducts = async () => {
    await fetch("/api/v1/users/category",{
      method:"POST",
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({category:props.tag})
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };
  useEffect(() => {
    getProducts();
    window.scrollTo(0,0)
  }, [])
  
  return (
    <div>
      <div
        className="aboutavatar relative w-full h-[260px] "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "260px",
        }}
      >
        <div className=" w-full h-full bg-[#F01F26] bg-opacity-80">
          <div className=" w-full h-full px-[120px] pb-6 flex flex-row font-lexend text-4xl font-bold text-white">
            
            <div className="pl-32 w-[30%]">
              <img src={props.img} alt="" className=" absolute w-[200px] " />
            </div>
            <div className="flex flex-col w-[70%] justify-center items-start">
              <div className="  font-mono pt-8 text-xl font-bold">
                {props.desc}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center  px-[120px] mb-10">
        {/* <div className="text-5xl  text-red-500 mt-9">NARUTO</div> */}
        {/* <div>
          <img src={narutoimg} alt="" className="w-60" />
        </div>
        <div className="text-sm text-gray-500 text-center ">
          Naruto is a Japanese manga series written and illustrated by Masashi
          Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who
          seeks recognition from his peers and dreams of becoming the Hokage,
          the leader of his village.
        </div> */}
        <div className="w-full h-full  flex flex-col py-10">
          <div className="flex flex-col justify-center items-center">
            <div className="text-3xl font-lexend mb-4">
              {props.name} PRODUCTS FOR YOU
            </div>
            <div className="mb-5">
              Find A Variety Of Your Favourite Anime Products
            </div>
            <div className="relative mb-4">
              <button
                className="flex justify-center items-center px-3 py-1 border-2 border-red-600  focus:outline-none focus:bg-red-600 focus:text-white"
                onClick={toggleDropdown}
              >
                Sort By <FaSort />
              </button>
              {isOpen && (
                <div className="absolute top-full mt-1 bg-white border-red-500 shadow-lg">
                  <ul>
                    <li
                      className="w-24 border-2 border-red-600 hover:bg-red-600 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Price
                    </li>
                    <li
                      className="w-24 border-2 border-red-600 hover:bg-red-600 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Latest
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="w-full text-end pb-1 font-mono">
              Showing 20 products out of 999
            </div>
          </div>
          <div className="border-y-2 border-red-500 ">
            <div className="my-8 grid grid-cols-4 gap-4 relative">
              {products && products.map((item, index) => (
                <>
                  {index % 4 == 0 && index !== 0 ? (
                    <div className=" bg-red-500 w-full h-[1px] col-span-4 my-4" />
                  ) : null}
                  <div
                    className={` p-4 flex justify-center items-center border-red-500 ${
                      index % 4 == 0 || index % 4 == 1 || index % 4 == 2
                        ? "border-r"
                        : ""
                    }`}
                  >
                    <Link to={`/product/${item.productcode}`} state={item} >
                    <Product name={item.name} image={item.image}/>
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
