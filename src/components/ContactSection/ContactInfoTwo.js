import { contactInfoTwo } from "@/data/contactSection";
import { contactInfoTwoEn } from "@/data/en/contactSection";
import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactInfoTwo = ({ lan = "vi" }) => {
  const info = lan === "vi" ? contactInfoTwo : contactInfoTwoEn;
  return (
    <section className="contact-info-two">
      <div className="auto-container">
        <Row>
          {info.map(({ id, icon, text, email, phone }) => (
            <Col key={id} md={12} lg={4}>
              <div className="contact-info-two__card animated fadeInUp">
                <i className={icon}></i>
                <a
                  href={
                    email
                      ? `mailto:${email}`
                      : phone
                      ? `tel:${text.split(" ").join("")}`
                      : "#"
                  }
                >
                  {text}
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ContactInfoTwo;
