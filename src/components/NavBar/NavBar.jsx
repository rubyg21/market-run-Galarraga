import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='NavBar'>
        <div>Tienda de articulos de running...
        <button className='NavBar_boton_lef'>Login</button>
        <button className='NavBar_boton_lef'>Unete</button>
        </div>
        <button className='NavBar_boton'>Inicio</button>
        <button className='NavBar_boton'>Tienda</button>
        <button className='NavBar_boton'>Nosotros</button>
        <button className='NavBar_boton'>Contacto</button>
    
    </div>
  )
}

export default NavBar
