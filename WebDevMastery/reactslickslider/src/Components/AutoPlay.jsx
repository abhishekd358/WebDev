import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './AutoPlay.css'
import { useContext } from "react";
// importing the APicontext
import ApiContext from "../Context/ApiContext"; 

function AutoPlay() {
    const {images} = useContext(ApiContext)

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
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
}

export default AutoPlay;
