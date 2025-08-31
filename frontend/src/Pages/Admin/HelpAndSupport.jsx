import React from 'react'
import AdminSidebar from "./AdminSidebar";
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';

function Box(){
    return (
        <div className="col-4 p-3 ">
            <div style={{height:'100%',width:'100%',borderRadius:'5px'}} className='border p-3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eos neque ea illo exercitationem eligendi adipisci tempore voluptas nulla qui. Provident atque veniam maiores dolore itaque. Culpa iste aliquam at.</p>
            </div>
        </div>    
    );
}  

const HelpAndSupport = () => {
  return (
    <>
    
    
    <div className='row'>
        <Header />
        <Navbar />
        <div className="col-lg-3 col-md-3 col-sm-3 bg-primary border col-4 px-1 ">
            <AdminSidebar />    
        </div>

        <div className="col-lg-9 col-md-3 col-sm-3 my-3 col-4 px-1 ">
            <h3 className='text-center'>Help & Support </h3>
            <div className="row  mx-2">
                <Box />
                <Box />
                <Box />
                
            </div>
        </div>
      
    </div>

    </>
  )
}

export default HelpAndSupport
