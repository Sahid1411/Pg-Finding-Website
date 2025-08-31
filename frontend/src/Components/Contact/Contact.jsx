  import React from 'react'
  import contact_background from "../../assets/pages image/contact.png";
  import "./Contact.css"
  
  const Contact = () => {
    return ( 
      <>
        <div className="about-section my-3 contact-width">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
          <h2  className='mb-5 mx-2 contact-heading'>Contact Us</h2>
          <p className='mx-2 contact-font'>Have questions or need assistance? We're here to help! Whether you’re looking for the perfect PG, need guidance, or have any queries, feel free to reach out.</p>
          <p className='mx-2 contact-font'>Our team is always ready to assist you.</p>
  
          <div className='d-flex justify-content-center my-4'>
            <button style={{borderRadius:'25px'}} className="btn btn-warning">Contact Now</button>
          </div>

        </div> 
        <div className="col-lg-6 col-md-6 col-sm-5 col-5 mt-2  text-center">
          <img className='contact-img'  src={contact_background} alt="About Us"  />
        </div>
      </div>

      {/* cards */}
      <div  style={{height:'230px',backgroundColor:' #f7f7f7'}} className=' row my-3'>
                
                <div  className="col-lg-3 col-md-3 col-sm-6 col-6 p-4  ">
                    <div style={{ borderRadius: "5px",backgroundColor:'#ffffff' }} className="contact-box-height d-flex border justify-content-center align-items-center">
                        <div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <i className="fa-solid fa-phone contact-svg-font " style={{ color: "#63E6BE",  }} />
                            </div>
                            <p className="contact-font my-1">+91-7849938749 </p>
                        </div>
                    </div>
                    
                </div>
   
  
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 p-4  ">
                    <div style={{  borderRadius: "5px",backgroundColor:'#ffffff' }} className="contact-box-height  d-flex border justify-content-center align-items-center">
                        <div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <i className="fa-solid fa-envelope contact-svg-font" style={{ color: "#74C0FC",  }} />
                            </div>
                        {/* <small>murpg@gmail.com</small> */}
                        <p className="contact-font my-1">murpg@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div  className="col-lg-3 col-md-3 col-sm-6 col-6 p-4  ">
                    <div style={{ borderRadius: "5px",backgroundColor:'#ffffff' }} className="contact-box-height  d-flex border justify-content-center align-items-center">
                        <div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <i className="fa-brands fa-whatsapp contact-svg-font" style={{ color: "#FFD43B",  }} />
                            </div>
                            <p className="contact-font my-1">+91-7849938749  </p>
                            
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-6 p-4  ">
                    <div style={{ borderRadius: "5px",backgroundColor:'#ffffff' }} className="contact-box-height  d-flex border justify-content-center align-items-center">
                        <div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <i className="fa-solid fa-building contact-svg-font" style={{ color: "#B197FC", }} />
                            </div>
                            <p className="contact-font my-1 text-center">	Rajabheta, Dibrugarh, Assam, 786004, India </p>
                        </div>
                    </div>
                </div>

                
                
                
            </div>
    </div>
  </div>
  
      </>
    ) 
  }
  
  export default Contact;
  