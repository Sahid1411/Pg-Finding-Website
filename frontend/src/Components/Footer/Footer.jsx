import React from 'react'
import { Container } from 'react-bootstrap'
import "./Footer.css"
import { Link } from 'react-router-dom'

function FooterBox(){
  return (
    <>
      <div className="col-lg-2 col-md-2 col-sm-4 col-4 col-md-2 mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column custom-footer">
        <li className="nav-item mb-2"><Link to='/'>Home</Link></li>
        <li className="nav-item mb-2"><Link to='/pg'>Pg's</Link></li>
        <li className="nav-item mb-2"><Link to='/services'>Services</Link></li>
        <li className="nav-item mb-2"><Link to='/about'>About Us</Link></li>
        <li className="nav-item mb-2"><Link to='/contact'>Contact Us</Link></li>
      </ul>
    </div>
    </>
  )
  
}

const Footer = () => {
  return (
    <>
    <Container>
      <footer className="py-5">
    <div className="row">      

      <FooterBox />
      <FooterBox />
      <FooterBox />

      <div className="col-lg-4 col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p className='footer-font'>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p className='footer-font'>© {new Date().getFullYear()} Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="fa-brands fa-instagram"></i></a></li>
      </ul>
    </div>
  </footer>
  </Container>
    </>
  )
}

export default Footer
