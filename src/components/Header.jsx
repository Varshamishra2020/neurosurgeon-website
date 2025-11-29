// components/Header.jsx
import React from "react";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <a href="tel:+917860000705">
                <i className="fas fa-phone"></i>
                +91 78600 00705
              </a>
            </div>
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
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <a href="/">
                <img src="/Logo.webp" alt="Dr. Arun Saroha" />
                <span>Dr. Arun Saroha</span>
              </a>
            </div>

            <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
              <li>
                <a href="#about">Meet The Doctor</a>
              </li>
              <li className="dropdown">
                <a href="#spine-procedures">
                  Spine Procedures <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/back-pain-treatment">Back Pain Treatment</a>
                  </li>
                  <li>
                    <a href="/cervical-spine-surgery">Cervical Spine Surgery</a>
                  </li>
                  <li>
                    <a href="/degenerative-disc">Degenerative Disc Disease</a>
                  </li>
                  <li>
                    <a href="/disc-replacement">Disc Replacement Surgery</a>
                  </li>
                  <li>
                    <a href="/scoliosis">Scoliosis Treatment</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#brain-procedures">
                  Brain Procedures <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/brain-tumor">Brain Tumor Surgery</a>
                  </li>
                  <li>
                    <a href="/brain-aneurysm">Brain Aneurysm Treatment</a>
                  </li>
                  <li>
                    <a href="/blood-clot">Blood Clot Treatment</a>
                  </li>
                  <li>
                    <a href="/headache">Headache Treatment</a>
                  </li>
                  <li>
                    <a href="/hydrocephalus">Hydrocephalus Treatment</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#international">International Patients</a>
              </li>
              <li>
                <a href="#resources">Resources</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <div className="nav-cta">
              <a href="#consultation" className="btn-primary">
                Book Consultation
              </a>
            </div>

            <div
              className="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
