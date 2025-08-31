import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
  
const UserSidebar = () => {

      let userId = localStorage.getItem("userId")?.replace(/"/g, ""); // Get userId from localStorage

  return (
    <div className="d-flex flex-column p-3 text-white  vh-100" style={{ width: "250px" }}>
      <h2 className="fw-bold mb-4">User Panel</h2>
      
      {/* Search Bar */}  
      <div className="mb-3 position-relative"> 
        <input type="text" className="form-control ps-4" placeholder="Search" />
        <i className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y ms-2 text-secondary"></i>
      </div>
  
      {/* Menu Items */}  
        <Link to={`/user-panel/${userId}`} style={{textDecoration:'none' , color: 'white',marginLeft:'5px'}}><i className="fa-solid fa-house" style={{marginRight:'8px',marginTop:'10px'}} />Home</Link>
        <Link to={`/user/update-profile/${userId}`} style={{textDecoration:'none' , color: 'white',marginLeft:'5px'}}> <i class="fa-solid fa-pen-to-square" style={{marginRight:'8px',marginTop:'10px'}}/> Update Profile</Link>
        <Link to='#' style={{textDecoration:'none' , color: 'white',marginLeft:'5px'}}> <i className="fa-solid fa-gear" style={{marginRight:'8px',marginTop:'10px'}}/> Settings</Link>
        <Link to='#' style={{textDecoration:'none' , color: 'white',marginLeft:'5px'}}> <i className="fa-solid fa-credit-card" style={{marginRight:'8px',marginTop:'10px'}}/> Subscription</Link>
        <Link to='#' style={{textDecoration:'none' , color: 'white',marginLeft:'5px'}}> <i className="fa-solid fa-circle-question" style={{marginRight:'8px',marginTop:'10px'}}/> Help & Support</Link>
      

      {/* Logout Button */}
      <div className="my-4">  
        <button
          className="btn btn-outline-light w-100"
          onClick={() => {
            localStorage.removeItem("authtoken");
            localStorage.removeItem("userId");
            window.location.href = "/user-login";
          }}
        >
          <i className="fa-solid fa-right-from-bracket me-2"></i> Logout
        </button>
      </div>

    </div>
  );
};

export default UserSidebar;
