import {
  featureSeven,
  featureSeven1,
  featureSeven2,
} from "@/data/featuresSection";
import {
  featureSevenEn,
  featureSeven1En,
  featureSeven2En,
} from "@/data/en/featuresSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const FeatureSeven = ({ lan = "vi" }) => {
  const { title, text, features } =
    lan === "vi" ? featureSeven : featureSevenEn;
  const { title1, text1, features1 } =
    lan === "vi" ? featureSeven1 : featureSeven1En;
  const { title2, text2, features2 } =
    lan === "vi" ? featureSeven2 : featureSeven2En;
  return (
    <section className="feature-seven">
      <div className="auto-container">
        <div className="sec-title centered">
          <h3>
            {title}
            <span className="dot">.</span>
          </h3>

          <h6 className="dot">{text}</h6>
        </div>
        <Row>
          {features.map(({ id, title, href, text, image }) => (
            <Col key={id} md={12} lg={6}>
              <div className="feature-seven-card">
                <div className="feature-seven-card__inner">
                  <div className="feature-seven-card__image">
                    <Image
                      src={require(`@/images/resource/${image}`).default.src}
                      alt=""
                    />
                  </div>
                  <div className="feature-seven-card__content">
                    <h3 className="feature-seven-card__title">
                      <Link href="">{title}</Link>
                    </h3>
                    <p className="feature-seven-card__text">{text}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <hr />
      <div className="auto-container">
        <div className="sec-title centered">
          <h3>
            {title1}
            <span className="dot">.</span>
          </h3>
          <h6 className="dot">{text1}</h6>
        </div>
        <Row>
          {features1.map(({ id, title, href, text, image }) => (
            <Col key={id} md={12} lg={4}>
              <div className="feature-seven-card">
                <div className="feature-seven-card__inner">
                  <div className="feature-seven-card__image">
                    <Image
                      src={require(`@/images/resource/${image}`).default.src}
                      alt=""
                    />
                  </div>
                  <div className="feature-seven-card__content">
                    <h3 className="feature-seven-card__title">
                      <Link href="">{title}</Link>
                    </h3>
                    <p className="feature-seven-card__text">{text}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <hr />
      <div className="auto-container">
        <div className="sec-title centered">
          <h3>
            {title2}
            <span className="dot">.</span>
          </h3>
          <h6 className="dot">{text2}</h6>
        </div>
        <Row>
          {features2.map(({ id, title, href, text, image }) => (
            <Col key={id} md={12} lg={4}>
              <div className="feature-seven-card">
                <div className="feature-seven-card__inner">
                  <div className="feature-seven-card__image">
                    <Image
                      src={require(`@/images/resource/${image}`).default.src}
                      alt=""
                    />
                  </div>
                  <div className="feature-seven-card__content">
                    <h3 className="feature-seven-card__title">
                      <Link href="">{title}</Link>
                    </h3>
                    <p className="feature-seven-card__text">{text}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default FeatureSeven;
