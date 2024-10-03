import React from "react";

const MapBox = () => {
  return (
    <div className="map-box">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.26092985039!2d105.79508716586884!3d21.007786789317137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad001c006b49%3A0x79429a9f98a00e3e!2sCharmVit%20Tower!5e0!3m2!1sen!2s!4v1727930466235!5m2!1sen!2s"
        style={{ border: 0 }}
        aria-hidden={false}
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default MapBox;
