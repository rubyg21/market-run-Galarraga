import React from 'react'
import  "./ItemListContainer.css";
import  ItemCount from './ItemCount' 

function ItemListContainer({greeting}) {
  const onAdd = (quantity) =>{
    console.log(`Compraste ${quantity} unidades `);
    }

  return (
    <>
    <div className="ItemList" >{greeting='Bienvenido'} este es un texto provisorio, aqui estara el listado de nuestros 
    prouctos...
    </div>
 
    <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  )
}

export default ItemListContainer