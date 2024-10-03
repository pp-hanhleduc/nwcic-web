import React from "react";

const MapBox = () => {
  return (
    <div className="map-box">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.677359189356!2d105.80112080978891!3d21.005566488496065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad964441328b%3A0x55d99271bdda1425!2sDiamond%20Flower%20Tower!5e0!3m2!1sen!2sus!4v1727970060514!5m2!1sen!2sus"
        style={{ border: 0 }}
        aria-hidden={false}
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default MapBox;
