// components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="section-header">
              <h2>Get In Touch</h2>
              <p>Schedule your consultation today</p>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h4>Emergency & Consultation</h4>
                  <a href="tel:+917860000705">+91 78600 00705</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:drarunsaroha@gmail.com">
                    drarunsaroha@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Max Hospital, Gurugram</h4>
                  <p>
                    Director & Unit Head of Spine and Neurosurgery, B Block,
                    Sushant Lok 1, Near Huda City Centre, Gurugram - 122001
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Max Super Speciality Hospital, Dwarka</h4>
                  <p>Plot No. 1, Sector 10 Dwarka, Dwarka, Delhi - 110075</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Request a Free Consultation</h3>
            <p>Fill out the form below and we'll get back to you shortly.</p>

            <form>
              <div className="form-group">
                <input type="text" placeholder="Complete Name *" required />
              </div>

              <div className="form-group">
                <input type="email" placeholder="Email Address *" required />
              </div>

              <div className="form-group">
                <input type="tel" placeholder="Phone No *" required />
              </div>

              <div className="form-group">
                <textarea placeholder="Your Message" rows="4"></textarea>
              </div>

              <button type="submit" className="btn-primary">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
