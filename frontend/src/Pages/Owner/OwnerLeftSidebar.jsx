import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const OwnerLeftSidebar = () => {   
  const ownerId = localStorage.getItem("ownerId")?.replace(/"/g, "");

  return (
    <div className="d-flex flex-column p-3 text-white vh-100" style={{ width: "250px" }}>
      <Link to='/dashboard' style={{color:'white',textDecoration:'none',fontSize:'25px'}} className="fw-bold mb-4">Owner Panel</Link>

      {/* Search Bar */}
      <div className="mb-3 position-relative">
        <input type="text" className="form-control ps-4" placeholder="Search" />
        <i className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y ms-2 text-secondary"></i>
      </div>

      {/* Menu Items */}
        <Link to={`/owner-panel/${ownerId}`} style={{textDecoration:'none' , color: 'white',marginLeft:'5px'}}><i className="fa-solid fa-house" style={{marginRight:'8px',marginTop:'10px'}} />Home</Link>
        <Link to='/owner/profile-setting' style={{textDecoration:'none' , color: 'white',marginLeft:'5px'}}> <i className="fa-solid fa-gear" style={{marginRight:'8px',marginTop:'10px'}}/>Profile Settings</Link>
        <Link to={`/owner/update-profile/${ownerId}`} style={{textDecoration:'none' , color: 'white',marginLeft:'5px'}}> <i class="fa-solid fa-pen-to-square" style={{marginRight:'8px',marginTop:'10px'}}/> Update Profile</Link>
        <Link to='/owner/add-pg' style={{textDecoration:'none' , color: 'white',marginLeft:'5px'}}> <i className="fa-solid fa-credit-card" style={{marginRight:'8px',marginTop:'10px'}}/> Add Pg</Link>
        <Link to='/owner/see-pg' style={{textDecoration:'none' , color: 'white',marginLeft:'5px'}}> <i className="fa-solid fa-credit-card" style={{marginRight:'8px',marginTop:'10px'}}/> See Pg</Link>
        <Link to='#' style={{textDecoration:'none' , color: 'white',marginLeft:'5px'}}> <i className="fa-solid fa-circle-question" style={{marginRight:'8px',marginTop:'10px'}}/> Help & Support</Link>
      

      {/* Logout Button */}
      <div className="my-4">  
        <button 
          className="btn btn-outline-light w-100"
          onClick={() => {
            localStorage.removeItem("authtoken");
            localStorage.removeItem("ownerId");
            window.location.href = "/owner-login";
          }}
        >
          <i className="fa-solid fa-right-from-bracket me-2"></i> Logout
        </button>
      </div>
    </div>
  );
};

export default OwnerLeftSidebar;
