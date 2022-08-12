import React from 'react'
import './itemDetail.css'
import  ItemCount from './ItemCount' 
import { useState } from "react";
import { Link } from 'react-router-dom'

import {useCartContext} from '../context/CartContex'


export const  ItemDetail = ({data}) => {

    const [goToCart, SetgoToCart] = useState(false)

    const {addProduct} = useCartContext()

    const onAdd = (quantity) =>{
        SetgoToCart(true)
        addProduct(data, quantity)
        console.log(`Compraste ${quantity} unidades `);
        }
   
  return (
    <div className='container'>
        <div className='detail'>
            <img className='detail_image' src={data.pictureUrl} alt="" />
            <div className='content'>
            <br></br>
                <h3> {data.title} </h3>
                <p> {data.description} </p>
                <p> stock: {data.stock} </p>
                <br></br>

                <h2> {data.price}  </h2>
        <div className='goToCart' > 
            { 
             goToCart
             ?  <Link  to='/cart' > <button> Terminar compra </button>  </Link>
             :  <ItemCount initial={1} stock={data.stock} onAdd={onAdd} /> 
            }
            
        </div>
        
                

            </div>

        </div>
        
    </div>
  )
}

export default ItemDetail




{/* <div className='container'>
<div className='detail'>
    <img className='detail_image' src={data.pictureUrl} alt="" />
    <div className='content'>
        <h1> {data.title} </h1>
        <h1> {data.title} </h1>

    </div>

</div>

</div> */}