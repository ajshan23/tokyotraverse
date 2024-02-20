import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import SearchResults from "./pages/SearchResults.jsx";

import Products from "./pages/Products.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import { LoginSignup } from "./pages/LoginSignup.jsx";
import Cart from "./pages/Cart.jsx";
import CategoryProducts from "./pages/CategoryProducts.jsx";
import naruto from "./assets/naruto.png";
import dragonballz from "./assets/dragonballz.png"
import onepiece from "./assets/onepiece.png"
import demonslayer from "./assets/demonslayer.png"
import aot from "./assets/aot.png"
import { Toaster } from "react-hot-toast";
const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<SearchResults />} />
          <Route path="/product" element={<Products />}>
            <Route path=":productId" element={<Products />} />
          </Route>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route
            path="/naruto"
            element={
              <CategoryProducts
                name="NARUTO"
                tag="naruto"
                img={naruto}
                desc="Naruto is a Japanese manga series written and illustrated by
                Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young
                ninja who seeks recognition from his peers and dreams of
                becoming the Hokage, the leader of his village."
              />
            }
          />
          <Route
            path="/onepiece"
            element={
              <CategoryProducts
                name="ONE PEICE"
                tag="onepiece"
                img={onepiece}
                desc="Premise. The series focuses on Monkey D. Luffy—a young man made of rubber after unintentionally eating a Devil Fruit—who sets off on a journey from the East Blue Sea to find the deceased King of the Pirates Gol D. Roger's ultimate treasure known as the One Piece, and take over his prior title.."
              />
            }
          />
          <Route
            path="/demonslayer"
            element={
              <CategoryProducts
                name="DEMON SLAYER"
                img={demonslayer}
                tag="demonslayer"
                desc="A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister."
              />
            }
          />
          <Route
            path="/aot"
            element={
              <CategoryProducts
                name="ATTACK ON TITAN"
                img={aot}
                tag="aot"
                desc="A teenage boy named Eren Jaeger must use his special gift to fight alongside with the military to defeat the titan race. Mankind is on the brink of extinction when these man-eating monsters terrorize everybody and set to destroy the last of human civilization left in the world."
              />
            }
          />
          <Route
            path="/dragonballz"
            element={
              <CategoryProducts
                name="DRADONBALL Z"
                img={dragonballz}
                tag="dragonballz"
                desc="Dragon Ball Z follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil. Dragon Ball Z teaches valuable character virtues such as teamwork, loyalty, and trustworthiness.."
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
        <div id="contact"><Footer /></div>
      </BrowserRouter>
    </div>
  );
};
export const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center text-7xl font-lexend text-red-500">
      404 not found
    </div>
  );
};

export default App;
