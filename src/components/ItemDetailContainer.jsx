import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import Spinner from './Spinner/Spinner'

import { useParams } from 'react-router-dom'

const productos = [

  {id : 1, pictureUrl :"https://disershop.com.uy/image/cache/catalog/aadiser/productos/EL-135270-30-1000x1000.jpg", title: "Remera",
  pirce: '$300',  category: 'running', description: 'Ver detalles'},

  {id : 2, pictureUrl :"https://disershop.com.uy/image/cache/catalog/aadiser/productos/EL-1050-11-1000x1000.jpg", title: "Short",
  pirce: '$900', category: 'tennis', description: 'Ver detalles'},

  {id : 3, pictureUrl :"https://disershop.com.uy/image/cache/catalog/aadiser/productos/EL-25441-02-1000x1000.jpg", title: "Musculosa",
  pirce: '$600', category: 'running', description: 'Ver detalles'},

  {id : 4, pictureUrl :"https://disershop.com.uy/cache/aadiser/productos/EL-125566-04-550x550.jpg", title: "Camiseta Elite",
  pirce: '$398', category: 'tennis', description: 'Ver detalles'},

]

export const ItemDetailContainer = () => {
const [data, setData ] = useState({})
const [loading , setLoading] = useState(true)
const {detalleId} = useParams()

useEffect(()=>{
  const getData = new Promise (resolve => {
      setTimeout(()=>{
        resolve(productos)
      },1000)
      
  })

  getData
  .then(res => setData(res.find(film => film.id === parseInt(detalleId) )))
  .finally(() => setLoading(false))
},[])


  return (
<>  
<div> 
    {loading && (<Spinner />)}
      <ItemDetail  data={data} /> 

  </div>
  </>
  )
}

export default ItemDetailContainer


// {data.length === 0 ? ( <Spinner /> ) : (  <ItemDetail  data={data} /> ) }

{/* <ItemDetail data={data} /> */}