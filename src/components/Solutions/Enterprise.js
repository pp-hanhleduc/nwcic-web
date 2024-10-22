import { enterpriseData } from "@/data/solutions";
import { enterpriseDataEn } from "@/data/en/solutions";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
const Enterprise = ({ lan = "vi" }) => {
  const [current, setCurrent] = useState("p-tab-1");

  const myEnterPriseData = lan === "vi" ? enterpriseData : enterpriseDataEn;
  return (
    <section className="process-one">
      <div className="auto-container">
        {myEnterPriseData.map(({ id, image, title, text, lists }) => (
          <Row key={id}>
            <Col md={12} lg={6} className="process-one__image__column">
              <div className="process-one__image animated fadeInLeft">
                <Image
                  src={
                    require(`@/images/resource/solutions/${image}`).default.src
                  }
                  alt=""
                />
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="process-one__content">
                {title && (
                  <div className="sec-title">
                    <h3>
                      <TextSplit>{title}</TextSplit>
                    </h3>
                  </div>
                )}
                {text && (
                  <p
                    className="process-one__summery"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                )}

                <ul className="list-unstyled process-one__list">
                  {lists.map((text, i) => (
                    <li key={i}>
                      <i className="flaticon-check"></i>
                      <div dangerouslySetInnerHTML={{ __html: text }} />
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
};

export default Enterprise;
