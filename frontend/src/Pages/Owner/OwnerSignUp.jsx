import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import signup_img from "../../assets/pages image/signup.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const OwnerSignUp = () => {
  const [owner, setOwner] = useState({
    name: "",
    email: "",
    password: "", 
    gender: "",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setOwner({ ...owner, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/owner", owner);
      toast.success(response.data.message, { position: "top-right" });
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Owner already exists!", { position: "top-right" });  
    }
  };

  return (
    <div className="d-flex signup-height p-lg-5 p-2 justify-content-center align-items-center bg-primary">
      <div className="container p-4 bg-white rounded shadow-lg w-70">
        <div className="row">
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center">
            <img src={signup_img} alt="signup-image" className="img-fluid rounded" />
          </div>

          {/* Sign Up Form Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-4 order-md-2 order-1">
            <div className="mb-3">
              <Link className="btn btn-primary" to="/owner-login">
                <i className="fa-solid fa-backward"></i> Back
              </Link>
            </div>

            <h2 className="fw-semibold text-dark">Owner Sign Up</h2>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <form onSubmit={submitForm}>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  value={owner.name}
                  onChange={inputHandler}
                  autoComplete="off"
                  placeholder="Owner Name"
                  required
                />
              </div>

              <div className="mb-3">
                <select
                  className="form-control"
                  name="gender"
                  value={owner.gender}
                  onChange={inputHandler}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-3">
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  value={owner.email}
                  onChange={inputHandler}
                  autoComplete="off"
                  placeholder="Email ID"
                  required
                />
              </div>

              <div className="mb-3 position-relative">
                <input
                  className="form-control"
                  type="password"
                  id="passwordInput"
                  name="password"
                  value={owner.password}
                  onChange={inputHandler}
                  autoComplete="off"
                  placeholder="Enter Your Password"
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

              <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerSignUp;
