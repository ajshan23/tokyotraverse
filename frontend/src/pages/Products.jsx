import ProductsContainer from "../components/productsContainer/ProductsContainer.jsx";
import ProductInner from "../components/ProductInner/ProductInner.jsx";
import Description from "../components/Description/Description.jsx";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Products = () => {

  const location=useLocation()
  const data=location.state;
  
  return (
    <div>
      <ProductInner product={data}/>
      <ProductsContainer heading="Related Products" type="related" category={data.category} id={data._id}/>
      <Description />
    </div>
  );
};

export default Products;
