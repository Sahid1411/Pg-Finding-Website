import React from 'react'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import WebService from '../Components/Website Services/WebService'
import Pg from '../Components/PG/Pg'
import Services from '../Components/Services/Services'
import Video from '../Components/Video/Video'
import Testimonial from '../Components/Testimonial/Testimonial'
import Contact from '../Components/Contact/Contact'
import Map from '../Components/Map/Map'
import Footer from '../Components/Footer/Footer'
   
const HomePage = () => {
  return (
    <>
        <Header />    
        <Navbar />
        <Hero /> 
        <WebService />
        <Pg /> 
        <Services />
        <Video />
        <Testimonial />
        <Contact />
        <Map />
        <Footer />
    </>
  )
}

export default HomePage
