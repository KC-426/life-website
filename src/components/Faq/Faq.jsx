import React, { useState } from "react";
import SectionTitleOne from "../Sections/SectionTitle/SectionTitleOne";

const Faq = () => {
  // Use state to track which accordion item is open
  const [openItem, setOpenItem] = useState(null);

  // Function to toggle accordion items
  const toggleAccordion = (index) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
  };

  return (
    <div className="container">
    <div style={{
      marginTop: 50
    }} >
      <div className="containerfaq">
        <SectionTitleOne align="center" spaceBottom="50px">
          Frequently Asked Questions
        </SectionTitleOne>
        <div className="accordion">
          {faqData.map((item, index) => (
            <div className="accordion-item" key={index}>
              <button
                id={`accordion-button-${index}`}
                aria-expanded={openItem === index}
                onClick={() => toggleAccordion(index)}
              >
                <span className="accordion-title">{item.question}</span>
                <span className="icon" aria-hidden="true"></span>
              </button>
              {openItem === index && (
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Faq;

const faqData = [
  {
    question: "What Services Does Life Antidote Offer as a Pharmaceutical Distributor?",
    answer:
      "Life Antidote offers comprehensive pharmaceutical distribution and export services, supplying a wide range of medications to healthcare providers in the USA and beyond.",
  },
  {
    question: "What does Life Antidote specialize in?",
    answer:
      "Life Antidote specializes in providing specialty medicines and drugs for rare diseases, including cancer, hepatitis B, and orphan drugs.",
  },
  {
    question: "Are their medications FDA-approved for rare diseases?",
    answer:
      "They prioritize FDA-approved medications for rare diseases, ensuring safety and efficacy.",
  },
  {
    question: "Do they export pharmaceuticals globally?",
    answer:
      "Indeed, Life Antidote exports pharmaceutical products to international markets, contributing to global healthcare access.",
  },
  {
    question: "What is their range of pharmaceutical products?",
    answer:
      "They offer a diverse range of pharmaceutical products, including generics, brand-name medications, and medical supplies.",
  },
  {
    question: "How can I contact Life Antidote for business inquiries?",
    answer:
      "You can easily reach out to them through their website, where you'll find contact information and a dedicated inquiry form.",
  },
  {
    question: "How Do They Ensure Product Safety During Transportation?",
    answer:
      "They use secure and temperature-controlled transportation methods to ensure product safety during transit.",
  },
];

