import React from "react";
import { useEffect, useState } from "react";
import './ImageSLider.css'
function ImageSlider() {
  const api_key = "49717660-48f14e4f71ea1cb8a279d920c";
  // creating the state to store the array data
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // importing 10 images from the pixabay api because we have already learn how to fetch data from a API
  useEffect(() => {
    // create a function to fetch data
    const fetchImages = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=india&image_type=photo&per_page=200`
      );
      const response = await api.json();
      console.log(response.hits);
      setImages(response.hits);
    };
    fetchImages();
  }, []);


//   functions for the buttons
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };




  return (


    <>
    <div className="slider">
        <button className="nav" onClick={goToPrevious} >
        ❮
      </button>
      {images.length > 0 && (
        <div key={images[currentIndex].id} className="img-container">
            <img src={images[currentIndex].largeImageURL} className="slide-image"  alt="image" />
          </div>
      )}
      <button className="nav"
      onClick={goToNext}>
      ❯
      </button>
      </div>
    </>
  );
}

export default ImageSlider;
