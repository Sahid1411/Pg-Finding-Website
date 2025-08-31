import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./AddPg.css"
  
const UpdateAdminProfile = () => {
    const [admin, setAdmin] = useState({
        name: "",
        email: "",
        gender: "", 
      });
      
    
      const navigate = useNavigate();
      const { id } = useParams(); 

      const inputHandler = (e) => {
        const { name, value } = e.target;
        setAdmin({ ...admin, [name]: value });
      };
   
      useEffect(() => {
        const fetchAdmin = async () => {
          try {
            const response = await axios.get(`http://localhost:4000/api/admin/${id}`);
            setAdmin(response.data); 
          } catch (error) {
            console.log("Error fetching user:", error); 
          }
        };
     
        fetchAdmin();
      }, [id]);
    
      const submitForm = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.put(
            `http://localhost:4000/api/admin/update/${id}`, 
            admin,
            {
              headers: {
                "Content-Type": "application/json", 
              },
            }
          );  
          toast.success(response.data.message, { position: "top-right" });
          navigate(`/profile-settings`);
        } catch (error) {
          console.error("Error submitting form:", error);
          toast.error("Something went wrong!", { position: "top-right" });
        }
      };  

  return (
    <>
      <section style={{height:'100vh'}} className='bg-primary p-2'>
      <div className="addUser">
        <Link
          style={{ textDecoration: "none" }}
          type="button"
          className="btn btn-secondary"
          to={`/admin-panel/${id}`}
        ><i style={{marginRight:"4px"}} className="fa-solid fa-backward"></i>
          Back
        </Link>
  
        <h3>Update Profile</h3>
        <form className="addUserForm" onSubmit={submitForm} encType="multipart/form-data">
          
          {/* Input name  */}
          <div className="inputGroup">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={admin.name}
              onChange={inputHandler}
              placeholder="Enter Your Name"
              required
            />
          </div> 
          
  
         
          {/*  Gender  */}
          <div className="inputGroup">
            <label htmlFor="gender">Gender:</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={admin.gender}
              onChange={inputHandler}
              placeholder="Enter Gender"
            />
          </div> 
  
  
          {/* Email */}
          <div className="inputGroup">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={admin.email}
              onChange={inputHandler}
              placeholder="Enter Email"
            />
          </div>
  
  
          <div className="inputGroup">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      

      </section>
      </>
  )
}

export default UpdateAdminProfile
