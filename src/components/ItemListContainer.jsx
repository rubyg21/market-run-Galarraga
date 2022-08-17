import React from 'react'
import  "./ItemListContainer.css";

import ItemList from './ItemList'
import { useState, useEffect } from 'react';
import Spinner from './Spinner/Spinner'

import { useParams } from 'react-router-dom'

import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'






function ItemListContainer({greeting}) {

  const [data, setData] = useState([])

  const {categoriaId} = useParams()

  useEffect(()=>{

    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'products')

    
    if (categoriaId) {
      const queryFilter = query(queryCollection, where('category', '==', categoriaId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
  

    } else{
      getDocs(queryCollection)
      .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
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