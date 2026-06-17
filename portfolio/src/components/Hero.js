import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home" className="hero" data-aos="zoom-in">

      <div className="hero-content">

        <div className="hero-text">
          <p className="greeting">Hello, I'm</p>

          <h1>
            Shrusti <span>Mathapati</span>
          </h1>

          <h2> Full Stack Developer | MCA Graduate</h2>

          <p className="hero-description">
            
            Passionate about building modern web applications and creating seamless digital experiences. Skilled in React, Python, Flask, PostgreSQL, and web technologies, with a strong interest in developing efficient and user-friendly solutions.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              View Projects
            </button>

            <button className="secondary-btn">
              Download Resume
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/Me.jpeg"
            alt="Shrusti"
          />
        </div>

      </div>

    </section>
  );
}

export default Hero;