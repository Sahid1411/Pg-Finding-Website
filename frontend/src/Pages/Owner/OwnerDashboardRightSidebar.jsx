import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./OwnerDashboard.css"
import AdminDashboardGraph from "./../Admin/AdminDashboardGraph";
import Testimonial from "./../Admin/Testimonial";
import { Link } from "react-router-dom";

const OwnerDashboardRightSidebar = () => {
     // for Calendar 
        const [date, setDate] = useState(new Date());
    
        const [price, setPrice] = useState([3000, 64000]);
        
          const handleChange = (event, index) => {
            const newValue = Number(event.target.value);
            const updatedPrice = [...price];
            updatedPrice[index] = newValue;
            setPrice(updatedPrice);
          };
          
          const [checked, setChecked] = useState(false);    
        
  return (
    <div>
            <div className='d-flex justify-content-between  p-3'>
                
                {/* <Link to='/'><i className="fa-solid fa-house" style={{color:'#6a6aea',fontSize:'30px'}} /></Link> */}
                <div>

                </div>  

                <p className="fs-3 fw-bold">Owner  Dashboard</p>
                <div>
                    <Link to='/'><i className="fa-solid fa-house" style={{color:'#6a6aea',fontSize:'20px',marginRight:'5px'}} /></Link>
                </div>
             </div>
 
             <div  style={{backgroundColor:' #f7f7f7'}} className='custom-height-admin-1 row'>
                 
                 {/* User  */}
                 <div  className="col-lg-3 col-md-3 col-sm-6 col-6 p-3  ">
                     <div style={{ height: "100%", width: "100%", borderRadius: "5px",backgroundColor:'#ffffff' }} className=" d-flex border justify-content-center align-items-center">
                         
                         <div>
                             <div  className='d-flex justify-content-center align-items-center p-2 '>
                                 <i className="fa-solid fa-user admin-svg-font" style={{ color: "#FFD43B"}} />
                             </div>
                             <div  className='d-flex justify-content-between align-items-center '>
                                 <p className="text-center fs-4 my-1">2500 <br /> <span style={{fontSize:'15px'}}>Users</span> </p>
                             </div>
                         </div>
 
                     </div>
                     
                 </div>
 
                 {/* Time  */}
                 <div  className="col-lg-3 col-md-3 col-sm-6 col-6 p-3 ">
                     <div style={{ height: "100%", width: "100%", borderRadius: "5px",backgroundColor:'#ffffff' }} className=" d-flex border justify-content-center align-items-center">
                         
                         <div>
                             <div  className='d-flex justify-content-center align-items-center p-2 '>
                                 <i className="fa-regular fa-clock admin-svg-font" style={{ color: "#B197FC"}} />
                             </div>
                             <div  className='d-flex justify-content-between align-items-center '>
                                 <p className="text-center fs-4 my-1">123 <br /> <span style={{fontSize:'15px'}}> Time</span>  </p>
                             </div>
                         </div>
                         
                     </div>
                 </div>
 
                 {/* Downloads  */}
                 <div className="col-lg-3 col-md-3 col-sm-6 col-6 p-3 ">
                     <div style={{ height: "100%", width: "100%", borderRadius: "5px",backgroundColor:'#ffffff' }} className=" d-flex border justify-content-center align-items-center p-2">
 
                         <div>
                             <div  className='d-flex justify-content-center align-items-center  p-2'>
                                 <i className="fa-solid fa-cloud-arrow-down admin-svg-font" style={{ color: "#7c7d7e",}} />
                             </div>
                             <div  className='  d-flex justify-content-between align-items-center'>
                                 <p className="text-center fs-4 my-1">1,805 <br /> <span style={{fontSize:'15px'}}>Downloads</span> </p>
                             </div>
                         </div>
 
                     </div>
                 </div>
 
                 {/* Comments  */}
                 <div className="col-lg-3 col-md-3 col-sm-6 col-6 p-3 ">
                     <div style={{ height: "100%", width: "100%", borderRadius: "5px",backgroundColor:'#ffffff' }} className=" d-flex border justify-content-center align-items-center">
                         <div>
                             <div  className='d-flex justify-content-center align-items-center  p-2'>
                                 <i className="fa-regular fa-comments admin-svg-font" style={{ color: "#89b3a7", }} />
                             </div>
                             <div  className='  d-flex justify-content-between align-items-center'>
                                 <p className="text-center fs-4 my-1">545 <br /> <span style={{fontSize:'15px'}}>Comments</span> </p>
                             </div>
                         </div>
                     </div>
                 </div>
                 
             </div>
 
             <div style={{backgroundColor:' #f7f7f7'}}  className="custom-height-admin-2 row ">
                 
                 {/* facebook  */}
                 <div className="col-lg-3  col-md-3 col-sm-6 col-6 p-3 ">
                   <div>
                     <div style={{height:'50%',width:'100%',backgroundColor:'#3b5998',borderTopLeftRadius:'5px',borderTopRightRadius:'5px'}} className='d-flex justify-content-center align-items-center p-2'>
                         <i className="fa-brands fa-facebook-f admin-svg-font" style={{ color: "#ffffff",  }} />
                     </div>
                     <div style={{height:'70%',width:'100%',borderBottomLeftRadius:'5px',borderBottomRightRadius:'5px',backgroundColor:'#ffffff'}} className='border  d-flex justify-content-between align-items-center'>
                         
                         <div>
                             <p className="fs-4 " style={{marginLeft:'20px'}}>35k</p>
                             <p className="admin_card-font" style={{marginLeft:'12px'}}>Followers</p>
                         </div>
 
                         <div>
                             <p className="fs-4 " style={{marginRight:'18px'}}>128</p>
                             <p className="admin_card-font" style={{marginRight:'18px'}}>Feeds</p>
                         </div>
                     </div>
                     </div>
                 </div> 
 
                 {/* twitter  */}
                 <div  className="col-3 col-md-3 col-sm-6 col-6 p-3 ">
                   <div>
 
                   
                     <div style={{height:'50%',width:'100%',backgroundColor:'#00aced',borderTopLeftRadius:'5px',borderTopRightRadius:'5px'}} className='d-flex justify-content-center align-items-center p-2'>
                         <i className="fa-brands fa-x-twitter admin-svg-font" style={{ color: "#ffffff",}} />
                     </div>
 
                     <div style={{height:'70%',width:'100%',borderBottomLeftRadius:'5px',borderBottomRightRadius:'5px',backgroundColor:'#ffffff'}} className='border  d-flex justify-content-between align-items-center'>
                         <div>
                             <p className="fs-4 " style={{marginLeft:'20px'}}>35k</p>
                             <p className="admin_card-font" style={{marginLeft:'12px'}}>Followers</p>
                         </div>
 
                         <div>
                             <p className="fs-4 " style={{marginRight:'18px'}}>128</p>
                             <p className="admin_card-font" style={{marginRight:'18px'}}>Feeds</p>
                         </div>
                     </div>   
                     </div>             
                 </div>
 
                 {/* linkedin  */}
                 <div  className="col-3 col-md-3 col-sm-6 col-6 p-3">
                   <div>
 
                  
                     <div style={{height:'50%',width:'100%',backgroundColor:'#0077B5',borderTopLeftRadius:'5px',borderTopRightRadius:'5px'}} className='d-flex p-2 justify-content-center align-items-center'>
                         <i className="fa-brands fa-linkedin-in admin-svg-font" style={{ color: "#ffffff", }} />
                     </div>
 
                     <div style={{height:'70%',width:'100%',borderBottomLeftRadius:'5px',borderBottomRightRadius:'5px',backgroundColor:'#ffffff'}} className='border  d-flex justify-content-between align-items-center'>
                         <div>
                             <p className="fs-4 " style={{marginLeft:'20px'}}>35k</p>
                             <p className="admin_card-font" style={{marginLeft:'12px'}}>Followers</p>
                         </div>
 
                         <div>
                             <p className="fs-4 " style={{marginRight:'18px'}}>128</p>
                             <p className="admin_card-font" style={{marginRight:'18px'}}>Feeds</p>
                         </div>
                     </div>
                     </div>
                 </div> 
 
 
                 {/* google plus  */}
                 <div  className="col-3 col-md-3 col-sm-6 col-6 p-3 ">
                   <div>
                     <div style={{height:'50%',width:'100%',backgroundColor:'#d34836',borderTopLeftRadius:'5px',borderTopRightRadius:'5px'}} className='d-flex justify-content-center align-items-center p-2'>
                         <i className="fa-brands fa-google-plus-g admin-svg-font" style={{ color: "#ffffff",}} />
                     </div>
                     <div style={{height:'70%',width:'100%',borderBottomLeftRadius:'5px',borderBottomRightRadius:'5px',backgroundColor:'#ffffff'}} className='border  d-flex justify-content-between align-items-center'>
                         <div>
                             <p className="fs-4 " style={{marginLeft:'20px'}}>35k</p>
                             <p className="admin_card-font" style={{marginLeft:'12px'}}>Followers</p>
                         </div>
 
                         <div>
                             <p className="fs-4 " style={{marginRight:'18px'}}>128</p>
                             <p className="admin_card-font" style={{marginRight:'18px'}}>Feeds</p>
                         </div>
                     </div>
                     </div>
                 </div>
 
                 
             </div>
 
             <div style={{backgroundColor:' #f7f7f7'}} className="row">
                 <div className="col-12 p-3 ">
                     <div style={{height:'100%'}} className=" rounded">
                         <AdminDashboardGraph />
                     </div>
                 </div>
                 <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                     <Testimonial />                    
 
                 </div>
 
                 <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-1 ">
                     <div style={{height:'100%'}} className=" rounded">
                         {/* calendar  */}
                         <div className="container mt-4">
                             <Card className="shadow p-1 mb-5" style={{ backgroundColor: "#6666d1", color: "#F0F0F0" }}>
                                 <Card.Body>
                                 <Card.Title className="text-center mb-3">Owner Dashboard Calendar</Card.Title>
                                 
                                 <Calendar   
                                     onChange={setDate}
                                     value={date}
                                     className="custom-calendar w-100 rounded border-0"
                                 />
                                 <p className="text-center mt-3">
                                     <strong style={{ color: "#FFD700" }}>Selected Date:</strong> {date.toDateString()}
                                 </p>
                                 </Card.Body>
                             </Card>
                         </div>
                         
                     </div>
                 </div>
             </div>
    </div>
  )
}

export default OwnerDashboardRightSidebar
