import React from "react";
import "../styles/Projects.css";
import { FaGithub, /*FaExternalLinkAlt*/ } from "react-icons/fa";

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

          {/* Project 1 */}
          <div className="project-card" data-aos="zoom-in">
            <div className="project-image">
              <img
                src="/contact-construction.jpg"
                alt="ConstructHub Project"
              />
            </div>

            <div className="project-content">
              <h3>ConstructHub</h3>

              <p>
                A full stack construction management web application developed
                using React, Flask, and PostgreSQL. It helps manage project
                workflows, task details, and user interactions through a
                responsive and user-friendly interface.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Flask</span>
                <span>PostgreSQL</span>
                <span>CSS</span>
              </div>

              <div className="project-buttons">
                <a
                  href="https://github.com/Shrusti12/Constructhub"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn github-btn"
                >
                  <FaGithub />
                  GitHub
                </a>

                {/* Add live link here later if available */}
                {/* 
                <a
                  href="https://your-live-demo-link.com"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn live-btn"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a> 
                */}
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card" data-aos="zoom-in" data-aos-delay="100">
            <div className="project-image">
              <img
                src="/project2.jpg"
                alt="Portfolio Website"
              />
            </div>

            <div className="project-content">
              <h3>Portfolio Website</h3>

              <p>
                A personal portfolio website built using React and CSS to
                showcase my skills, internship experience, projects, and
                contact details with a modern, responsive, and visually engaging
                design.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-buttons">
                <a
                  href="https://github.com/Shrusti12"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn github-btn"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;