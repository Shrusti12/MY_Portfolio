import React from "react";
import "../styles/Internship.css";

function Internship() {
  return (
    <section id="internship" className="internship">
      <div className="internship-container">

        <div className="internship-heading" data-aos="fade-up">
          <h4>Internship</h4>
          <h2>My Internship Experience</h2>
          <p>
            A summary of my practical experience in full stack development,
            where I worked on real-world web application features and improved
            my technical skills.
          </p>
        </div>

        <div className="internship-card" data-aos="zoom-in">
          <div className="internship-top">
            <h3>Python Full Stack Development Intern</h3>
            <span>TechXonic Innovation, Bangalore</span>
          </div>

          <p className="internship-duration">
            Internship Duration: February 2026 – June 2026
          </p>

          <p className="internship-description">
            Completed an internship in Python Full Stack Development with
            hands-on exposure to building responsive web applications and
            understanding the software development workflow.
          </p>

          <div className="internship-work">
            <h4>Key Responsibilities & Learning</h4>
            <ul>
              <li>Developed and improved frontend pages using React, HTML, CSS, and JavaScript.</li>
              <li>Worked with Python and Flask for backend development and API integration.</li>
              <li>Connected frontend components with backend services and database operations.</li>
              <li>Used PostgreSQL for storing and managing project data.</li>
              <li>Participated in debugging, testing, and improving application functionality.</li>
              <li>Gained practical understanding of full stack web application development.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Internship;