import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget'

function NavBar() {
  return (
<>   

<ul className="topnav">
  <CartWidget />
  <li><a>LOGO</a></li>
  <li><a href="#home">Inicio</a></li>
  <li><a href="#news">Tienda</a></li>
  <li><a href="#contact">Contacto</a></li>
  <li className="right"><a href="#about">Unete</a></li>
  <li className="right"><a href="#about">Iniciar sesion</a></li>

</ul>

 </>
  )
}

export default NavBar
