import React from 'react'
import './ListProduct.css'
import { useState } from 'react'
import { useEffect } from 'react'
import cross_icon from "../../assets/cross_icon.png"
const ListProduct = () => {

  const [allProducts,setAllproducts]=useState()

  const fetchInfo=async()=>{
    await fetch('http://localhost:4000/api/v1/admin/getallproducts')
        .then((res)=>res.json())
        .then((data)=>{
          setAllproducts(data.products)
        })
        .catch(err=>console.log(err))
  }
  useEffect(()=>{
    fetchInfo();
  },[])

   const remove_product =async (id,code)=>{
      const confirmed = window.confirm("do you want to delete this product:",code);
      if (!confirmed) {
        return null
      }
    console.log(id)
    await fetch('http://localhost:4000/api/v1/admin/removeproductbyid',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo()
   }


  return (
    <div className='listproduct'>
      <h1>All Products List</h1>
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Product Code</p>
        <p>Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="allproducts">
        <hr />
        {allProducts && allProducts.map((product,index)=>{
          return<> <div key={index} className='format-main format'>
               <img src={product.image} alt="" className='pro-icon' />
               <p>{product.name}</p>
               <p>{product.productcode}</p>
               <p>{product.price}</p>
               <p>{product.category}</p>
               <img src={cross_icon} className='remove-icon' alt="" onClick={()=>{remove_product(product._id,product.productcode)}} />
          </div>
          <hr />
          </>
        })
        
        }
      </div>
    </div>
  )
}

export default ListProduct
