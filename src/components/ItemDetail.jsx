import React from 'react'
import './itemDetail.css'
export const  ItemDetail = ({data}) => {
   
  return (
    <div className='container'>
        <div className='detail'>
            <img className='detail_image' src={data.pictureUrl} alt="" />
            <div className='content'>
            <br></br>
                <h3> {data.title} </h3>
                <p> {data.description} </p>
                <br></br>

                <h2> {data.pirce}  </h2>

            </div>

        </div>
        
    </div>
  )
}

export default ItemDetail




{/* <div className='container'>
<div className='detail'>
    <img className='detail_image' src={data.pictureUrl} alt="" />
    <div className='content'>
        <h1> {data.title} </h1>
        <h1> {data.title} </h1>

    </div>

</div>

</div> */}