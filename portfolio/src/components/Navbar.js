import React, { useState } from "react";
import "../styles/Navbar.css";
import AOS from "aos";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setMenuOpen(false);

      setTimeout(() => {
        AOS.refreshHard();
      }, 500);
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo" onClick={() => handleNavClick("home")}>
        Shrusti <span>Mathapati</span>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <button onClick={() => handleNavClick("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => handleNavClick("about")}>About</button>
        </li>
        <li>
          <button onClick={() => handleNavClick("skills")}>Skills</button>
        </li>
        <li>
          <button onClick={() => handleNavClick("internship")}>Internship</button>
        </li>
        <li>
          <button onClick={() => handleNavClick("projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => handleNavClick("contact")}>Contact</button>
        </li>
      </ul>

      {/* Desktop Button */}
      <button className="hire-btn" onClick={() => handleNavClick("contact")}>
        Hire Me
      </button>
    </nav>
  );
}

export default Navbar;