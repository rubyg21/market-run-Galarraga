import React from "react";
import { useState, useContext, useEffect } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cart"))) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((product) => {
        return product.id === item.id
          ? { ...product, quantity: product.quantity + quantity }
          : product;
      });
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      const newCart = [...cart, { ...item, quantity }];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalProducts = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const deleteAll = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
        deleteAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
