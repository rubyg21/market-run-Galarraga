import React from "react";
import { useCartContext } from "../context/CartContex";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { MdOutlineSentimentVeryDissatisfied } from "react-icons/md";
import './Cart.css'



const Cart = () => {
  const { cart, totalPrice, totalProducts } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
<div className="ncarrito" >
<p>No hay elementos en el carrito ...</p>
        <MdOutlineSentimentVeryDissatisfied size="5rem" />
        <br></br>
        <Link to="/">
          {" "}
          <button>Ver productos</button>
        </Link>
</div>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}

      <p>
        TOTAL : $ {totalPrice()}
        <br />
      </p>
      <Link to="/checkout">
        {" "}
        <button>Emitir compra</button>
      </Link>
      <Link to="/">
        {" "}
        <button>Seguir comprando</button>
      </Link>
    </>
  );
};

export default Cart;
