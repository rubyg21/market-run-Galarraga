import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import Spinner from './Spinner/Spinner'

const producto = {
  id : 1, 
  pictureUrl :"https://disershop.com.uy/image/cache/catalog/aadiser/productos/EL-135270-30-1000x1000.jpg", 
  title: "Remera Dry-Fit",
  pirce: '$390 IVA Inc.',
  description: 'Camiseta Dry de hombre con estampado geométrico y cuello a la base. 100% Poliéster.'
}

export const ItemDetailContainer = () => {
const [data, setData ] = useState({})
const [loading , setLoading] = useState(true)

useEffect(()=>{
  const getData = new Promise (resolve => {
      setTimeout(()=>{
        resolve(producto)
      },2000)
      
  })

  getData
  .then(res => setData(res))
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