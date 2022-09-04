import React from "react";
import { useCartContext } from "../context/CartContex";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState, useRef , useEffect } from "react";
import "./Checkout.css";
import { FcOk } from "react-icons/fc";


const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [idOrder, setIdOrder] = useState("");

  const [datosValidosEmail, setDatosValidosEmail] = useState(false);
  const [datosValidosTel, setDatosValidosTel] = useState(false);
  const [datosValidosName, setDatosValidosName] = useState(false);
  const errormail = useRef(null);
  const errortel = useRef(null);
  const errorname = useRef(null);
  const errorMailMsg = useRef(null);
  const errorTelMsg = useRef(null);
  const errorNameMsg = useRef(null);

  useEffect(() => {
    comprobarEmail();
    comprobarTel();
    comprobarName();
  }, [email, tel, name]);

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
//
const comprobarEmail = () => {
  const regexEmail = /\S+@\S+\.\S+/;
  if (email === "" || !regexEmail.test(email)) {
    errormail.current.classList.add("incorrecto");
    errorMailMsg.current.classList.remove("hide");
    setDatosValidosEmail(false);
    // console.log(datosValidosEmail);
  } else {
    errormail.current.classList.remove("incorrecto");
    errorMailMsg.current.classList.add("hide");
    setDatosValidosEmail(true);
    // console.log(datosValidosEmail);
    return true;
  }
};
const comprobarTel = () => {
  const regexTel = /^[0-9]+$/;
  if (tel.length <= 5 || !regexTel.test(tel)) {
    errortel.current.classList.add("incorrecto");
    errorTelMsg.current.classList.remove("hide");
    setDatosValidosTel(false);
  } else {
    errortel.current.classList.remove("incorrecto");
    errorTelMsg.current.classList.add("hide");
    setDatosValidosTel(true);
    return true;
  }
};
const comprobarName = () => {
  const regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/;
  if (name.length <= 3 || !regexName.test(name)) {
    errorname.current.classList.add("incorrecto");
    errorNameMsg.current.classList.remove("hide");
    setDatosValidosName(false);
  } else {
    errorname.current.classList.remove("incorrecto");
    errorNameMsg.current.classList.add("hide");
    setDatosValidosName(true);
    return true;
  }
};



  return (
    <>
      {idOrder ? (
        <div  className="order"> <h1>Felicidades!</h1> <h2>Gracias por tu compra! </h2>  El Id de tu compra es: {idOrder}
        <h5> Nos comunicaremos contigo para coordinar la entrega!</h5>
        <br />
        <br />
       <FcOk size="3rem" />
       <h1>Listo!</h1>
        
         </div>
        
      ) : (
        <div className="form">
          
          <h2>  Ya casi terminas, ingrese sus datos para completar la compra!</h2>
            <br />
          
          

            <div >
            <input type={"text"} ref={errorname} placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div  ref={errorNameMsg}>
           <h6> Tiene que tener mas de 4 caracteres</h6>
          </div>
          <div >
            <input type={"tel"} ref={errortel} placeholder="Telefono" value={tel} onChange={(e) => setTel(e.target.value)} />
          </div>
          <div  ref={errorTelMsg}>
           <h6> Ingrese solo numeros Minimo 6 caracteres</h6>
          </div>
          <div >
            <input ref={errormail} type={"email"} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div ref={errorMailMsg}>
            <h6>Por Favor ingrese un Formato de mail Correcto</h6>
          </div>

          
          <br></br>
          <div className="btn">
            <button disabled={!datosValidosEmail || !datosValidosName || !datosValidosTel} onClick={handleClick}>Finalizar compra</button>
           
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
