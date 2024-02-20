import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// const adminLogin = asyncHandler(async (req, res) => {
//   const { email, password } = req?.body;
//   if (!email.trim() === "" && !password.trim() === "") {
//     throw new ApiError(404, "both fields are required!!!");
//   }

//   if (!email === "admin@this.com" || !email === "admin123") {
//     throw new ApiError(404, "login credentials is not valid");
//   }
//   const data = {
//     admin: {
//       email: email,
//     },
//   };
//   const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);

//   return res.status(200).json(
//     new ApiResponse(
//       200,
//       {
//         admin: "admin1",
//         accessToken,
//       },
//       "admin logged in successfully"
//     )
//   );
// });

const createProduct = asyncHandler(async (req, res) => {
  const { productcode, name, category, price } = req.body;
  if (
    [productcode, name, category, price].some(
      (field) => field.trim() === ""
    )
  ) {
    throw new ApiError(400, "all details are required.");
  }
  const check=await Product.find({
    productcode:productcode,
  })
  if(!check){
    return res.status(400).json(new ApiResponse(400,check,"product already available on the product code"))
  }
  const productImageLocalPath=req.files.product[0]?.path
  if (!productImageLocalPath) {
    throw new ApiError(400,"product image missing")
  }
  const productImage=await uploadOnCloudinary(productImageLocalPath)

  if (!productImage.url) {
    throw new ApiError(400,"no url found on cloudinary,server crashed while uploading it to clodinary")   
  }

  const product = await Product.create({
    productcode,
    name,
    category,
    price,
    image:productImage.url,
  });
  if (!product) {
    throw new ApiError(400,"product creation failed")
  }
  return res.status(200).json(new ApiResponse(200,product,"product created successfully"))
});

const getAllProducts=asyncHandler(async(req,res)=>{
    const products= await Product.find({})
    // console.log(products);
    if(!products ){
        throw new ApiError(400,"no products found")
    }
    return res.status(201).json({
        products:products
    })
})

const removeProductByid=asyncHandler(async(req,res)=>{
  const {id}=req.body
  if (!id) {
    throw new ApiError(400,"id not found")
  }

  await Product.findByIdAndDelete(id)
  .then((res)=>res.json())
  .then((data)=>console.log(data))
  .catch((err)=>console.log("Error occured at removeproduct"))
  
  return res.status(202).json({
    success:true,
    message:"deleted successfully"
  })
})

const getLatestProducts=asyncHandler(async(req,res)=>{
  let products=await Product.find({})
  let Latest=products.slice(1).slice(-4)
  console.log("New Collection fetched");
  return res.status(201).json({
    Latest:Latest,
})
})

const getProductByCategroy=asyncHandler(async(req,res)=>{
  const {category}=req?.body

  if(!category){
      throw new ApiError(400,"category field is required to fetch products based on categroy search")
  }
  const products=await Product.find({
      category:category
  })
  if (!products) {
      throw new ApiError(400,`no items found on the category: ${category}`)
  }

  return res.status(201).json({
      products:products,
  })
})

const searchProducts=asyncHandler(async(req,res)=>{
  const {search}=req.body
  if (!search) {
    throw new ApiError(400,"search element required")
  }
  const products=await Product.find({
    name:{
      $regex:search,
      $options:"i"
    }
  })
  return res.json(
    {
      result:products
    }
  )
})

const getRelated=asyncHandler(async(req,res)=>{
  const {category,mainproductid}=req?.body
  if (!category || !mainproductid) {
    throw new ApiError(400,"Category is required")
  }

  const products=await Product.find({
    _id:{
      $ne:mainproductid,
    },
    category:category
}).limit(4)
if (!products) {
    throw new ApiError(400,`no items found on the category: ${category}`)
}


return res.status(201).json({
    products:products,
})
})

const getFandom=asyncHandler(async(req,res)=>{
  let products=await Product.find({}).limit(18)
  let fandom=products.slice(8,12)
  console.log("fandom fetched");
  return res.status(201).json({
    fandom:fandom,
})
})

const getfeatured=asyncHandler(async(req,res)=>{
  let products=await Product.find({}).limit(26)
  let featured=products.slice(0,4)
  console.log("featured fetched");
  return res.status(201).json({
    featured:featured,
})
})



export {createProduct,getAllProducts,removeProductByid,getLatestProducts,getProductByCategroy,searchProducts,getRelated,getFandom,getfeatured}