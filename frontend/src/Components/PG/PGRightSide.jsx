import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pg.css";
import { Link } from "react-router-dom";
import.meta.env.VITE_API_URL;

function PgBox(props) {
  return (  
    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
      <div style={{ position: 'relative' }} className="pg-box-height my-2">
        {/* Top overlay text */}
        <div className="pg-rating" style={{ borderRadius: "5px" }}>
          Ratings {props.ratings}.0 ⭐⭐⭐⭐
        </div>    

        <Link style={{ textDecoration: "none" }} className="text-light" to={`/pgdetails/${props.pg_id}`}>
        <img
          className="pg-image border"  
          src={`${import.meta.env.VITE_API_URL}/${props.imgURL.replace(/\\/g, "/")}`}  
          alt="image"  
        />
        </Link>  

        <div className='d-flex justify-content-between' style={{ padding: '10px' }}>
          <div> 
            <p className="pg-font">
              <span className='fw-bold'>{props.name}</span> <br />
              {props.address} <br />
              {props.price}
            </p>
          </div>
  
          <div id="hide-pg-roomtype" style={{ padding: '10px'  }}>
            <pre className="pg-font">Single|Double</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

const PGRightSide = ({ pgs, setPgs }) => {
  // const [pgs, setPgs] = useState([]);
  
  

  return (
    <div>
      <div className="row">
      {pgs.map((pg) => (
        <PgBox
          key={pg._id}
          imgURL={pg.photo} // Match backend model 
          name={pg.pg_name}
          address={pg.pg_address}
          ratings={pg.ratings} 
          pg_id={pg._id} // Pass the PG ID to the PgBox component
          price={`₹${pg.pg_price_single} - ₹${pg.pg_price_double}`}
        />
      ))}

      </div>

      {/* Optional Load More Button */}
      {/* <div className='d-flex justify-content-center'>
        <button className="my-4 btn btn-primary">
          more... <i className="fa-solid fa-right-long"></i>
        </button>
      </div> */}
    </div>
  );
};

export default PGRightSide;
