import React from "react";
import "./Map.css"

const Map = () => {
  return (
    <section className="my-5 map-width"> 
      <div  className="border map-height ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14162.535380776555!2d94.88755654454155!3d27.44951973697676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDibrugarh%20University%20nearby%20all%20pg&#39;s!5e0!3m2!1sen!2sin!4v1741972572527!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div> 
    </section>
  );     
};

 

export default Map;