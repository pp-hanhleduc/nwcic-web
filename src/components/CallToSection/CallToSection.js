import Link from "next/link";
import React from "react";

const CallToSection = ({ lan = "vi", className = "", container = true }) => {
  const str =
    lan === "vi"
      ? "Bạn cần thêm thông tin?"
      : "Explore Our Localized Products \n Now!";
  const buttonText = lan === "vi" ? "Liên hệ ngay" : "Contact Us";
  return (
    <section className={`call-to-section ${className}`}>
      <div className={container ? "auto-container" : "inner clearfix"}>
        <div className={container ? "inner clearfix" : ""}>
          <div className="shape-1 animated slideInRight"></div>
          <div className="shape-2 animated fadeInDown"></div>
          <div className={container ? "" : "auto-container clearfix"}>
            <h2>{str}</h2>
            <div className="link-box">
              <Link href="/contact" className="theme-btn btn-style-two">
                <i className="btn-curve"></i>
                <span className="btn-title">{buttonText}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToSection;
