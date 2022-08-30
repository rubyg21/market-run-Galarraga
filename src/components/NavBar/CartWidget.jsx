import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useCartContext } from "../../context/CartContex";
import "./CartWidget.css";

function CartWidget() {
  const { totalProducts } = useCartContext();

  return (
    <div className="Carrito">
      <HiShoppingCart size="2rem" />
      <span> {totalProducts() || ""} </span>
    </div>
  );
}

export default CartWidget;
