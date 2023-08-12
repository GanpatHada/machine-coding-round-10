import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">
          <li className="navs all-centered">Dashboard</li>
        </NavLink>
        <NavLink to='/departments'>
          <li className="navs all-centered">Department</li>
        </NavLink>
        <NavLink to='/products'>
          <li className="navs all-centered">Products</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
