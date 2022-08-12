import React from 'react'
import { useCartContext } from '../context/CartContex'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';


const Cart = () => {

const { cart, totalPrice } = useCartContext();

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
    </p>
    </>
  )
}

export default Cart


{/* <Link to='/'> Hacer las compras</Link> */}