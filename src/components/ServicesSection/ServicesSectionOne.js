import { servicesSectionOne } from "@/data/servicesSection";
import { servicesSectionOneEn } from "@/data/en/servicesSection";
import React from "react";
import { Col, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import SingleServiceOne from "./SingleServiceOne";

const ServicesSectionOne = ({ lan = "vi" }) => {
  const { title, text, services } =
    lan === "vi" ? servicesSectionOne : servicesSectionOneEn;
  return (
    <section className="services-section">
      <div className="auto-container">
        <Row className="clearfix">
          <Col xl={6} lg={12} md={12} sm={12} className="title-block">
            <div className="inner">
              <div className="sec-title">
                <h2>
                  <span>{title}</span>
                  <span className="dot">.</span>
                </h2>
                <div className="lower-text">{text}</div>
              </div>
            </div>
          </Col>
          {services.map((service) => (
            <SingleServiceOne key={service.id} service={service} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ServicesSectionOne;
