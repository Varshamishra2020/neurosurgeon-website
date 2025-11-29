// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/Logo.webp" alt="Dr. Arun Saroha" />
              <h3>Dr. Arun Saroha</h3>
            </div>
            <p>
              Leading Neurosurgeon and Spine Specialist providing world-class
              treatment with compassion and expertise.
            </p>
            <div className="social-links">
              <a
                href="https://www.youtube.com/channel/UCbz9yM8ctTflvFKerm_klAg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.facebook.com/spineandbrainindia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/spineandbrainindia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://in.linkedin.com/in/arunsaroha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About Dr. Saroha</a>
              </li>
              <li>
                <a href="#spine-procedures">Spine Procedures</a>
              </li>
              <li>
                <a href="#brain-procedures">Brain Procedures</a>
              </li>
              <li>
                <a href="#international">International Patients</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="/back-pain-treatment">Back Pain Treatment</a>
              </li>
              <li>
                <a href="/brain-tumor">Brain Tumor Surgery</a>
              </li>
              <li>
                <a href="/disc-replacement">Disc Replacement</a>
              </li>
              <li>
                <a href="/cervical-spine">Cervical Spine Surgery</a>
              </li>
              <li>
                <a href="/degenerative-disc">Degenerative Disc</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>
                <i className="fas fa-phone"></i> +91 78600 00705
              </p>
              <p>
                <i className="fas fa-envelope"></i> drarunsaroha@gmail.com
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> Max Hospital, Gurugram
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> Max Hospital, Dwarka
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 Dr. Arun Saroha. All rights reserved. | Designed with ❤️
            for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
