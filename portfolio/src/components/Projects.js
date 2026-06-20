import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <div className="projects-heading" data-aos="fade-up">
          <h4>Projects</h4>
          <h2>My Recent Work</h2>
          <p>
            Here are some of the projects I have worked on during my academic
            journey and practical learning in full stack development.
          </p>
        </div>

        <div className="projects-grid">

          <div className="project-card" data-aos="zoom-in">
            <h3>ConstructHub</h3>
            <p>
              A full stack construction management web application developed
              using React, Flask, and PostgreSQL. It focuses on managing
              construction-related workflows and providing a responsive user
              interface.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Flask</span>
              <span>PostgreSQL</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="project-card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Portfolio Website</h3>
            <p>
              A personal portfolio website designed and developed to showcase
              my skills, internship experience, projects, and contact details
              with a modern responsive design.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;