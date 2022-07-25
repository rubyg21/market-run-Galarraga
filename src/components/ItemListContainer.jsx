import React from 'react'
import  "./ItemListContainer.css";
import  ItemCount from './ItemCount' 
import ItemList from './ItemList'
import { useState, useEffect } from 'react';
import Spinner from './Spinner/Spinner'


const productos = [

  {id : 1, pictureUrl :"https://disershop.com.uy/image/cache/catalog/aadiser/productos/EL-135270-30-1000x1000.jpg", title: "Remera",
  pirce: '$300', description: 'Ver detalles'},

  {id : 2, pictureUrl :"https://disershop.com.uy/image/cache/catalog/aadiser/productos/EL-1050-11-1000x1000.jpg", title: "Short",
  pirce: '$900', description: 'Ver detalles'},

  {id : 3, pictureUrl :"https://disershop.com.uy/image/cache/catalog/aadiser/productos/EL-25441-02-1000x1000.jpg", title: "Musculosa",
  pirce: '$600', description: 'Ver detalles'},

]

function ItemListContainer({greeting}) {

  const [data, setData] = useState([])

  useEffect(()=>{

    const getData = new Promise((resolve) => {
      setTimeout(()=>{
        resolve(productos)
      },3000)
    })
    getData.then(res => setData(res))

  },[])

  const onAdd = (quantity) =>{
    console.log(`Compraste ${quantity} unidades `);
    }

  return (
    <>
    <div className="ItemList" >{greeting='Bienvenido'} aqui el listado de nuestros productos...  </div>
      
    {/* listado de productos resposive */}
    <div className='container'> 

    <ItemCount initial={1} stock={10} onAdd={onAdd} /> 

    {data.length === 0 ? ( <Spinner /> ) : (  <ItemList  data={data} /> ) }
   

    </div>
  </>
    
  )
}

export default ItemListContainer