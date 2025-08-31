import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";

const SeeOwners = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/owner");
        setOwners(response.data);
      } catch (error) {
        console.log("Error while fetching data", error); 
      }
    };
    fetchData();
  }, []);

  const deleteOwner = async (ownerId) => {
    await axios
      .delete(`http://localhost:4000/api/delete/owner/${ownerId}`)
      .then((response) => {
        setOwners((prevOwners) =>
          prevOwners.filter((owner) => owner._id !== ownerId)
        );
        toast.success(response.data.message, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const adminId = localStorage.getItem("adminId")?.replace(/"/g, "");

  return (
    <>
      <div id="hideHeaderNavbar">
        <Header />
        <Navbar />
      </div>

      <div className="container supplier-container">
        <div className="row">
          <div className="col-12">
            <div className="supplier-card">
              <Link
                style={{ marginTop: "20px" }}
                className="btn btn-secondary back-button"
                to={`/admin-panel/${adminId}`}
              >
                <i
                  style={{ marginRight: "4px" }}
                  className="fa-solid fa-backward"
                ></i>
                Back
              </Link>
              <h3 className="text-center">Registered Owners</h3>
              {owners.length === 0 ? (
                <div className="noData">
                  <h3>No Data to display</h3>
                  <p>Please add new Owners</p>
                </div>
              ) : (
                <table className="table table-bordered supplier-table">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {owners.map((owner, index) => (
                      <tr key={owner._id}>
                        <td>{index + 1}</td>
                        <td>{owner.name}</td>
                        <td>{owner.email}</td>
                        <td>{owner.gender}</td>
                        <td>{owner.phone}</td>
                        <td>{owner.address}</td>
                        <td>
                          <button
                            onClick={() => deleteOwner(owner._id)}
                            className="btn btn-danger action-button"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table> 
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeeOwners;
