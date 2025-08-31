import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminDashboard.css"; // Import CSS
import AdminSidebar from "./AdminSidebar";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import AdminDashboardRightSide from "./AdminDashboardRightSide";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
 
const AdminDashboard = () => {
  const [open, setOpen] = useState(false); // Sidebar toggle state
  const adminId = localStorage.getItem("adminId")?.replace(/"/g, "");

  
  return (
    <>
    <Header /> 
    <Navbar />
    {adminId ? (
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
          <AdminSidebar />  
        </div>
      </Drawer>

      {/* Sidebar (Always visible on large screens) */}
      <div className="col-lg-3 col-md-4 d-none d-md-block sidebar-container">
        <AdminSidebar />
      </div>

      {/* Main Content (Doesn't move when sidebar opens) */}
      <div className="col-lg-9 col-md-8 col-sm-12 col-12">
        <AdminDashboardRightSide />
      </div>
    </div>  
     ) : (
      <div
        style={{ height: "50vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <p id="custom-para">
          no admin signed in , please sign in first{" "}
          <Link to="/admin-login">Sign In</Link>{" "} 
        </p>
      </div>
    )}  
    </>  
  );  
};

export default AdminDashboard;
