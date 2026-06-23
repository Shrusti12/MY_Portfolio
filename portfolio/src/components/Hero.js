import React from "react";
import "../styles/Hero.css";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero" data-aos="zoom-in">
      <div className="hero-content">
        {/* LEFT SIDE */}
        <div className="hero-text">
          <p className="greeting">Hello, I'm</p>

          <h1>
            Shrusti <span>Mathapati</span>
          </h1>

          <h2>Full Stack Developer | MCA Graduate</h2>

          <p className="hero-description">
            Passionate about building modern web applications and creating
            seamless digital experiences. Skilled in React, Python, Flask,
            PostgreSQL, and web technologies, with a strong interest in
            developing efficient and user-friendly solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a
              href="/Shrusti Mathapati Resume.pdf"
              download
              className="secondary-btn"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Shrusti12"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shrusti-mathapati"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-image" data-aos="fade-left">
         
            <img src="/Me.jpeg" alt="Shrusti Mathapati" />
          </div>
        

      </div>
    </section>
  );
}

export default Hero;