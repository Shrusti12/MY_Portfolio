import React from "react";
import "../styles/Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <div className="skills-heading" data-aos="fade-up">
          <h4>My Skills</h4>
          <h2>Technologies I Work With</h2>
          <p>
            Here are the technologies and tools I have worked with
            in academic projects, internships, and web development practice.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-card" data-aos="zoom-in">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div className="skill-card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Backend</h3>
            <ul>
              <li>Python</li>
              <li>Flask</li>
              <li>REST API Basics</li>
            </ul>
          </div>

          <div className="skill-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Database</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>SQLite</li>
              <li>Database Design Basics</li>
            </ul>
          </div>

          <div className="skill-card" data-aos="zoom-in" data-aos-delay="300">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;