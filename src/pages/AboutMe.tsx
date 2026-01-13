import image1 from "../asset/IMG_4085.JPG";
import image2 from "../asset/IMG_3029.JPG";
// Note: IMG_0299.HEIC might not work in browsers, consider converting to JPG/PNG
import "./AboutMe.css";
import { useState, useEffect } from "react";

const AboutMe = () => {
  const images = [image1, image2, image1]; // Add your third image once converted
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="AboutMePage">
      <div className="aboutme-container">
        <div className="aboutme-content">
          <p id="Hello">Hello I'm</p>
          <h1 id="name">Shirish Tripathi</h1>

          <p id="description">
            I am a passionate developer with expertise in modern web
            technologies. I love building intuitive user experiences and
            creating efficient solutions.
          </p>

          <div className="aboutme-links">
            <span id="linkedin">
              <a href="https://www.linkedin.com/in/shirish-tripathi/">
                My LinkedIn Profile
              </a>
            </span>

            <span id="github">
              <a href="https://github.com/shirisharchive">My GitHub Profile</a>
            </span>
          </div>
        </div>

        <div id="photo-section">
          <div className="image-slider">
            <button className="slider-btn prev-btn" onClick={goToPrevious}>
              ‹
            </button>
            <img
              className="image"
              src={images[currentImageIndex]}
              alt={`Shirish Tripathi ${currentImageIndex + 1}`}
              id="profile-photo"
            />
            <button className="slider-btn next-btn" onClick={goToNext}>
              ›
            </button>
            <div className="slider-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
