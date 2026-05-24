import React, { useEffect, useState } from "react";
import PGSidebar from "./PGSidebar";
import PGRightSide from "./PGRightSide";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import.meta.env.VITE_API_URL;

const Pg = () => { 
  const [open, setOpen] = useState(false); 
  const [pgs, setPgs] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/pgs`);
        setPgs(response.data.pgData);
      } catch (error) {
        console.log("Initial fetch error", error);
      }
    };
    fetchInitialData(); 
  }, []);

  return ( 
    <div className="row position-relative pg-component-width">
      <h1 className="text-center">PG</h1>

      {/* Sidebar Toggle Button (Mobile View) */}
      <IconButton
        className="d-lg-none d-md-none position-absolute"
        style={{ top: 5, left: 10, zIndex: 1000, width: "20%", backgroundColor: "white" }}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />  
      </IconButton>

      {/* Drawer Sidebar for Small Screens */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div style={{ width: 250, padding: "10px" }}>
          <IconButton onClick={() => setOpen(false)} style={{ float: "right" }}>
            <CloseIcon />
          </IconButton>
          <PGSidebar setPgs={setPgs} />
        </div>
      </Drawer>

      {/* Sidebar for Larger Screens */}
      <div className="col-lg-3 col-md-4 d-none d-md-block px-1">
        <PGSidebar setPgs={setPgs} />
      </div>
 
      {/* Main Content */}
      <div className="col-lg-9 col-md-8 col-sm-12 col-12">
      <PGRightSide pgs={pgs} setPgs={setPgs} />

      </div>
    </div>
  );
};

export default Pg;
