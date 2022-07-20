import React,{useState, useEffect} from 'react'
import './ItemCount.css'

function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(parseInt(initial))

 const decrease = () =>{
    setCount( count - 1 )
 }

 const increase = () =>{
    setCount( count + 1 )
 }

useEffect(()=>{
    setCount(parseInt(initial))
},[initial])

  return (
<>
<div className='counter'>  
<button disabled={count <= 1}  onClick={decrease} > - </button>
<span> {count} </span>
<button disabled={count >= stock } onClick={increase}  > + </button>

<div>
    <button disabled={stock <= 0} onClick={() => onAdd(count)}  >AGREGAR AL CARRITO</button>
</div>
</div>
</>

    
  )
}

export default ItemCount

// import React,{useState} from 'react'

// function ItemCount() {
//     const [counter, setCounter] = useState(0)
//   return (
// <>
// <div> {counter} </div>
// <button onClick={() => setCounter( counter +1) } > +</button>
// <button onClick={() => setCounter( counter -1)  } > -</button>
// <button onClick={() => setCounter(0) } > Reset </button>

// </>


    
//   )
// }

// export default ItemCount


// https://www.youtube.com/watch?v=g8NwvWZtpq0