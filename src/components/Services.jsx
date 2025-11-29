import React, { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("spine");

  const spineServices = [
    {
      icon: "/Backpain.jpg",
      title: "Back Pain Treatment",
      description:
        "Comprehensive treatment for chronic and acute back pain using advanced techniques.",
      link: "/back-pain-treatment",
    },
    {
      icon: "/img1.jpg",
      title: "Cervical Spine Surgery",
      description:
        "Specialized procedures for neck and cervical spine conditions.",
      link: "/cervical-spine-surgery",
    },
    {
      icon: "/img2.jpg",
      title: "Degenerative Disc",
      description:
        "Treatment for age-related disc degeneration and associated conditions.",
      link: "/degenerative-disc",
    },
    {
      icon: "/img3.jpg",
      title: "Disc Replacement",
      description:
        "Advanced artificial disc replacement surgeries for spinal issues.",
      link: "/disc-replacement",
    },
  ];

  const brainServices = [
    {
      icon: "/Backpain.jpg",
      title: "Brain Tumor Surgery",
      description:
        "Expert surgical removal of benign and malignant brain tumors.",
      link: "/brain-tumor",
    },
    {
      icon: "/Backpain.jpg",
      title: "Brain Aneurysm",
      description:
        "Treatment and management of cerebral aneurysms with cutting-edge techniques.",
      link: "/brain-aneurysm",
    },
    {
      icon: "/Backpain.jpg",
      title: "Blood Clot Treatment",
      description:
        "Emergency and planned interventions for cerebral blood clots.",
      link: "/blood-clot",
    },
    {
      icon: "/Backpain.jpg",
      title: "Headache Treatment",
      description:
        "Comprehensive approach to chronic and severe headache conditions.",
      link: "/headache",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Specialized Services</h2>
          <p>Comprehensive Brain and Spine Care</p>
        </div>

        <div className="services-tabs">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === "spine" ? "active" : ""}`}
              onClick={() => setActiveTab("spine")}
            >
              Spine Procedures
            </button>

            <button
              className={`tab-button ${activeTab === "brain" ? "active" : ""}`}
              onClick={() => setActiveTab("brain")}
            >
              Brain Procedures
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "spine" && (
              <div className="tab-pane active">
                <div className="services-grid">
                  {spineServices.map((service, index) => (
                    <div key={index} className="service-card">
                      <div className="service-icon">
                        <img src={service.icon} alt={service.title} />
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <a href={service.link} className="service-link">
                        Learn More <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "brain" && (
              <div className="tab-pane active">
                <div className="services-grid">
                  {brainServices.map((service, index) => (
                    <div key={index} className="service-card">
                      <div className="service-icon">
                        <img src={service.icon} alt={service.title} />
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <a href={service.link} className="service-link">
                        Learn More <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="services-cta">
          <p>Can't find what you're looking for?</p>
          <a href="#contact" className="btn-primary">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
