import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Nav, Card } from "react-bootstrap";
import "./UserDashboard.css"

import boy_avatar from "../../../assets/svg folder/boy avatar.svg"
import girl_avatar from "../../../assets/svg folder/girl avatar.svg"
import background_img from "../../../assets/pages image/profile-background.jpeg"
import axios from "axios";

const UserDashboardRightSide = () => {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const [users, setUsers] = useState({ name: "", email: "",gender: "",});
    const navigate = useNavigate();
    const id = localStorage.getItem("userId")?.replace(/"/g, ""); // Get userId from localStorage  

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/user/${id}` 
          );
          setUsers(response.data);
        } catch (error) {
          console.log("Error while fetching data", error);
        }
      };
      fetchData();
    }, [id]);

  return (
    <>
     {/* <div className="col-9 border"> */}
            <div
              style={{
                height: "150px",
                position: "relative",
                backgroundImage: `url(${background_img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="border"  
            >
              <div className="d-flex justify-content-between align-items-center p-3">
                
               <div>
                </div>  
   
                <div>
                    <Link to="/">
                    <i className="fa-solid fa-house" id='custom-user-hover'  style={{  fontSize: "25px" ,marginRight:'5px'}} />
                    </Link> 
                </div>
              
              </div>
    
              <div
                className="border"
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "50%", 
                  position: "absolute",
                  top: "100px",
                  left: "30px",
                  backgroundColor: "blue",
                  overflow: "hidden",
                }}
              >

              <img
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={users.gender.toLowerCase() === "female" ? girl_avatar : boy_avatar}
                alt="profile-img"
              />       
              
             </div>
            </div> 
    
    
            <div className='d-flex justify-content-between ' style={{marginTop:'60px',marginLeft:'20px'}}>
              <div>
                <h2>{users.name}</h2>
                <p className=' d-flex align-items-center'> <i class="fa-regular fa-envelope" style={{color:'#63E6BE',marginRight:'6px',fontSize:'20px',marginTop:'4px'}} /> {users.email}</p>
              </div>
    
              <div>
                <span style={{fontSize:'20px',marginRight:'10px'}}>Edit</span> <Link to={`/user/update-profile/${id}`}><i class="fa-solid fa-pen-to-square" style={{color:'#1653bb',fontSize:'30px',marginRight:'10px'}} /></Link>  
              </div>
            </div>
    
           
            
            <div className="container mt-4">
         
          {/* profile section  */}
          <Card className="mt-4 p-4 shadow-sm">
            <h2 className="mb-3">Profile Information</h2>
    
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <Form> 
                <Form.Group className="mb-3">
                  <Form.Label>Name: </Form.Label>
                  <Form.Control
                    className="user-data-custom"
                    style={{ cursor: 'not-allowed' }}
                    type="text"
                    value={users.name}
                    readOnly
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Gender: </Form.Label>
                  <Form.Control
                    className="user-data-custom"
                    style={{ cursor: 'not-allowed' }}
                    type="text"
                    value={users.gender}
                    readOnly
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Address: </Form.Label>
                  <Form.Control
                    className="user-data-custom"
                    style={{ cursor: 'not-allowed' }}
                    type="text"
                    value={users.address || "Update Address"}
                    readOnly
                  />
                </Form.Group>
              </Form>

              </div>
    
    
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <Form>
              <Form.Group className="mb-3 ">
                <Form.Label>Email ID: </Form.Label>
                <Form.Control
                  className="user-data-custom"
                  style={{cursor:'not-allowed'}}
                  type="password"
                  placeholder={`${users.email}`}
                  value={currentPassword}
                  readOnly // This makes the input box non-editable
                />
              </Form.Group>
    
              <Form.Group className="mb-3 ">
                <Form.Label>Phone: </Form.Label>
                <Form.Control
                  className="user-data-custom"
                  style={{cursor:'not-allowed'}}
                  type="password"
                  value={newPassword}
                  placeholder={`${users.phone}` || "Update phone"}
                  readOnly // This makes the input box non-editable
                />
              </Form.Group>
    
              
    
             
            </Form>
              </div>
    
             

            </div>
    
          </Card>
        </div>
    
           {/* </div> */}
       </> 
  )
}

export default UserDashboardRightSide
