// components/FAQ.jsx
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Who is the No 1 Neurosurgeon in India?",
      answer:
        "Dr. Arun Saroha is one of the top neurosurgeons in India, with over 25 years of experience and more than 7,000 successful surgeries to his credit. Renowned for his expertise in neurosurgery and spine surgery, he specializes in treating complex brain and spine conditions using advanced surgical techniques.",
    },
    {
      question: "What does neurosurgery mean?",
      answer:
        "Neurosurgery, also known as neurological surgery, is a specialized branch of medicine focused on diagnosing, treating, and surgically managing disorders affecting the brain, spinal cord, peripheral nerves, and cerebrovascular system.",
    },
    {
      question: "How do I prepare for neurosurgery?",
      answer:
        "Your neurosurgeon will provide specific instructions, which may include fasting, stopping certain medications, and undergoing pre-surgical tests like blood work and imaging scans.",
    },
    {
      question: "What is the recovery time after neurosurgery?",
      answer:
        "Recovery time varies based on the type of surgery and the patient's overall health. Minimally invasive procedures may require a few weeks of recovery, while complex surgeries might take several months.",
    },
    {
      question: "Why is Neurosurgery so Difficult?",
      answer:
        "Many neurosurgical procedures take just one or two hours, but complicated procedures, such as the removal of invasive brain tumors, can take up to 15 hours due to the complexity and precision required.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Get answers to common questions about neurosurgical care</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <i
                  className={`fas ${
                    activeIndex === index ? "fa-minus" : "fa-plus"
                  }`}
                ></i>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
