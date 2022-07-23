import React from 'react'
import './item.css';


const Item = ({info} ) =>{

    return(
   
        <a href='' className='item'>

        <img src={info.pictureUrl}  alt=''  />
        <p>  {info.title}  {info.pirce} </p> 
        <p>  {info.description}</p>
   
        </a> 
               
    )
}

export default Item