import React from 'react'
import "./Services.css"

// images import 
import service1 from "../../assets/Services images/security-officer.jpg"
import service2 from "../../assets/Services images/cleaning.jpg"
import service3 from "../../assets/Services images/wifi.png"
import service4 from "../../assets/Services images/Electricity.jpg"
import service5 from "../../assets/Services images/2-wheeler-parking.jpg"
import service6 from "../../assets/Services images/Healthy-food.jpg"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
  
  
function ServiceBox(props){  
    return (
        <>

            <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-2 ">
                <div className='d-flex justify-content-center align-items-center'>
                    <div className="d-flex justify-content-center align-items-center box  service-box my-2 mx-2">
                        <img className='service-image' src={props.img} alt="cleaning" />
                    </div>

                </div>
                    <h4 className='text-center service-heading'>{props.heading}</h4>
                <p  className='text-center service-font service-margin'>{props.para || "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."} </p>
            </div>
        </>
    )
} 

const Services = () => {
  return (
    <>
        <div className='d-flex justify-content-center'>
            <Link to='/pg' className="my-4 btn btn-primary">more... <i className="fa-solid fa-right-long"></i></Link>
        </div>

        <div className='my-5'>
            <h2 className='text-center my-2'>Services</h2>
            <div  className='d-flex justify-content-center align-items-center '>
                <p style={{width:'70%'}} className='text-center service-font-2'>MurPg will try to provide you the necessary aminities to make you feel comfortable like your Home</p>
            </div>

            <Container>
            
            <div className="row ">

                <ServiceBox heading='Cleaning'     para='We provide top-quality cleaning services. Ensuring hygiene and freshness always.' img={service2}/>
                <ServiceBox heading='Security'     para='Our trained security guards ensure safety. Protecting premises with dedication.' img={service1}/>
                <ServiceBox heading='Parking'      para='Safe and secure parking spaces available. Hassle-free and convenient service.' img={service5}/>
                <ServiceBox heading='Wifi'         para='High-speed internet for seamless browsing. Stay connected anytime, anywhere.' img={service3}/>
                <ServiceBox heading='Electricity'  para='Uninterrupted power supply for all needs. Reliable and efficient energy service' img={service4}/>
                <ServiceBox heading='Healthy Food' para='Nutritious meals for a healthier lifestyle. Fresh ingredients, delicious flavors' img={service6}/>

            </div>
            </Container>
        </div>
    </>  
  )
}

export default Services
