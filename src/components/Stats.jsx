// components/Stats.jsx
import React from "react";

const Stats = () => {
  const stats = [
    {
      number: "100%",
      label: "Patient Satisfaction",
      icon: "fas fa-smile",
    },
    {
      number: "25+",
      label: "Years Experience",
      icon: "fas fa-award",
    },
    {
      number: "7000+",
      label: "Successful Surgeries",
      icon: "fas fa-brain",
    },
    {
      number: "50+",
      label: "Countries Served",
      icon: "fas fa-globe",
    },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-content">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
