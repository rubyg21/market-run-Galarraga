import React from 'react'
import  "./ItemListContainer.css";

function ItemListContainer({greeting}) {
  return (
    <>

    <div className="ItemList" >{greeting='Bienvenido'} este es un texto provisorio, aqui estara el listado de nuestros 
    prouctos...
    </div>

    </>
  )
}

export default ItemListContainer