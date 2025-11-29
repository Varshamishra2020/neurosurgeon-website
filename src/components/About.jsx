// components/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Dr. Arun Saroha</h2>
          <p>Expert Brain and Spine Surgery with Patient-Centered Care</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              <img src="../public/ArunSarohaImage.jpeg" alt="Dr. Arun Saroha" />
              <div className="experience-badge">
                <span>25+</span>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

          <div className="about-text">
            <div className="about-intro">
              <h3>Leading Neurosurgeon in India</h3>
              <p>
                Dr. Arun Saroha specializes in treating complex brain and spine
                disorders, with a focus on delivering effective and long-term
                treatment outcomes for his patients.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <div className="highlight-content">
                  <h4>7,000+ Surgeries</h4>
                  <p>
                    Successfully performed surgeries for various neurological
                    conditions
                  </p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="fas fa-user-md"></i>
                </div>
                <div className="highlight-content">
                  <h4>Minimally Invasive</h4>
                  <p>Expert in advanced techniques for faster recovery</p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="highlight-content">
                  <h4>International Patients</h4>
                  <p>Trusted by patients from across the globe</p>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <a href="/about" className="btn-primary">
                Read Full Profile
              </a>
              <a href="/download-profile" className="btn-outline">
                <i className="fas fa-download"></i>
                Download Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
