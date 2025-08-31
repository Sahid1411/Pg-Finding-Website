import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function OwnerSeePg() {
    const [pg, setPg] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/pgs");
                console.log("API Response:", response.data); // Debugging
                setPg(response.data.pgData || []); // Extract pgData
            } catch (error) {
                console.log("Error while fetching data", error);
            }
        };
        fetchData();
    }, []);
    

    const deletePg = async (pgId) => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/delete/pg/${pgId}`);
            setPg((prevPg) => prevPg.filter((pg) => pg._id !== pgId));
            toast.success(response.data.message, { position: "top-right" });
        } catch (error) {
            console.log("Error deleting PG:", error);
        }
    };

    const ownerId = localStorage.getItem("ownerId")?.replace(/"/g, "");

    return (
        <>
            <div id="hideHeaderNavbar">
                <Header />
                <Navbar />
            </div>

            <div className="container product-container">
                <div className="row  my-5">
                    <div className="col-12">
                        <div className="product-card">
                            <Link className="btn btn-secondary back-button" to={`/owner-panel/${ownerId}`}>
                                <i style={{ marginRight: "4px" }} className="fa-solid fa-backward"></i> Back
                            </Link>
                            <h3 className="text-center">Added PGs</h3>
                            {pg.length === 0 ? (
                                <div className="noData">
                                    <h3>No Data to display</h3>
                                    <p>Please add a new PG</p>
                                </div>
                            ) : (
                                <table className="table table-bordered product-table">
                                    <thead>
                                        <tr>
                                            <th>S.No.</th>
                                            <th>PG Name</th>
                                            <th>Ratings</th>
                                            <th>Address</th>
                                            <th>Phone</th>
                                            <th>Actions</th>
                                        </tr>    
                                    </thead>
                                    <tbody>
                                        {pg.map((pgItem, index) => (
                                            <tr key={pgItem._id}>
                                                <td>{index + 1}</td>  
                                                <td>{pgItem.pg_name}</td>
                                                <td>{pgItem.ratings || "N/A"}</td>
                                                <td>{pgItem.pg_address}</td>
                                                <td>{pgItem.pg_owner_number}</td>
                                                <td>
                                                    <Link
                                                        to={`/update-pg/${pgItem._id}`}  
                                                        className="btn btn-info me-2 action-button"
                                                    >
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </Link>
                                                    <button
                                                        onClick={() => deletePg(pgItem._id)}
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
}

export default OwnerSeePg;
