import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ul className="topnav">
        <NavLink to="/cart">
          {" "}
          <CartWidget />{" "}
        </NavLink>

        <li>
          <NavLink to="/">Tienda</NavLink>
        </li>

        <li>
          <NavLink to="/categoria/running"> Running </NavLink>
        </li>

        <li>
          <NavLink to="/categoria/tennis"> Tennis </NavLink>
        </li>
        <li>
          <NavLink to="/nosotros">Nosotros</NavLink>
        </li>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
