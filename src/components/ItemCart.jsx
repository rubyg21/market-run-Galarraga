import React from "react";
import "./ItemCart.css";

import { useCartContext } from "../context/CartContex";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();

  return (
    <div className="itemCart">
      <img src={product.pictureUrl} alt={product.title} />
      <div>
        <p> Titulo: {product.title} </p>
        <p> Cantidad: {product.quantity} </p>
        <p> Precio unitario :$ {product.price} </p>
        <p> Subtotal: $ {product.quantity * product.price} </p>
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
