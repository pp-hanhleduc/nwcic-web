import { faqsSection } from "@/data/faqsSection";
import { faqsSectionEn } from "@/data/en/faqsSection";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Faqs = ({ allFaqs = {} }) => {
  const { faqs, defaultCurrent } = allFaqs;
  const [current, setCurrent] = useState(defaultCurrent);

  return (
    <Col lg={6} md={12} sm={12} className="faq-block">
      <ul className="accordion-box clearfix">
        {faqs.map(({ id, title, text }) => (
          <li
            key={id}
            className={`accordion block${
              current === id ? " active-block" : ""
            }`}
          >
            <div
              onClick={() => setCurrent(id)}
              className={`acc-btn${current === id ? " active" : ""}`}
            >
              <span className="count">{id}.</span>
              {title}
            </div>
            <div
              className={`acc-content animated${
                current === id ? " current slideInUp" : ""
              }`}
            >
              <div className="content">
                <div className="text">{text}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Col>
  );
};

const FaqsSection = ({ lan = "vi" }) => {
  const myFaqs = lan === "vi" ? faqsSection : faqsSectionEn;

  return (
    <section className="faqs-section">
      <div className="auto-container">
        <Row className="clearfix">
          {myFaqs.map((faqs) => (
            <Faqs key={faqs.id} allFaqs={faqs} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default FaqsSection;
