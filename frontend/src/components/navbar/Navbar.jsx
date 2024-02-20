import React, { useEffect, useState } from "react";
import { FaHeart, FaUser } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { HashLink as Linkh } from "react-router-hash-link";
import toast from "react-hot-toast";
import { addTocart, loadCart, setCart } from "../../features/ecomSlice";
const Navbar = () => {
  const cart = useSelector((state) => state.cart)
  const [menu, setMenu] = useState("home");
  const place = useLocation();
  const dispatch = useDispatch();
  const [user, setUser] = useState(localStorage.getItem("auth-token"));
  const [num, setNum] = useState(false);
  const navigate = useNavigate();

 
  const handleClick = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    await fetch("https://tokyo-traverse.onrender.com/api/v1/users/logout", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.removeItem("auth-token");
      })
      .catch((err) => toast.error(err));
    setNum(!num);
    dispatch(setCart("data"))
  };
  useEffect( () => {
    setUser(localStorage.getItem("auth-token"));
    if (user) {
      let aj=async() => {
        await fetch("https://tokyo-traverse.onrender.com/api/v1/users/loadcart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => dispatch(loadCart(data?.data)))
          .catch((err) => console.log(err));
      };
      aj()
    }
  
  }, [num]);

  return (
    <>
      {place.pathname === "/login" || place.pathname === "/singup" ? (
        <></>
      ) : (
        <div className="  flex flex-col justify-center items-center w-full h-[71px] border border-black">
          <div className="py-[27px] flex flex-row w-full px-[120px] justify-between">
            <div className="font-lexend  text-2xl font-semibold flex">
              <div className="text-[#F01F26]">TOKYO</div>
              <div>TRAVERESE</div>
            </div>
            <div className="flex flex-row gap-[58px] justify-center items-center">
              <div className="flex gap-[18px] font-lexend text-sm font-light">
                <div
                  className={`group hover:text-[#F01F26] ${
                    menu === "home" ? "text-[#F01F26]" : ""
                  }`}
                  onClick={() => setMenu("home")}
                >
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </div>
                <div
                  className={`group hover:text-[#F01F26] ${
                    menu === "products" ? "text-[#F01F26]" : ""
                  }`}
                  onClick={() => setMenu("products")}
                >
                  <Link to="/products" style={{ textDecoration: "none" }}>
                    Products
                  </Link>
                </div>
                <div
                  className={`group hover:text-[#F01F26] ${
                    menu === "about" ? "text-[#F01F26]" : ""
                  }`}
                  onClick={() => setMenu("about")}
                >
                  <Link to="/about" style={{ textDecoration: "none" }}>
                    About
                  </Link>
                </div>
                <div
                  className={`group hover:text-[#F01F26] ${
                    menu === "contact" ? "text-[#F01F26]" : ""
                  }`}
                >
                  <Linkh
                    to="#contact"
                    style={{ textDecoration: "none" }}
                    smooth
                  >
                    Contact
                  </Linkh>
                </div>
                <div className="group hover:text-[#F01F26]">ENG</div>
              </div>
              <div className="flex gap-[18px] justify-center items-center">
                <div>
                  <FaHeart size={20} color="#F01F26" />
                </div>
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <div className="flex relative">
                    <IoBagHandle size={20} color="#F01F26" className="z-10" />
                    <div className="absolute w-4 h-4 bg-[#AA0D20] rounded-full -right-2 -top-1 z-0"></div>
                    <div className="absolute text-white -right-1 -top-1 text-xs">
                      {cart.length}
                    </div>
                  </div>
                </Link>

                <button
                  className="px-8 py-2 border-2 font-lexend text-[#F01F26] border-[#F01F26] rounded-full"
                  onClick={handleClick}
                >
                  {!user ? "login" : "logout"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
