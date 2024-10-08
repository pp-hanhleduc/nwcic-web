import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleNews = ({ news = {} }) => {
  const { image, date, admin, comments, title, text } = news;

  return (
    <Col lg={4} md={6} sm={12} className="news-block animated fadeInUp">
      <div className="inner-box">
        <div className="image-box">
          <Link href="/">
            <Image
              src={require(`@/images/resource/${image}`).default.src}
              alt=""
            />
          </Link>
        </div>
        <div className="lower-box">
          <div className="post-meta">
            <ul className="clearfix">
              <li>
                <span className="far fa-clock"></span> {date}
              </li>
            </ul>
          </div>
          <h5>
            <Link href="/">{title}</Link>
          </h5>
          <div className="text">{text}</div>
          <div className="link-box">
            <Link href="/" className="theme-btn">
              <span className="flaticon-next-1"></span>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleNews;
