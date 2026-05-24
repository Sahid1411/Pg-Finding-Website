import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UserUpdateProfile = () => {
  const [user, setUser] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "", 
    address: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();   

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value }); 
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/${id}`);
        setUser(response.data); 
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/update/user/${id}`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );  
      toast.success(response.data.message, { position: "top-right" });
      navigate(`/user-panel/${id}`);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong!", { position: "top-right" });
    }
  };

  return (  
    <section className='bg-primary p-2'>
      <div className="addUser">
        <Link
          style={{ textDecoration: "none" }}
          type="button"
          className="btn btn-secondary"
          to={`/user-panel/${id}`}
        >
          <i style={{ marginRight: "4px" }} className="fa-solid fa-backward"></i>
          Back
        </Link>

        <h3>Update Profile</h3>
        <form className="addUserForm" onSubmit={submitForm}>
          <div className="inputGroup">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={inputHandler}
              placeholder="Enter Your Name"
              required
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="gender">Gender:</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={user.gender}
              onChange={inputHandler}
              placeholder="Enter Gender"
            />
          </div> 

          <div className="inputGroup">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={inputHandler}
              placeholder="Enter Email"
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={inputHandler}
              placeholder="Enter Phone"
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={user.address}
              onChange={inputHandler}
              placeholder="Enter Address"
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
  );
};

export default UserUpdateProfile;
