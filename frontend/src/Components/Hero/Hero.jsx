import React, { useState, useEffect } from "react";
import pg_2 from "../../assets/pg images/pg-2.jpg";
import pg_3 from "../../assets/pg images/pg-4.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Hero.css";
import { Link } from "react-router-dom";

const images = [pg_2, pg_3];

const Hero = () => {    
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (  
    <section>  
      <div className="row  hero-height "> 
        {/* Left Section */}
        <div style={{ backgroundColor: "#FAF3E0", }} className="col-lg-6  col-md-6 col-sm-12 d-flex align-items-center pt-3">
          <div className="mx-5">
            <h1 className="display-5 animated fadeIn mb-4 hero-heading">
              Find a <span className="text-secondary">Perfect Home</span> To Live and study comfortably
            </h1>
            <p className="hero-font">
            Looking for a safe, affordable, and comfortable place to stay? Explore verified PGs with top amenities, easy accessibility, and a hassle-free booking experience.Your ideal home is just a click away!
            </p>
            <Link className="btn btn-primary hero-font hero-button" to='/pg'>
              Find PG
            </Link> 
          </div>
        </div>

        {/* Right Section (Image & Arrows) */}
        <div className="col-lg-6 col-md-6 col-sm-12 p-0 position-relative overflow-hidden">
          {/* Left Chevron Button */}
          <div
            className="chevron-btn position-absolute"
            style={{
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              zIndex: 10,
              cursor: "pointer",
              backgroundColor: "rgba(0,0,0,0.5)",
              padding: "10px",
              borderRadius: "50%",
            }}
            onClick={prevImage}
          >
            <FaChevronLeft className="text-white" />
          </div>

          {/* Right Chevron Button */}
          <div
            className="chevron-btn position-absolute"
            style={{
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              zIndex: 10,
              cursor: "pointer",
              backgroundColor: "rgba(0,0,0,0.5)",
              padding: "10px",
              borderRadius: "50%",
            }}
            onClick={nextImage}
          >
            <FaChevronRight className="text-white" />
          </div>

          {/* Hero Image */}
          <img
            src={images[currentIndex]}
            alt="PG"
            className="hero-image "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
