import { personalCreditReportData, tabData } from "@/data/solutions";
import { personalCreditReportDataEn, tabDataEn } from "@/data/en/solutions";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";

const Individual1 = ({ lan = "vi" }) => {
  const [current, setCurrent] = useState("p-tab-2");
  const myTabData = lan === "vi" ? tabData : tabDataEn;
  const myPersonalCreditReportData =
    lan === "vi" ? personalCreditReportData : personalCreditReportDataEn;

  return (
    <section className="process-one">
      <div className="project-tab">
        <div className="auto-container">
          <div className="tab-btns-box">
            <div className="tabs-header">
              <ul className="product-tab-btns clearfix">
                {myTabData.tabButton.map(({ id, name, tab, href, count }) => (
                  <li
                    key={id}
                    onClick={() => (location.href = href)}
                    className={`p-tab-btn${id === 2 ? " active-btn" : ""}`}
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
        {myPersonalCreditReportData.map(({ id, image, title, text, lists }) => (
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
                    <h3>{title}</h3>
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

export default Individual1;
