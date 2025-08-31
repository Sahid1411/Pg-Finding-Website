import React from 'react'
import about_page_image from "../../assets/pg images/pg-about.jpg";
import "./About.css"

const About = () => {
  return ( 
    <>
      <div className="about-section my-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className='about-heading mb-5 mx-2'>ABOUT US</h1>
              <p className='mx-2 about-font'>
                We are dedicated to helping you find the perfect PG that fits your needs. 
                With a seamless search experience, verified listings, and a focus on comfort and affordability, 
                we make your stay hassle-free.
              </p> 
              <p>Join us in finding a place you can call home!</p>        
            </div>

            <div className="col-md-6 text-center">
              <img 
                style={{width:'90%'}} 
                src={about_page_image} 
                alt="About Us" 
                className="img-fluid" 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  ) 
}

export default About
