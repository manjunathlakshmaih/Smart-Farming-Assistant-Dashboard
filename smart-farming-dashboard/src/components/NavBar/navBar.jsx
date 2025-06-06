import React from "react";
import './navBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <h1>Formers wellfare</h1>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;