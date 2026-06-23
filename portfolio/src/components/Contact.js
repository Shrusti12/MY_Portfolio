import React from "react";
import "../styles/Contact.css";
import {
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaBriefcase,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-heading" data-aos="fade-up">
          <h4>Contact</h4>
          <h2>Let’s Connect</h2>
          <p>
            I’m open to internship and entry-level opportunities in software
            development, full stack development, and web technologies.
            Feel free to connect with me through my professional profiles.
          </p>
        </div>

        <div className="contact-content">
          {/* Left Card */}
          <div className="contact-card" data-aos="fade-right">
            <h3>Get In Touch</h3>

            <div className="contact-item">
              <span>
                <FaMapMarkerAlt className="contact-icon" /> Location
              </span>
              <p>Bagalkot, Karnataka, India</p>
            </div>

            <div className="contact-item">
              <span>
                <FaBriefcase className="contact-icon" /> Availability
              </span>
              <p>
                Open to internships, entry-level roles, and opportunities in
                full stack development and software engineering.
              </p>
            </div>

            <div className="contact-note">
              Connect with me through LinkedIn or explore my projects on GitHub.
            </div>
          </div>

          {/* Right Card */}
          <div className="contact-card" data-aos="fade-left">
            <h3>Professional Profiles</h3>

            <div className="contact-links">
              <a
                href="https://github.com/Shrusti12"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shrusti-mathapati"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>

              <a
                href="/Shrusti Mathapati Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <FaFileDownload /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;