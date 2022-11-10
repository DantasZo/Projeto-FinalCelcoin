
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../static/navbar";
import Aventura from "../../pages/aventura/";
import Home from "../../pages/home";
import SaberMais from "../../pages/aventura/saberMais";
import Cart from "../../pages/carrinho";
import CartContext from "../../Context";
import {useState } from "react";

function App() {
  const [cart, setCart]= useState([])
  return (
    <CartContext.Provider value={{cart, setCart}}>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aventura" element={<Aventura />} />
        <Route path="/livro/:id" element={<SaberMais />} />
        <Route path="/carrinho" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
