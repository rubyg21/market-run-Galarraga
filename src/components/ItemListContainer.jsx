import React from 'react'
import  "./ItemListContainer.css";
import  ItemCount from './ItemCount' 
import ItemList from './ItemList'
import { useState, useEffect } from 'react';


const films = [

  {id : 1, image :"https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg", title: "Remera",
  precio: '$30.00'},

  {id : 2, image :"https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg", title: "Short",
  precio: '$90.00'},

  {id : 3, image :"https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg", title: "Musculosa",
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
    <div className="ItemList" >{greeting='Bienvenido'} este es un texto provisorio, aqui estara el listado de nuestros 
    prouctos...
    </div>
 
    <ItemCount initial={1} stock={10} onAdd={onAdd} />
    <ItemList data={data} />
    </>
  )
}

export default ItemListContainer