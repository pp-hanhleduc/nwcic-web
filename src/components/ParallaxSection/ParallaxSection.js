import parallaxSection from "@/data/parallaxSection";
import parallaxSectionEn from "@/data/en/parallaxSection";
import dynamic from "next/dynamic";
import React from "react";
import JarallaxImage from "../Jarallax/JarallaxImage";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const ParallaxSection = ({ lan = "vi" }) => {
  console.log("PAARA ---", lan);
  const { bg, icon, title, title2 } =
    lan === "vi" ? parallaxSection : parallaxSectionEn;
  return (
    <Jarallax speed={0.3} imgPosition="50% 80%" className="parallax-section">
      <JarallaxImage src={bg.src} />
      <div className="auto-container">
        <div className="content-box">
          <div className="icon-box">
            <span className={icon}></span>
          </div>
          <h2>
            {title} <span>{title2}</span>
          </h2>
        </div>
      </div>
    </Jarallax>
  );
};

export default ParallaxSection;
