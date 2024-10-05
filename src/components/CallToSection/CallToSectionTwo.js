import Link from "next/link";
import React from "react";

const CallToSectionTwo = ({
  className = "",
  btnClassName = "btn-style-two",
  lan = "vi",
}) => {
  const title =
    lan === "vi"
      ? "Chúng tôi đã sẵn sàng"
      : "We’re Ready to Bring \n Trusted Solutions";
  const strButtonText = lan === "vi" ? "Liên hệ ngay" : "Call Us Now";
  return (
    <section className={`call-to-section-two ${className}`}>
      <div className="auto-container">
        <div className="inner clearfix">
          <h2>{title}</h2>
          <div className="link-box">
            <Link href="/contact" className={`theme-btn ${btnClassName}`}>
              <i className="btn-curve"></i>
              <span className="btn-title">{strButtonText}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToSectionTwo;
