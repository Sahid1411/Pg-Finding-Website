import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pg_logo from "../../assets/pg images/pglogo.png";
// import Navitems from "./Navitems";
import "./Navbar.css";
import profile from "../../assets/svg folder/profile-user.svg"; 
import axios from "axios";
import NewNavbar from "./NewNavbar";


  
function Navbar(){

  const [pgName, setPgName] = useState(""); 
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");    
  
    try {
      const response = await axios.post("http://localhost:4000/api/search", {
        pg_name: pgName.trim()
      });
      
      if (response.data.id) {
        navigate(`/pgdetails/${response.data.id}`); 
      } else {
        setError("PG not found"); 
      }
    } catch (error) {
      setError(error.response?.data?.message || "PG not found. Try a different name.");
    }
  }; 
    
  const adminId = localStorage.getItem("adminId")?.replace(/"/g, ""); 
  const ownerId = localStorage.getItem("ownerId")?.replace(/"/g, ""); 
  const userId = localStorage.getItem("userId")?.replace(/"/g, ""); 
  
  if (isMobile) {
    return <NewNavbar />;
  }
    return (
     <>
       {/* <div className="container"> */}
      <header style={{backgroundColor: '#C2B5FF'}} className="navbar-width hide-navbar d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 px-3 mb-0 sticky-lg-top custom-header">
      {/* Product logo component with name  */}
          <div className='d-flex justify-content-between align-items-center'>
            <Link to='/' style={{textDecoration:'none'}} className='d-flex ' >  
              <img className=' p-0 m-0' style={{height:'40px',width:'40px'}} src={pg_logo} alt="pg-logo" />
              <p style={{marginTop:'5px',marginLeft:'5px',fontFamily: "Bebas Neue, sansSerif",fontWeight: "400", fontStyle: "normal",fontSize:'24px'}}>MurPg</p>
            </Link>
        </div>
  

      {/* search bar and search logo component */}
      <div style={{ 
        height: '40px',
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: '#fff', 
        borderRadius: '20px', 
        padding: '8px 12px', 
        width: '250px', 
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <form 
          className="d-flex" 
          role="search" 
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            margin: 0
          }}
        >
    <input 
      type="search" 
      placeholder="Search..." 
      style={{ 
        flex: 1, 
        border: 'none', 
        outline: 'none', 
        backgroundColor: 'transparent', 
        color: '#333', 
        fontSize: '14px', 
        padding: '4px',
        marginRight: '8px'
      }} 
      value={pgName}
      onChange={(e) => setPgName(e.target.value)} 
    />
    
    <button 
      className="btn" 
      type="submit"
      style={{
        background: 'transparent',
        border: 'none',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <i 
        className="fa-solid fa-magnifying-glass" 
        style={{ 
          color: '#63E6BE', 
          fontSize: '16px', 
          cursor: 'pointer',
          transition: 'transform 0.2s ease'
        }} 
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
    </button>
  </form>

  {error && <p style={{ color: "red", marginTop: '5px', fontSize: '12px' }}>{error}</p>}
</div>  
     
  
        {/* <Navitems /> */}
         <ul className="nav  d-flex nav-pills">
                  
          <Link className='nav-link nav-hover' style={{ textDecoration: 'none' }} to='/'>Home</Link>
          <Link className='nav-link nav-hover' style={{ textDecoration: 'none' }} to='/pg'>Pg's</Link>
          <Link className='nav-link nav-hover' style={{ textDecoration: 'none' }} to='/services'>Services</Link>
          <Link className='nav-link nav-hover' style={{ textDecoration: 'none' }} to='/about'>About Us</Link>
          <Link className='nav-link nav-hover' style={{ textDecoration: 'none' }} to='/contact'>Contact Us</Link>
                 
                  
                  
        
          <div className="d-flex align-items-center text-end">
          <div className="dropdown responsive-btn">
            <button type="button" className="btn btn-outline-primary me-1 dropdown-toggle" aria-expanded="false">
              <img style={{ height: "20px" }} src={profile} alt="profile-svg" />
            </button>   
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={`/user-panel/${userId}`}>Customer Profile</Link></li>  
              <li><Link className="dropdown-item" to={`/owner-panel/${ownerId}`}>Owner Profile</Link></li>
              <li><Link className="dropdown-item" to={`/admin-panel/${adminId}`}>Admin Profile</Link></li>
            </ul>
          </div>
 
          <div className="dropdown responsive-btn"> 
            <button type="button" className="btn btn-outline-primary dropdown-toggle" id="custom-hover" aria-expanded="false">
              Login
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/user-login">User</Link></li>
              <li><Link className="dropdown-item" to="/owner-login">Owner</Link></li>
              <li><Link className="dropdown-item" to="/admin-login">Admin</Link></li>            
            </ul>
          </div>
        </div>

        </ul>
  
        </header>
         
    </>
    );
} 
export default Navbar;
