import React from 'react'
import './item.css';


const Item = ({info} ) =>{

    return(
      
        <a href='' className='film'>

        <img src={info.image} 
        alt=''  />
        <p> {info.title}  </p> 
        <p>  {info.precio} </p>
        <p> Detalles del Producto </p>
            
        </a> 
     
    )
}

export default Item