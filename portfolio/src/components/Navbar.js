import React,{useState} from "react";
import "../styles/Navbar.css";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        Shrusti<span>.</span>
      </div>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
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
        Download CV
      </button>
    </nav>
  );
}

export default Navbar;