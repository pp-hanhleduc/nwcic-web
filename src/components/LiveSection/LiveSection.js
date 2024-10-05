import liveSection from "@/data/liveSection";
import liveSectionEn from "@/data/en/liveSection";
import Link from "next/link";
import React, { useState } from "react";
import TextSplit from "../Reuseable/TextSplit";
import VideoModal from "../VideoModal/VideoModal";

const LiveSection = ({ className = "", lan = "vi" }) => {
  const [isOpen, setOpen] = useState(false);
  const { secTitle, bg, videoId, title } =
    lan === "vi" ? liveSection : liveSectionEn;
  const buttonText = lan === "vi" ? "Xem thêm" : "Read more";
  return (
    <>
      <section className={`live-section ${className}`}>
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>
              {secTitle}
              <span className="dot">.</span>
            </h2>
          </div>
          <div className="main-image-box">
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${bg.src})` }}
            ></div>
            <div className="inner clearfix">
              <div className="round-box animated fadeInUp">
                <div className="round-inner">
                  <div className="vid-link">
                    <a onClick={() => setOpen(true)} className="lightbox-image">
                      <div className="icon">
                        <span className="flaticon-play-button-1"></span>
                        <i className="ripple"></i>
                      </div>
                    </a>
                  </div>
                  <div className="title">
                    <h3>
                      <TextSplit text={title} />
                    </h3>
                  </div>
                  <div className="more-link">
                    <Link href="/about">{buttonText}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LiveSection;
