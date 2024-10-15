import { servicesSectionThree1 } from "@/data/servicesSection";
import { servicesSectionThree1En } from "@/data/en/servicesSection";
import useActive from "@/hooks/useActive";
import React from "react";
import { Row } from "react-bootstrap";
import SingleService from "./SingleService";

const ServicesSectionThree = ({ lan = "vi", className = "" }) => {
  const ref = useActive("#services");
  const { title, services } =
    lan === "vi" ? servicesSectionThree1 : servicesSectionThree1En;

  return (
    <section
      ref={ref}
      className={`services-section-three ${className}`}
      id="services"
    >
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>
            {title}
            <span className="dot">.</span>
          </h2>
        </div>
        <div className="services">
          <Row className="clearfix">
            {services.map((service) => (
              <SingleService service={service} key={service.id} />
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionThree;
