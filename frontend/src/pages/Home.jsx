import React from 'react'
import CoverImage from '../components/CoverImage/CoverImage'
import ProductsContainer from '../components/productsContainer/ProductsContainer'
import Category from '../components/category/Category'
import Offeres from '../components/offerse/Offeres'
const Home = () => {
  return (
    <div>
 
      <CoverImage/>
      <div id='category'><Category /></div>
      <ProductsContainer type="featured" heading="FEATURED PRODUCTS"/>
      <ProductsContainer type="latest" heading="LATEST ARRIVALS"/>
      <ProductsContainer type="fandom" heading="SHOP BY FANDOME"/>
      <Offeres/>
    </div>
  )
}

export default Home
