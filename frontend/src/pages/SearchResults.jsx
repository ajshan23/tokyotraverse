import React, { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import Product from "../components/Product/Product.jsx";
import bg from "../assets/avatarback.png";
import pic from "../assets/grouppic.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const SearchResults = () => {
  const [products, setProducts] = useState();
  const [searchItem, setSearchItem] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const sortByPrice=async()=>{
    let newProducts=products;
    await newProducts.sort((a,b)=>a.price - b.price)
    setProducts(newProducts)
  }
  const sortByDate=async()=>{
    let newProducts=products
    await newProducts.reverse();
    setProducts(newProducts)
  }
  const searchIt = async () => {
    await fetch("/api/v1/users/search", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search: searchItem }),
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.result));
  };
  const fetchinfo = async () => {
    await fetch("/api/v1/users/getallproducts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };
  const handleClick = () => {
    searchIt();
  };
  useEffect(() => {
    fetchinfo();
  }, []);

  return (
    <>
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
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                />
                <button onClick={handleClick}>
                  <FaSearch color="white" className="mx-6" />
                </button>
              </div>
              <div className="font-mono pt-8 font-bold">
                ELEVATE YOUR ANIME OBSESSION WITH PREMIUM MERCHANDISE AND
                COLLECTIBLES!
              </div>
            </div>
            <div className="pl-60">
              <img src={pic} alt="" className="w-[450px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full px-[120px] flex flex-col py-10">
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl font-lexend mb-4">ITEM YOU SEARCHED FOR</div>
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
                    className="w-24 border-2 border-red-600 hover:bg-red-600 cursor-pointer hover:text-white"
                    onClick={() =>{ setIsOpen(false);sortByPrice()}}
                  >
                    Price
                  </li>
                  <li
                    className="w-24 border-2 border-red-600 hover:bg-red-600 cursor-pointer hover:text-white"
                    onClick={() => {setIsOpen(false);sortByDate()}}
                  >
                    Latest
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="w-full text-end pb-1 font-mono">
            Showing {products ? products.length : "0"} products out of 999
          </div>
        </div>
        <div className="border-y-2 border-red-500 ">
          <div className="my-8 grid grid-cols-4 gap-4 relative">
            {products &&
              products.map((item, index) => (
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
                    <Link to={`/product/${item.productcode}`} state={item}>
                      <Product name={item.name} image={item.image} />
                    </Link>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
