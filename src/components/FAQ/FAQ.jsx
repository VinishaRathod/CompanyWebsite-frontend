import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'What is your return policy?',
      answer: 'You can return items within 30 days of purchase for a full refund.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping usually takes 5-7 business days.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to most countries worldwide.',
    },
    {
      question: 'Can I change my order after it has been placed?',
      answer: 'Orders can be modified within 24 hours of placement.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach our support team via email or phone.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-subheading">FREQUENT QUESTIONS</h2>
      <h3 className="faq-heading">Do you have any Questions</h3>
      <div className="accordion">
        {questions.map((item, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <span className="accordion-icon">{activeIndex === index ? '-' : '+'}</span>
              {item.question}
            </div>
            {activeIndex === index && <div className="accordion-answer">{item.answer}</div>}
            <div className="accordion-divider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;