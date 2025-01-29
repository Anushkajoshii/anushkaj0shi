// import React from "react";
// import { Link } from "react-router-dom";
// // import "../styles/global.css";
// import "../styles/navbar.css";

// const Navbar = () => {
//   return (
//     <nav>
//       <div className="navbar-left">
//         <ul>
//           <li><Link to="/about">about</Link></li>
//           <li><Link to="/projects">projects</Link></li>
//         </ul>
//       </div>
//       <div className="navbar-center">
//         <h2><Link to="/">anushka joshi</Link></h2>
//       </div>
//       <div className="navbar-right">
//         <ul>
//           <li><Link to="/blogs">blogs</Link></li>
//           <li><Link to="/contact">contact</Link></li>
          
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      {/* Hamburger Menu for Mobile */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Dropdown Menu (Visible in Mobile View) */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>about</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>projects</Link></li>
          <li><Link to="/blogs" onClick={() => setMenuOpen(false)}>blogs</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>contact</Link></li>
        </ul>
      </div>

      {/* Desktop Navigation */}
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
