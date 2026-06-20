import React from "react";
import "../styles/Contact.css";

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
            Feel free to connect with me.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-card" data-aos="fade-right">
            <h3>Get In Touch</h3>

            <div className="contact-item">
              <span>Email</span>
              <p>Shrustimathapati2003@gmail.com</p>
            </div>

            <div className="contact-item">
              <span>Phone</span>
              <p>+91 7259721689</p>
            </div>

            <div className="contact-item">
              <span>Location</span>
              <p>Bagalkot, Karnataka, India</p>
            </div>
          </div>

          <div className="contact-card" data-aos="fade-left">
            <h3>Professional Profiles</h3>

            <div className="contact-links">
              <a
                href="https://github.com/Shrusti12"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shrusti-mathapati"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="/public/Shrusti Mathapati Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;