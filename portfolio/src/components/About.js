import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about" data-aos="fade-right">

      <div className="about-container">

        <div className="about-left">
          <h4>About Me</h4>

          <h2>
            Passionate About Building
            Modern Web Applications
          </h2>

          <p>
            I am an MCA graduate with a keen interest in software development and web technologies. 
            I enjoy building responsive applications, exploring new technologies, and solving real-world problems through programming. 
            My goal is to leverage my technical skills and creativity to develop impactful digital solutions while growing in a professional environment.
          </p>
        </div>

        <div className="about-right">
          <div className="about-card">
            <h3>Education</h3>
            <p>MCA Graduate</p>
          </div>

          <div className="about-card">
            <h3>Focus</h3>
            <p>Full Stack Development</p>
          </div>

          <div className="about-card">
            <h3>Location</h3>
            <p> Bagalkot, Karnataka, India</p>
          </div>

          <div className="about-card">
            <h3>Goal</h3>
            <p>Software Developer</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;