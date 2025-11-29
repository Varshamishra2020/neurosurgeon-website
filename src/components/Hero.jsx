// components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Dr. Arun Saroha: Leading Neurosurgeon in India</h1>
              <p className="hero-subtitle">
                Merging Innovation with Expertise in Brain & Spine Care
              </p>
              <p className="hero-description">
                With over 25 years of experience and 7,000+ successful
                surgeries, Dr. Arun Saroha provides world-class treatment for
                complex neurological conditions.
              </p>
              <div className="hero-buttons">
                <a href="#consultation" className="btn-primary">
                  Book Appointment
                </a>
                <a href="#about" className="btn-secondary">
                  Learn More
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-card">
                <img
                  src="/dr-arun-saroha-removebg-preview.png"
                  alt="Dr. Arun Saroha"
                />
                <div className="card-overlay">
                  <h3>Dr. Arun Saroha</h3>
                  <p>Neurosurgeon & Spine Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
