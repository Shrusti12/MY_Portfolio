import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Shrusti<span>.</span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
            <a href="#skills">Skills</a>
        </li>

        <li>
            <a href="#internship">Internship</a>
        </li>
        

        <li>
          <a href="#projects">Projects</a>
        </li>

       
      </ul>

      <button className="hire-btn">
        Hire Me
      </button>
    </nav>
  );
}

export default Navbar;