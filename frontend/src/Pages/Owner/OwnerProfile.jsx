import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import background_img from "../../assets/pages image/profile-background.jpeg";
import { Form, Card } from "react-bootstrap";
import OwnerLeftSidebar from './OwnerLeftSidebar.jsx';
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OwnerDashboard.css";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";  
import axios from 'axios';

import boy_avatar from "../../assets/svg folder/boy avatar.svg";
import girl_avatar from "../../assets/svg folder/girl avatar.svg";

const OwnerProfile = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState({ name: "", email: "", gender: "", address: "", phone: "" });
  const navigate = useNavigate();
  const id = localStorage.getItem("ownerId")?.replace(/"/g, "");

  useEffect(() => {
    if (!id) {
      navigate("/owner-login");    
      return;
    }

    const fetchData = async () => {  
      try {
        const response = await axios.get(`http://localhost:4000/api/owner/${id}`);
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, [id, navigate]);

  return (
    <>
      <div className="row position-relative">
        {/* Sidebar Toggle Button (Small Size) */}
        <IconButton className="d-lg-none d-md-none position-absolute menu-btn" onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>

        {/* Sidebar as Drawer (For Small Screens) */}
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <div className="sidebar-drawer">
            <IconButton onClick={() => setOpen(false)} className="close-btn">
              <CloseIcon />
            </IconButton>
            <OwnerLeftSidebar />
          </div>
        </Drawer>

        {/* Sidebar (Large Screens) */}
        <div className="col-lg-3 col-md-4 d-none d-md-block sidebar-container"> 
          <OwnerLeftSidebar />
        </div>

        {/* Main Content */}
        <div className="col-lg-9 col-md-8 col-sm-12 col-12">
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
              <div></div>
              <div>
                <Link to="/">
                  <i className="fa-solid fa-house" id="custom-user-hover" style={{ fontSize: "25px", marginRight: "5px" }} />
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

          <div className="d-flex justify-content-between" style={{ marginTop: "60px", marginLeft: "20px" }}>
            <div>
              <h2>{users.name}</h2>
              <p className="d-flex align-items-center">
                <i className="fa-regular fa-envelope" style={{ color: "#63E6BE", marginRight: "6px", fontSize: "20px", marginTop: "4px" }} /> 
                {users.email}
              </p>
            </div>

            <div>
              <span style={{ fontSize: "20px", marginRight: "10px" }}>Edit</span>
              <Link to={`/owner/update-profile/${id}`}>
                <i className="fa-solid fa-pen-to-square" style={{ color: "#1653bb", fontSize: "30px", marginRight: "10px" }} />
              </Link>
            </div>
          </div>

          {/* Profile Card */}
          <div className="container mt-4">
            <Card className="mt-4 p-4 shadow-sm">
              <h2 className="mb-3">Profile Information</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Name:</Form.Label>
                      <Form.Control
                        className="user-data-custom"
                        type="text"
                        value={users.name}
                        disabled
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Gender:</Form.Label>
                      <Form.Control
                        className="user-data-custom"
                        type="text"
                        value={users.gender}
                        disabled
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Address:</Form.Label>
                      <Form.Control
                        className="user-data-custom"
                        type="text"
                        value={users.address || "Update Address"}
                        disabled
                      />
                    </Form.Group>
                  </Form>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Email ID:</Form.Label>
                      <Form.Control
                        className="user-data-custom"
                        type="email"
                        value={users.email}
                        disabled
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone:</Form.Label>
                      <Form.Control
                        className="user-data-custom"
                        type="text"
                        value={users.phone || "Update Phone"}  
                        disabled
                      />
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerProfile;
