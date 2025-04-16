import ApiContext from "./ApiContext";
import React , { useEffect, useState } from "react";
function ApiState(props) {

    const api_key = "49717660-48f14e4f71ea1cb8a279d920c";
      const [images, setImages] = useState([]);
    
      useEffect(() => {
        const fetchImages = async () => {
            const api = await fetch(
              `https://pixabay.com/api/?key=${api_key}&q=india&image_type=photo&per_page=20`
            );
            const response = await api.json();
            console.log("Fetched images:", response.hits);
            setImages(response.hits);
        };
    
        fetchImages();
      }, []);


  return (
    <ApiContext.Provider value={{images}}>{props.children}</ApiContext.Provider>
  )
}

export default ApiState;