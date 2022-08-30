import React from "react";
import { useCartContext } from "../context/CartContex";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import "./Checkout.css";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [idOrder, setIdOrder] = useState("");

  const order = {
    buyer: { name, tel, email },
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const refCollection = collection(db, "orders");

    addDoc(refCollection, order).then((res) => {
      setIdOrder(res.id);
    });
    clearCart();
  };

  return (
    <>
      {idOrder ? (
        " Felicidades! Gracias por tu compra! El Id de tu compra es: " + idOrder
      ) : (
        <div>
          <p>
            Ya casi terminas, ingrese sus datos para completar la compra!
            <br />
          </p>
          <div className="form">
            <input
              type={"text"}
              placeholder="nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <input
              type={"tel"}
              placeholder="celular"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
            <br />

            <input
              type={"email"}
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <br />
          </div>
          <div className="btn">
            <button onClick={handleClick}>Finalizar compra</button>
           
            <Link to="/">
              {" "}
              <button>Seguir comprando</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
