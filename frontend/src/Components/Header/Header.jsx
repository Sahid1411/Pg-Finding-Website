import React from 'react'
import facebook from "../../assets/svg folder/facebook.svg"
import instagram from "../../assets/svg folder/instagram.svg"
import linkedin from "../../assets/svg folder/linkedin.svg"
import mail from "../../assets/svg folder/mail.svg"
import mail_2 from "../../assets/svg folder/mail.svg"
import phone from "../../assets/svg folder/phone.svg"

import "./Header.css"

function SmallPara(props){
  return (
    <>
       <div style={{marginLeft:'30px',marginTop:'10px'}} className='d-flex '>
          <img style={{height:'20px',width:'20px'}} src={props.img} alt="logo" />
          <p style={{marginLeft:'5px'}}>{props.para}</p>
       </div>
    </>
  )
}  



const Header = () => {
  return (
    <>
      <header style={{height:'37px'}} id='hide-header' className='d-flex  justify-content-between '>
        <div style={{marginLeft:'20px'}} className='d-flex '>
          <img className='me-2' style={{height:'15px',width:'15px',marginTop:'10px'}} src={facebook} alt="linked-logo" />
          <img className='me-2' style={{height:'15px',width:'20px',marginTop:'11px'}} src={instagram} alt="linked-logo" />
          <img className='me-2' style={{height:'15px',width:'20px',marginTop:'10px'}} src={linkedin} alt="linked-logo" />
          <img className='me-2' style={{height:'15px',width:'20px',marginTop:'11px'}} src={mail} alt="logo" />

         <SmallPara img={phone} para='+1234567890'/>
         <SmallPara img={mail_2} para='MurPg@gmail.com'/>
        </div>
        

      </header>
    </>

    
  )
}

export default Header
