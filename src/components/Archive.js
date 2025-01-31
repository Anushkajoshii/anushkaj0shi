import React, { useState, useEffect } from "react";
import "../styles/archive.css";

import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";
import img9 from "../assets/9.jpeg";
import img10 from "../assets/10.jpeg";
import img11 from "../assets/11.jpeg";
import img12 from "../assets/12.jpeg";
import img13 from "../assets/13.jpeg";
import img14 from "../assets/14.jpeg";
import img15 from "../assets/15.jpeg";
import img16 from "../assets/16.jpeg";
import img17 from "../assets/17.jpeg";
import img18 from "../assets/18.jpeg";
import img19 from "../assets/19.jpeg";
import img20 from "../assets/20.jpeg";
import img21 from "../assets/21.jpeg";
import img22 from "../assets/22.jpeg";
import img23 from "../assets/23.jpeg";
import img24 from "../assets/24.jpeg";
import img25 from "../assets/25.jpeg";
import img26 from "../assets/26.jpeg";
import img27 from "../assets/27.jpeg";
import img28 from "../assets/28.jpeg";
import img29 from "../assets/29.jpeg";
import img30 from "../assets/30.jpeg";
import img31 from "../assets/31.jpeg";
import img32 from "../assets/32.jpeg";
import img33 from "../assets/33.jpeg";
import img34 from "../assets/34.jpeg";

const allImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34
];

const Archive = () => {
  const [media, setMedia] = useState(allImages.slice(0, 5)); // Initially show 5 images
  const [lightboxIndex, setLightboxIndex] = useState(null); // Track which image is open in the lightbox

  const loadMore = () => {
    setMedia(allImages); // Load all images when "Show More" is clicked
  };

  const openLightbox = (index) => {
    setLightboxIndex(index); // Open clicked image in lightbox
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToPrevious = () => {
    setLightboxIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : allImages.length - 1));
  };

  const goToNext = () => {
    setLightboxIndex((prevIndex) => (prevIndex < allImages.length - 1 ? prevIndex + 1 : 0));
  };

  // Add keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") goToNext();
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="archive-container">
      <h1>activities and things that bring me to life</h1>
      <div className="gallery">
        {media.map((src, index) => (
          <img key={index} src={src} alt={`Archive ${index + 1}`} onClick={() => openLightbox(index)} />
        ))}
      </div>
      {media.length < allImages.length && (
        <button className="show-more" onClick={loadMore}>Show More</button>
      )}

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox">
          <span className="close" onClick={closeLightbox}>&times;</span>
          
          {/* Image Counter */}
          <div className="image-counter">
            {lightboxIndex + 1} / {allImages.length}
          </div>

          <button className="prev" onClick={goToPrevious}>&#10094;</button>
          <img src={allImages[lightboxIndex]} alt={`Expanded ${lightboxIndex + 1}`} />
          <button className="next" onClick={goToNext}>&#10095;</button>
        </div>
      )}
    </div>
  );
};

export default Archive;
