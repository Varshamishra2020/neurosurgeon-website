import React from "react";
const WhyChooseUs = () => {
  const features = [
    {
      icon: "fas fa-users",
      title: "Highest Patient Satisfaction",
      description:
        "Consistently achieving exceptional patient outcomes and satisfaction rates.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      bgImage: "/image1.jpg",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Safe & Effective Results",
      description:
        "Utilizing proven techniques and advanced technology for optimal safety.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      bgImage: "/image1-2.jpg",
    },
    {
      icon: "fas fa-heartbeat",
      title: "Patient Safety Priority",
      description:
        "Comprehensive care protocols ensuring patient wellbeing at every step.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      bgImage: "/image1-3.jpg",
    },
    {
      icon: "fas fa-hospital",
      title: "Advanced Facilities",
      description:
        "State-of-the-art operation theaters and recovery rooms with modern equipment.",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      bgImage:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: "fas fa-stethoscope",
      title: "Minimally Invasive Approach",
      description:
        "Focus on techniques that reduce recovery time and improve outcomes.",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      bgImage:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: "fas fa-hand-holding-heart",
      title: "Personalized Care",
      description:
        "Tailored treatment plans designed for each patient's unique needs.",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      bgImage:
        "https://images.unsplash.com/photo-1584467735871-8db9ac8e5e3a?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section className="why-choose-us">
      {" "}
      <div className="container">
        {" "}
        <div className="section-header">
          {" "}
          <h2>Why Choose Dr. Arun Saroha?</h2>{" "}
          <p>Excellence in Neurosurgical Care</p>{" "}
        </div>{" "}
        <div className="features-grid">
          {" "}
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${feature.bgImage})`,
              }}
            >
              {" "}
              <div
                className="feature-icon"
                style={{ background: feature.gradient }}
              >
                {" "}
                <i className={feature.icon}></i>{" "}
              </div>{" "}
              <h3>{feature.title}</h3> <p>{feature.description}</p>{" "}
              <div className="feature-overlay"></div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      <style jsx>{`
        .why-choose-us {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          overflow: hidden;
        }
        .why-choose-us::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")
            center/cover;
          opacity: 0.05;
          animation: backgroundShift 20s ease-in-out infinite;
        }
        @keyframes backgroundShift {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(1deg);
          }
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }
        .section-header h2 {
          font-size: 3rem;
          background: linear-gradient(135deg, #2f94e1, #27d974);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          animation: fadeInUp 0.8s ease-out;
        }
        .section-header p {
          font-size: 1.3rem;
          color: #6c757d;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }
        .feature-card {
          background: white;
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          background-blend-mode: overlay;
          color: white;
          animation: fadeInUp 0.6s ease-out both;
        }
        .feature-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        .feature-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        .feature-card:nth-child(3) {
          animation-delay: 0.3s;
        }
        .feature-card:nth-child(4) {
          animation-delay: 0.4s;
        }
        .feature-card:nth-child(5) {
          animation-delay: 0.5s;
        }
        .feature-card:nth-child(6) {
          animation-delay: 0.6s;
        }
        .feature-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(47, 148, 225, 0.9),
            rgba(39, 217, 116, 0.9)
          );
          opacity: 0;
          transition: all 0.4s ease;
        }
        .feature-card:hover::before {
          opacity: 1;
        }
        .feature-card:hover {
          transform: translateY(-15px) scale(1.03);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        .feature-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 25px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          transition: all 0.4s ease;
          position: relative;
          z-index: 2;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotateY(180deg);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }
        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          position: relative;
          z-index: 2;
          transition: all 0.4s ease;
        }
        .feature-card:hover h3 {
          color: white;
          transform: translateY(-5px);
        }
        .feature-card p {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          position: relative;
          z-index: 2;
          transition: all 0.4s ease;
        }
        .feature-card:hover p {
          color: white;
          transform: translateY(-5px);
        }
        .feature-overlay {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.6s ease;
        }
        .feature-card:hover .feature-overlay {
          left: 100%;
        } /* Stats Section */
        .stats-section {
          background: linear-gradient(135deg, #2f94e1, #27d974);
          border-radius: 20px;
          padding: 50px 30px;
          box-shadow: 0 15px 35px rgba(47, 148, 225, 0.3);
          position: relative;
          z-index: 2;
          animation: fadeInUp 0.8s ease-out 0.8s both;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          text-align: center;
        }
        .stat-item {
          color: white;
        }
        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        .stat-label {
          font-size: 1.1rem;
          opacity: 0.9;
          font-weight: 500;
        } /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        } /* Responsive Design */
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .feature-card {
            padding: 30px 20px;
          }
          .section-header h2 {
            font-size: 2.2rem;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stat-number {
            font-size: 2.2rem;
          }
        }
        @media (max-width: 480px) {
          .why-choose-us {
            padding: 60px 0;
          }
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .feature-card {
            padding: 25px 15px;
          }
        }
      `}</style>{" "}
    </section>
  );
};
export default WhyChooseUs;
