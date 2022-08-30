import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";
import Checkout from "./components/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContex";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
