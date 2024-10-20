import { personalCreditScoreData, tabData } from "@/data/solutions";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";

const Individual = () => {
  const [current, setCurrent] = useState("p-tab-1");

  return (
    <section className="process-one">
      <div className="project-tab">
        <div className="auto-container">
          <div className="tab-btns-box">
            <div className="tabs-header">
              <ul className="product-tab-btns clearfix">
                {tabData.tabButton.map(({ id, name, tab, href, count }) => (
                  <li
                    key={id}
                    onClick={() => (location.href = href)}
                    className={`p-tab-btn${id === 1 ? " active-btn" : ""}`}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        {personalCreditScoreData.map(({ id, image, title, text, lists }) => (
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
                      <span>{title}</span>
                    </h3>
                  </div>
                )}
                {text && <p className="process-one__summery">{text}</p>}

                <ul className="list-unstyled process-one__list">
                  {lists.map((text, i) => (
                    <li key={i}>
                      <i className="flaticon-check"></i>
                      {text}
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

export default Individual;
