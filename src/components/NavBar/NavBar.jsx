import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget'

function NavBar() {
  return (
<>   

<ul className="topnav">
  <CartWidget />
  <li><a>TU LOGO</a></li>
  <li><a href="#inicio">Inicio</a></li>
  <li><a href="#tienda">Tienda</a></li>
  <li><a href="#contacto">Contacto</a></li>
  <li className="right"><a href="#sesion">Iniciar sesion</a></li>
  <li className="right"><a href="#unete">Unete</a></li>
</ul>

 </>
  )
}

export default NavBar
