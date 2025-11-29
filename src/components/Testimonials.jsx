// components/Testimonials.jsx
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi, India",
      treatment: "Spine Surgery",
      content:
        "Dr. Saroha transformed my life with his expertise. After years of back pain, I can now live without constant discomfort.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      location: "UK",
      treatment: "Brain Tumor",
      content:
        "Traveling to India for treatment was the best decision. Dr. Saroha and his team provided exceptional care throughout.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      treatment: "Cervical Spine",
      content:
        "The minimally invasive approach meant faster recovery and less pain. Thank you, Dr. Saroha!",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Patient Testimonials</h2>
          <p>Hear from our satisfied patients</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="patient-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.location}</p>
                </div>
                <div className="treatment-badge">{testimonial.treatment}</div>
              </div>

              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>

              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
