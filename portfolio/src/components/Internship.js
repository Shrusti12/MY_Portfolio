import React from "react";
import "../styles/Internship.css";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Internship() {
  return (
    <section id="internship" className="internship">
      <div className="internship-container">
        <div className="internship-heading" data-aos="fade-up">
          <h4>Internship</h4>
          <h2>My Internship Experience</h2>
          <p>
            A professional overview of my internship experience in software
            development and testing, where I gained practical exposure to web
            application development, backend integration, testing workflows,
            and real-world project environments.
          </p>
        </div>

        {/* BOTH INTERNSHIP CARDS WRAPPED HERE */}
        <div className="internship-grid">
          {/* ================= FIRST INTERNSHIP ================= */}
          <div className="internship-card" data-aos="zoom-in">
            {/* LEFT CONTENT */}
            <div className="internship-left">
              <div className="internship-top">
                <div className="internship-role">
                  <h3>Python Full Stack Development Intern</h3>
                  <span>TechXonic Innovation, Bangalore</span>
                </div>

                <div className="internship-meta">
                  <p>
                    <FaCalendarAlt className="internship-icon" />
                    February 2026 – June 2026
                  </p>
                  <p>
                    <FaMapMarkerAlt className="internship-icon" />
                    Bangalore, Karnataka
                  </p>
                </div>
              </div>

              <p className="internship-description">
                Completed an internship in Python Full Stack Development with
                hands-on exposure to building responsive web applications,
                integrating frontend and backend modules, and understanding the
                end-to-end software development workflow.
              </p>

              <div className="internship-work">
                <h4>
                  <FaBriefcase className="section-icon" />
                  Key Responsibilities & Learning
                </h4>

                <ul>
                  <li>
                    Developed and improved frontend pages using React, HTML,
                    CSS, and JavaScript.
                  </li>
                  <li>
                    Worked with Python and Flask for backend development and API
                    integration.
                  </li>
                  <li>
                    Connected frontend components with backend services and
                    database operations.
                  </li>
                  <li>
                    Used PostgreSQL for storing and managing project data.
                  </li>
                  <li>
                    Participated in debugging, testing, and improving
                    application functionality.
                  </li>
                  <li>
                    Gained practical understanding of full stack development,
                    project workflow, and software deployment structure.
                  </li>
                </ul>
              </div>

              <div className="internship-certificate-text">
                <p>
                  <FaCertificate className="section-icon" />
                  Internship completion certificate available
                </p>
              </div>
            </div>

            {/* RIGHT CERTIFICATE PREVIEW */}
            <div className="internship-right">
              <div className="certificate-card">
                <img
                  src="/Internship-certificate.jpeg"
                  alt="Internship Certificate"
                  className="certificate-image"
                />

                <div className="certificate-overlay">
                  <h4>Internship Certificate</h4>
                  <p>Python Full Stack Development Internship</p>

                  <a
                    href="/Internship-certificate.jpeg"
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-btn"
                  >
                    <FaExternalLinkAlt />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SECOND INTERNSHIP ================= */}
          <div
            className="internship-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* LEFT CONTENT */}
            <div className="internship-left">
              <div className="internship-top">
                <div className="internship-role">
                  <h3>Software Testing Intern(Performance Testing)</h3>
                  <span>TECHasitis</span>
                </div>

                <div className="internship-meta">
                  <p>
                    <FaCalendarAlt className="internship-icon" />
                    April 24, 2024 - May 24, 2024
                  </p>
                  <p>
                    <FaMapMarkerAlt className="internship-icon" />
                    21st cross Vidyagiri Bagalkot, Karnataka
                  </p>
                </div>
              </div>

              <p className="internship-description">
                Completed a short-term internship in Automation Testing during
                BCA, where I gained basic exposure to software testing concepts,
                testing workflows, and performance testing fundamentals using
                NeoLoad.
              </p>

              <div className="internship-work">
                <h4>
                  <FaBriefcase className="section-icon" />
                  Key Responsibilities & Learning
                </h4>

                <ul>
                  <li>
                    Learned the fundamentals of software testing and testing
                    workflow.
                  </li>
                  <li>
                    Gained basic exposure to automation and performance testing
                    concepts.
                  </li>
                  <li>
                    Worked with NeoLoad to understand performance testing
                    basics.
                  </li>
                  <li>
                    Observed how test scenarios are created and executed for
                    applications.
                  </li>
                  <li>
                    Developed a basic understanding of application testing and
                    quality assurance practices.
                  </li>
                </ul>
              </div>

              <div className="internship-certificate-text">
                <p>
                  <FaCertificate className="section-icon" />
                  Internship completion certificate available
                </p>
              </div>
            </div>

            {/* RIGHT CERTIFICATE PREVIEW */}
            <div className="internship-right">
              <div className="certificate-card">
                <img
                  src="/BCA-internship.jpeg"
                  alt="Automation Testing Internship Certificate"
                  className="certificate-image"
                />

                <div className="certificate-overlay">
                  <h4>Internship Certificate</h4>
                  <p>Automation Testing Internship</p>

                  <a
                    href="/BCA-internship.jpeg"
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-btn"
                  >
                    <FaExternalLinkAlt />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ================= END SECOND INTERNSHIP ================= */}
        </div>
      </div>
    </section>
  );
}

export default Internship;