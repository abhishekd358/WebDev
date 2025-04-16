import React from "react";
import { useContext } from "react";
import ApiContext from "../Context/ApiContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Component } from "react";

const CenterMode = () => {
  const { images } = useContext(ApiContext);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <>
      <div className="slider-container">
      
        {images.length === 0 ? (
          <p>Loading images...</p>
        ) : (
          <Slider {...settings}>
            {images.map((image) => (
              <div
                key={image.id}
                className="img-container">
                <img
                  src={image.previewURL}
                  alt={image.tags}
                  className="slide-image"/>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </>
  );
};

export default CenterMode;
