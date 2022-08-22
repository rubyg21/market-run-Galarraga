import React from "react";
import { useCartContext } from "../context/CartContex";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

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
    clearCart()
  };

//   if (cart.length === 0) {
//     return (
//       <>
//         <p>No hay elementos en el carrito ...</p>
//         <Link to="/">
//           {" "}
//           <button>Hacer las compras</button>
//         </Link>
//       </>
//     );
//   }

  return (
 <> 
      {idOrder ? (
        " Felicidades! Gracias por tu compra! El Id de tu compra es: " + idOrder 
        )
      
      : (
        <div>
      <p>
        Terminar compra, ingrese sus datos:
    <br />
      </p>
      <div>
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
      <button onClick={handleClick}>Finalizar compra</button>
      <br />
      <Link to="/">
        {" "}
        <button>Seguir comprando</button>
      </Link> 
      
      </div>
      
    
   )}

   </>
   )
}
 


export default Checkout;
