import React from "react";
import { Link } from "react-router-dom";
// import "../styles/global.css";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-left">
        <ul>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/projects">projects</Link></li>
        </ul>
      </div>
      <div className="navbar-center">
        <h2><Link to="/">anushka joshi</Link></h2>
      </div>
      <div className="navbar-right">
        <ul>
          <li><Link to="/blogs">blogs</Link></li>
          <li><Link to="/contact">contact</Link></li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
