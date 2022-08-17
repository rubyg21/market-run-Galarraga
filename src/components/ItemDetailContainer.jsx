import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import Spinner from './Spinner/Spinner'

import { getFirestore, doc, getDoc } from 'firebase/firestore'

import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
const [data, setData ] = useState({})
const [loading , setLoading] = useState(true)
const {detalleId} = useParams()

useEffect(()=>{

  const querydb = getFirestore();
  const queryDoc = doc(querydb, 'products', detalleId)
  getDoc(queryDoc)
  .then( res => setData({ id: res.id, ...res.data() }) )
  .finally(() => setLoading(false))
},[detalleId])


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