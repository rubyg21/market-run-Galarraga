import React from 'react'
import  "./ItemListContainer.css";
import  ItemCount from './ItemCount' 
import ItemList from './ItemList'
import { useState, useEffect } from 'react';


const films = [

  {id : 1, image :"https://disershop.com.uy/image/cache/catalog/aadiser/productos/EL-135270-30-1000x1000.jpg", title: "Remera",
  precio: '$30.00'},

  {id : 2, image :"https://disershop.com.uy/image/cache/catalog/aadiser/productos/EL-1050-11-1000x1000.jpg", title: "Short",
  precio: '$90.00'},

  {id : 3, image :"https://disershop.com.uy/image/cache/catalog/aadiser/productos/EL-25441-02-1000x1000.jpg", title: "Musculosa",
  precio: '$60.00'},

]


function ItemListContainer({greeting}) {

  const [data, setData] = useState([])

  useEffect(()=>{

    const getData = new Promise((resolve) => {
      setTimeout(()=>{
        resolve(films)
      },2000)
    })
    getData.then(res => setData(res))

  },[])

  const onAdd = (quantity) =>{
    console.log(`Compraste ${quantity} unidades `);
    }

  return (
    <>
    <div className="ItemList" >{greeting='Bienvenido'}  listado de nuestros   prouctos...  </div>
   
   
    {/* listado de productos resposive */}
    <div className='container'> 

    <ItemCount initial={1} stock={10} onAdd={onAdd} />  
    <ItemList  data={data} />

    </div>
  </>
    
  )
}

export default ItemListContainer