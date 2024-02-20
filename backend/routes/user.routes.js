import { Router } from "express";
import { createCart, loadCart, loginUser, logoutUser, registerUser, removeCart ,finalSubmit} from "../controllers/user.controller.js";
import { getAllProducts, getFandom, getProductByCategroy, getRelated, getfeatured, searchProducts } from "../controllers/product.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router=Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/getallproducts").get(getAllProducts)
router.route("/getfandom").get(getFandom)
router.route("/getfeatured").get(getfeatured)
router.route("/search").post(searchProducts)
router.route("/category").post(getProductByCategroy)
router.route("/relatedproducts").post(getRelated)
router.route("/loadcart").post(verifyJWT,loadCart)
router.route("/createcart").post(verifyJWT,createCart)
router.route("/removecart").post(verifyJWT,removeCart)
router.route("/finalsubmit").post(verifyJWT,finalSubmit)
export default router;