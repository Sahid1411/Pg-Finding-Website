import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OwnerDashboard.css"; // Import CSS
import OwnerLeftSidebar from "./OwnerLeftSidebar";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import OwnerDashboardRightSidebar from "./OwnerDashboardRightSidebar";  
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";

const OwnerDashboard = () => {
  const [open, setOpen] = useState(false); // Sidebar toggle state
  const ownerId = localStorage.getItem("ownerId")?.replace(/"/g, ""); // Get ownerId from localStorage

  return (
    <>
    <Header /> 
    <Navbar />
  {ownerId ? (   
    <div className="row position-relative">

      {/* Sidebar Toggle Button (Small Size) */}
      <IconButton
        className="d-lg-none d-md-none position-absolute menu-btn"
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
          <OwnerLeftSidebar />  
        </div>
      </Drawer>

      {/* Sidebar (Always visible on large screens) */}
      <div className="col-lg-3 col-md-4 d-none d-md-block sidebar-container">
        <OwnerLeftSidebar />
      </div>

      {/* Main Content (Doesn't move when sidebar opens) */}
      <div className="col-lg-9 col-md-8 col-sm-12 col-12">
        <OwnerDashboardRightSidebar />
      </div>
    </div>
  ) : (
    <div
      style={{ height: "50vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <p id="custom-para">
        No owner signed in, please sign in first{" "}
        <Link to="/owner-login">Sign In</Link>{" "}  
      </p>
    </div>
  )}
</>

  );
};

export default OwnerDashboard;
