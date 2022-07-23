import React from 'react'
import './item.css';


const Item = ({info} ) =>{

    return(
   
        <a href='' className='item'>

        <img src={info.image} 
        alt=''  />
         <p>  {info.title}  {info.precio} </p> 
          <p>  {info.descripcion}</p>
   
        </a> 
           
    
    )
}

export default Item