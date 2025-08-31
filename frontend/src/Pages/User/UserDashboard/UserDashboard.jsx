import UserSidebar from './UserSidebar'
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import UserDashboardRightSide from './UserDashboardRightSide';
import { Link } from 'react-router-dom';
import Navbar from '../../../Components/Navbar/Navbar';
import Header from '../../../Components/Header/Header';
  
const UserDashboard = () => {

    const [open, setOpen] = useState(false); // Sidebar toggle state
    const userId = localStorage.getItem("userId")?.replace(/"/g, ""); // Get ownerId from localStorage

  
  return (
    <>
     <Header /> 
     <Navbar />
     {userId ? (
    <div className='row position-relative'>

       {/* Sidebar Toggle Button (Small Size) */}
       <IconButton
        style={{color:'white'}}
        className="d-lg-none d-md-none  position-absolute menu-btn"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />  
      </IconButton>

      {/* Sidebar as Drawer (For Small Screens) */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div className="sidebar-drawer">
        
          {/* Close Button Inside Sidebar */}
          <IconButton onClick={() => setOpen(false)} className="close-btn">
            <CloseIcon />
          </IconButton>


          <UserSidebar />
        </div>
      </Drawer>
  
      {/* Left Side  */}
      <div className="col-lg-3 col-md-4 d-none d-md-block sidebar-container bg-primary border">
        <UserSidebar /> 
      </div>

      {/* RightSide  */}
      <div className="col-lg-9 col-md-8 col-sm-12 col-12 border">
        <UserDashboardRightSide />
      </div>
      
    </div>

  ) : (
    <div
      style={{ height: "50vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <p id="custom-para">
        No user signed in, please sign in first{" "}
        <Link to="/user-login">Sign In</Link>{" "}  
      </p>
    </div>
  )}

</>
  );
}

export default UserDashboard
