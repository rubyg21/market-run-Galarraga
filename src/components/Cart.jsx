import React from 'react'
import { useCartContext } from '../context/CartContex'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import  { useState, useEffect } from 'react';


const Cart = () => {

const { cart, totalPrice } = useCartContext();

const [name, setName] = useState('');
const [tel, setTel] = useState('');
const [email, setEmail] = useState('');
const [idOrder, setIdOrder] = useState('');


const order = {
  buyer: { name, tel, email },
  items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity:  product.quantity })),
  total: totalPrice(),
}

const handleClick = () =>{

  const db = getFirestore();
  const refCollection = collection(db, 'orders');

  addDoc(refCollection, order)
  .then((res) => {
    setIdOrder(res.id);
  });


}

if (cart.length === 0) {
  return (
    <>
      <p>No hay elementos en el carrito ...</p>

        
      <Link to='/'> <button>Hacer las compras</button></Link>
    </>
  )
}


  return (
    <>
    {
    cart.map(product => <ItemCart key={product.id} product={product} />)
    }

    <p>



      TOTAL : $ {totalPrice()}
      <br />
    </p>
    
    <div style={{ backgroundColor: 'lightgray' }}>
      <input type={'text'} placeholder="nombre" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
    
      <input type={'tel'} placeholder="celular" value={tel} onChange={(e) => setTel(e.target.value)} />
      <br />
      
      <input type={'email'} placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
    
      
      <p>Id de tu compra es: {idOrder}</p>
      <br />
    </div>
     <button onClick={handleClick} >Emitir compra</button>
   
    </>
  )
}

export default Cart


{/* <Link to='/'> Hacer las compras</Link> */}