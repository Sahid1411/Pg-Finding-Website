import React from 'react'
import pg_logo from "../../assets/pg images/pglogo.png";
import { Link } from 'react-router-dom';
import "./Navbar.css"


const NewNavbar = () => { 
  return (
    <>
        <div style={{backgroundColor: '#C2B5FF'}}  className="navbar-width  d-flex justify-content-center align-items-center ">
            <div className='d-flex justify-content-between align-items-center'>
                <Link to='/' style={{textDecoration:'none'}} className='d-flex justify-content-between align-items-center' >  
                    <img className=' p-0 m-0' style={{height:'35px',width:'35px'}} src={pg_logo} alt="pg-logo" />
                    <p style={{marginLeft:'5px',fontFamily: "Bebas Neue, sansSerif",fontWeight: "400", fontStyle: "normal",fontSize:'20px',paddingTop: "6px"}}>MurPg</p>
                </Link>
            </div>
        </div>
    </>
  )
} 

export default NewNavbar

