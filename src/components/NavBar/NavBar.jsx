import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
<>   

<ul className="topnav">

   <NavLink to='/cart'>   <CartWidget />    </NavLink>   

  <li><a>TU LOGO</a></li>

  <li><NavLink to='/' >Inicio</NavLink></li>

  <li><NavLink to='/categoria/running' > Running </NavLink></li>

  <li><NavLink to='/categoria/tennis' > Tennis  </NavLink></li>


  <li><NavLink to='/contacto' >Contacto</NavLink></li>

  <li className="right"><NavLink to='/sesion' >Iniciar sesion</NavLink></li>

  <li className="right"><NavLink to='/unete' >Unete</NavLink></li>
</ul>

 </>
  )
}

export default NavBar
