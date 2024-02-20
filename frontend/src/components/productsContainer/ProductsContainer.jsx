import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const ProductsContainer = (props) => {
  const [products, setProducts] = useState();

  const dispatch = useDispatch();
  const getLatest = async () => {
    await fetch("/api/v1/admin/getlatestproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.Latest));
  };
  const getFandom = async () => {
    await fetch("/api/v1/users/getfandom", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.fandom));
  };
  const getFeatured = async () => {
    await fetch("/api/v1/users/getfeatured", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.featured));
  };
  const getRelated = async () => {
    await fetch("/api/v1/users/relatedproducts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: props.category,
        mainproductid: props.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };
  useEffect(() => {
    if (props.type === "latest") {
      getLatest();
    }
    if (props.type === "related") {
      getRelated();
    }
    if (props.type === "fandom") {
      getFandom();
    }
    if (props.type === "featured") {
      getFeatured();
    }

    window.scrollTo(0, 0);
  }, [props.id]);

  return (
    <div className="pt-[40px] px-[120px] w-full flex flex-col justify-center items-center">
      <div className="flex flex-col w-full justify-center items-center relative">
        <div className="font-semibold text-3xl font-lexend pb-[27px] ">
          {props.heading}
        </div>
        <div className="pb-[14px]">
          Find A Variety Of Your Favourite Anime Products
        </div>
        <div className="w-full text-end pb-[12px]">View All</div>
      </div>
      <div className="border-b border-t border-[#F01F26] w-full py-[44px] flex flex-row justify-around items-center">
        {products &&
          products.map((item, index) => (
            <>
              <Link
                to={`/product/${item.productcode}`}
                state={item}
                key={index}
              >
                <Product name={item.name} image={item.image} id={item._id} />
              </Link>

              {index === 3 ? (
                <></>
              ) : (
                <div className={`h-64 border ${item} border-[#F01F26]`}></div>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
