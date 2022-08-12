import React from 'react'
import  "./ItemListContainer.css";

import ItemList from './ItemList'
import { useState, useEffect } from 'react';
import Spinner from './Spinner/Spinner'

import { useParams } from 'react-router-dom'


const productos = [

  {id : 1, pictureUrl :"https://disershop.com.uy/image/cache/catalog/aadiser/productos/EL-135270-30-1000x1000.jpg", title: "Remera",
  price: '300',  category: 'running', description: 'Ver detalles',stock: 6},

  {id : 2, pictureUrl :"https://disershop.com.uy/image/cache/catalog/aadiser/productos/EL-1050-11-1000x1000.jpg", title: "Short",
  price: '900', category: 'tennis', description: 'Ver detalles',stock: 6},

  {id : 3, pictureUrl :"https://disershop.com.uy/image/cache/catalog/aadiser/productos/EL-25441-02-1000x1000.jpg", title: "Musculosa",
  price: '600', category: 'running', description: 'Ver detalles',stock: 6},

  {id : 4, pictureUrl :"https://disershop.com.uy/cache/aadiser/productos/EL-125566-04-550x550.jpg", title: "Camiseta Elite",
  price: '398', category: 'tennis', description: 'Ver detalles',stock: 6},

]

function ItemListContainer({greeting}) {

  const [data, setData] = useState([])

  const {categoriaId} = useParams()

  useEffect(()=>{

    const getData = new Promise((resolve) => {
      setTimeout(()=>{
        resolve(productos)
      },1000)
    })
    if (categoriaId) {
      getData.then(res => setData(res.filter(producto => producto.category === categoriaId)))
    } else{
      getData.then(res => setData(res))
    }
    
 return () =>{
  setData([])
 }
  },[categoriaId])



  return (
    <>
    <div className="ItemList" >{greeting='Bienvenido'} aqui el listado de nuestros productos...  </div>
      
    {/* listado de productos resposive */}
    <div className='container'> 

  

    {data.length === 0 ? ( <Spinner /> ) : (  <ItemList  data={data} /> ) }
   

    </div>
  </>
    
  )
}

export default ItemListContainer