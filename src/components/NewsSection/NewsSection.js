import newsSection from "@/data/newsSection";
import newsSectionEn from "@/data/en/newsSection";
import useActive from "@/hooks/useActive";
import Link from "next/link";
import React from "react";
import { Row } from "react-bootstrap";
import SingleNews from "./SingleNews";

const NewsSection = ({
  lan = "vi",
  className = "",
  showTitle = true,
  isMore = false,
}) => {
  const ref = useActive("#blog");
  const { title, newsData } = lan === "vi" ? newsSection : newsSectionEn;
  const buttonText = lan === "vi" ? "Xem tiếp" : "Load more";
  return (
    <section ref={ref} className={`news-section ${className}`} id="blog">
      <div className="auto-container">
        {showTitle && (
          <div className="sec-title centered">
            <h2>
              {title}
              <span className="dot">.</span>
            </h2>
          </div>
        )}

        <Row className="clearfix">
          {newsData.slice(0, showTitle ? 3 : undefined).map((news) => (
            <SingleNews key={news.id} news={news} />
          ))}
        </Row>
        {isMore && (
          <div className="more-box">
            <Link href="/blog" className="theme-btn btn-style-one">
              <i className="btn-curve"></i>
              <span className="btn-title">{buttonText}</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
