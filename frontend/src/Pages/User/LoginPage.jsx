import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import login_img from "../../assets/pages image/login-page.jpg";
import { Link, useNavigate } from "react-router-dom";
import "./SignUpPage.css"
import axios from "axios";
import { toast } from "react-hot-toast";
  
const LoginPage = () => { 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const response = await axios.post(
      "http://localhost:4000/api/user/login",  
      {
        email, 
        password,
      }
    );

    if (response.data.success) {
      const { authtoken, userId } = response.data; // ✅ Get token and user details

      // ✅ Store token & user details in localStorage
      localStorage.setItem("token", authtoken);
      localStorage.setItem("userId", JSON.stringify(userId));

      // ✅ Navigate to User Dashboard/Profile Page
      toast.success(response.data.message, { position: "top-right" });
      navigate(`/user-panel/${userId}`);
      // navigate(`/`);
    } else {
      setError(
        response.data.message || "Invalid credentials. Please try again."
      );
    }
  } catch (error) {
    setError("Something went wrong. Please try again later.");
  }
};
 
  
  return (
    <div className="d-flex p-lg-5 p-2 signup-height justify-content-center align-items-center bg-primary">
      <div className="container p-4 bg-white rounded shadow-lg w-70 ">
        <div className="row">
          
          {/* Image Section (Left on larger screens, Top on smaller screens) */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center " >
            <img src={login_img} alt="login-image" className="img-fluid  rounded" />             
          </div>

          {/* Login Form Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-4  order-md-2 order-1">
            <div className="mb-3">
              <Link className="btn btn-primary" to="/">
                <i className="fa-solid fa-backward"></i> Back
              </Link>
            </div>

            <h2 className="fw-semibold text-dark">Sign in</h2>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <form onSubmit={handleSubmit}>
            {/* Email  Field*/}
            <div className="mb-3">
              <input 
                className="form-control" 
                type="email" 
                placeholder="Email ID" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-3 position-relative">
              <input 
                className="form-control" 
                type="password" 
                id="passwordInput" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              /> 
              
              <span 
                className="position-absolute end-0 top-50 translate-middle-y pe-3 text-muted"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  const passwordField = document.getElementById("passwordInput");
                  passwordField.type = passwordField.type === "password" ? "text" : "password";
                }}
              >
                SHOW
              </span>
            </div>

            <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
              <div>
                <input type="checkbox" className="form-check-input me-2" /> Remember me
              </div>
              <a href="#" className="text-primary text-decoration-none">Forgot Password?</a>
            </div>

            {error && <p className="text-danger text-center">{error}</p>}

            <button type="submit" className="btn btn-primary w-100">Sign in</button>
            </form>


            <p className="text-center mt-3 text-muted">
              Don't have an account? <Link to='/user-signup'>Sign Up</Link>  
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
