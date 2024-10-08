import { funFactsOne } from "@/data/funFacts";
import { funFactsOneEn } from "@/data/en/funFacts";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Row } from "react-bootstrap";
import JarallaxImage from "../Jarallax/JarallaxImage";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const FunFactsOne = ({ lan = "vi" }) => {
  const { bg, funFacts } = lan === "vi" ? funFactsOne : funFactsOneEn;
  return (
    <Jarallax className="facts-section" speed={0.3} imgPosition="50% 80%">
      <JarallaxImage src={bg.src} />
      <div className="auto-container">
        <div className="inner-container">
          <div className="fact-counter">
            <Row className="clearfix">
              {funFacts.map(({ id, title, count }) => (
                <Col
                  key={id}
                  lg={4}
                  md={4}
                  sm={12}
                  className="column counter-column"
                >
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer count-box">
                        <span className="count-text">
                          <VisibilityCountUp count={count} />
                        </span>
                      </div>
                      <div className="counter-title">{title}</div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </Jarallax>
  );
};

export default FunFactsOne;
