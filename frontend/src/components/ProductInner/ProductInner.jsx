import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import { addTocart, loadCart } from "../../features/ecomSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProductInner = ({product}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleCart=async(e)=>{
    e.preventDefault();
    if (!localStorage.getItem("auth-token")) {
      navigate("/login")
      return
    }
    await fetch("/api/v1/users/createcart",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({productId:product._id})
     }).catch((err)=>console.log(err))
     await fetch("/api/v1/users/loadcart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(loadCart(data?.data)))
      .catch((err) => console.log(err));
    toast.success("added to cart")
  }
  return (
    <div className="pt-[40px] px-[120px] w-full flex flex-col justify-center items-center">
      <div className="w-full h-[420px] flex flex-row">
        <div className="w-[325px] h-full pr-[25px] border-r border-[#F01F26]">
          <div className="flex flex-col h-full w-full">
            <div className="h-[312px] w-full flex justify-center items-center">
              <img src={product.image} alt="" className="h-[318px]" />
            </div>
            <div className="h-full w-full flex flex-row">
              <div className="w-full  flex flex-row items-center">
                <img
                  src={product.image || ""}
                  alt=""
                  className="w-[73px] h-[62px] pr-[21px] border-r border-[#F01F26]"
                />

                <img
                  src={product.image || ""}
                  alt=""
                  className=" h-[62px] px-[21px] border-r border-[#F01F26]"
                />

                <img
                  src={product.image || ""}
                  alt=""
                  className="w-[73px] h-[62px] pl-[23px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full pl-[25px] flex flex-col">
          <div className="font-lexend text-2xl pb-[23px]">
            {product.name}
          </div>
          <div className="pl-[25px] pb-[27px]">
            <ul className="list-disc font-lexend text-sm text-slate-600">
              <li>
                Die cut from single wall high quality 40 BF imported kraft liner
              </li>
              <li>E Flute 2.1 mm wall thickness & 25 ECT construction</li>
              <li>
                Great for shipping, as subscription boxes, gift boxes, and
                e-commerce packaging
              </li>
              <li>Sustainably sourced & environmentally responsible</li>
              <li>Custom printed mailers: Print both outside & inside</li>
            </ul>
          </div>
          <div className="flex flex-row font-lexend pb-[25px]">
            <div className="flex flex-col pr-[52px] ">
              <h1 className="font-bold pb-[18px]">Product Code</h1>
              <p className=" text-slate-600">{product.productcode}</p>
            </div>
            <div className="flex flex-col  pr-[52px]">
              <h1 className="font-bold pb-[18px]">Colour</h1>
              <div className="flex flex-row ">
                <div className="px-[24px] py-[8px] border-2  border-[#F01F26] mr-[8px]">
                  Black
                </div>
                <div className="px-[24px] py-[8px] border-2 border-[#F01F26] mr-[8px]">
                  Red
                </div>
                <div className="px-[24px] py-[8px] border-2 border-[#F01F26]">
                  Gray
                </div>
              </div>
            </div>
            <div className="flex flex-col  pr-[52px]">
              <h1 className="font-bold pb-[18px]">Sizes Available</h1>
              <div className="flex flex-row ">
                <div className="px-[24px] py-[8px] border-2  border-[#F01F26] mr-[8px]">
                  S
                </div>
                <div className="px-[24px] py-[8px] border-2 border-[#F01F26] mr-[8px]">
                  M
                </div>
                <div className="px-[24px] py-[8px] border-2 border-[#F01F26]">
                  L
                </div>
              </div>
            </div>
            
          </div>
          <div className="flex flex-col">
            <div className="priceandrating flex flex-row gap-3">
              <div className="font-lexend text-2xl font-bold">${product.price}</div>
              <div className="px-3 py-[2px] bg-[#F3D431] text-white rounded-full flex flex-row justify-center items-center">
                <IoMdStar />
                &nbsp;4.5
              </div>
            </div>
            <div className="redtext font-lexend text-[#f01f20] text-sm">
              Note:Custom printing & sizes available .Call for details.
            </div>
            <div className="freedelivery text-sm text-[#666666]">
              Free delivery
            </div>
          </div>
          <div className="finaldiv flex flex-row w-full  justify-between">
            <div className="flex flex-row gap-5 mt-4 font-semibold">
              <button className="addtocart py-[14px] px-[44px] border-2 border-red-600 text-red-600" onClick={handleCart}>
                Add To Bag
              </button>
              <div className="buynow  py-[14px] px-[44px] border-2 border-green-600 text-green-600">BUY NOW</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="pl-1">
                <CiShare2 size={30} />
              </div>
              <div className="text-[#66666]">Share</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b  border-[#F01F26] w-full pb-[44px] flex flex-row justify-around items-center"></div>
    </div>
  );
};

export default ProductInner;
