import React from 'react'
import "./WebService.css"
  
// images import 
import service1 from "../../assets/Services images/stressFreeSearch.jpg"
import service2 from "../../assets/Services images/findYourMatch.jpg"
import service3 from "../../assets/Services images/bonAppetite.jpg"
import service4 from "../../assets/Services images/yourLife.jpg"
   
function ServiceBox(props){  
    return (  
        <>
           <div className="col-lg-3 col-md-6 col-sm-6 col-6  ">
                <div className="d-flex justify-content-center align-items-center box  web-service-box  mx-2">
                    <img className='web-service-image' src={props.img} alt="security-officer image" />
                </div>
                <h5 className='text-center web-service-heading mt-2'>{props.heading}</h5>
                <p  className='text-center web-service-font web-service-margin'>{props.para || "Lorem ipsum dolor sit amet."} </p>
            </div>
        </>
    ) 
} 
 
const WebService = () => {
  return (
    <>
        <div className='mx-5 my-3 '>
            <h2 className='text-center  my-2'>Why MurPg?</h2>
            <div  className='d-flex justify-content-center align-items-center '>
                <p  className='text-center web-service-font-2'>MurPg will provide you the services to make you find your desired Pg</p>
            </div>
            
            <div className="container my-2">
                <div className="row ">
                    <ServiceBox heading='Stress free search' para='Real property photos and Transparent pricing' img={service1}/>
                    <ServiceBox heading='Find your Match' para='Lots of options to choose from (private, twin & multi-sharing)' img={service2}/>
                    <ServiceBox heading='Your Life Your Rules' para='Advance info on house rules to live like you do' img={service4}/>
                    <ServiceBox heading='Bon apetitie' para="Info on meal type and offerings to know what's cooking" img={service3}/>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default WebService
