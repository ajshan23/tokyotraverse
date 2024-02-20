import React from 'react'
import './Addproduct.css'
import upload_area from "../../assets/upload_area.svg"
import { useState } from 'react'
import {PacmanLoader} from "react-spinners"
const Addproduct = () => {
    const [image,setImage]=useState(false)
    const [animate,setAnimate]=useState(false)
    const [product,setProduct]=useState({
        name:"",
        category:"naruto",
        price:"",
        product_code:""
    })

    const imageHandler=(e)=>{
        setImage(e.target.files[0]);
    }

    const changeHandler=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }
    const addProduct=async()=>{
        if ([product.name,product.category,product.price,product.product_code].some((elem)=>elem.trim()==="")) {
          alert("all fields are required")
          return null
        }
        if (!image) {
          alert("image required")
          return null
        }
        console.log(product);

        let responseData;
        setAnimate(true)
        let formData=new FormData();
        formData.append('product',image);
        formData.append('productcode',product.product_code);
        formData.append('price',product.price);
        formData.append('category',product.category);
        formData.append('name',product.name);
        
        await fetch('http://localhost:4000/api/v1/admin/addproduct',{
          method:"POST",
          headers:{
            Accept:"application/json"
          },
          body:formData,
        }).then((res)=>res.json()).then((data)=>responseData=data)
        .catch((err)=>alert("product code must be unique"))
        setAnimate(false)
        setProduct({
          name:"",
          category:"naruto",
          price:"",
          product_code:""
      })
        if (!responseData.success) {
          alert("product creation failed,product code must be unique")
          return null
        }
        alert("product added successfully")


    }
  return (
    <div  className='addproduct'>
      {animate?
        <PacmanLoader />
        :
        <>
        <div className="itemfield">
        <p>Product Title</p>
        <input type='text'name='name' placeholder='Type here' value={product.name} onChange={changeHandler}/>
      </div>
      <div className="price">
        <div className="itemfield">
            <p>Price</p>
            <input type='number' name='price' placeholder='Type here'value={product.price} onChange={changeHandler}/>
        </div>
        <div className="itemfield">
            <p>Product Code</p>
            <input type='number' name='product_code' placeholder='Type here' value={product.product_code} onChange={changeHandler}/>
        </div>
      </div>
      <div className='itemfield'>
        <p>Product Category</p>
        <select name="category" className='selector' value={product.category} onChange={changeHandler}>
            <option value="naruto">Naruto</option>
            <option value="aot">Attack On Titan</option>
            <option value="demonslayer">Demon Slayer</option>
            <option value="onepiece">One Piece</option>
            <option value="dragonballz">DragonBall Z</option>
        </select>
      </div>
      <div className='itemfield'>
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area} className='thumbnail-image' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
      </div>
      <button className='addproduct-btn' onClick={()=>addProduct()}>ADD</button>
        </>
      }
    </div>
  )
}

export default Addproduct
