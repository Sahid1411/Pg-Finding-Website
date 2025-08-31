import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import "./PgDetails.css";
import PgCard from './PgCard';

function PgDetailBox(props) { 
  return (
    <div className="col-12">
      <div style={{ position: 'relative', height: '400px' }} className="m-0">
        <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
          Ratings 4.0 ⭐⭐⭐⭐
        </div>
        <img className='pgDetails-pg-height'   src={props.image} alt="pg" />
        <div className='d-flex justify-content-between' style={{ padding: '10px', marginLeft: '10px' }}>
          <div>
            <span className='fw-bold'>{props.name}</span><br /> 
            {props.address} <br /> 
            {props.price}
          </div>  
          <div id="hide-pg-roomtype" style={{ marginTop: '10px', marginRight: '20px', fontSize: '20px' }}>
            <pre>Single  |  Double</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

function PgBox(props) {
  return (  
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      <div className="pg-box-height pg-box-width my-2" style={{ position: 'relative' }}>
        <div className="pg-rating" style={{ borderRadius: "5px" }}>
          Ratings {props.ratings}.0 ⭐⭐⭐⭐ 
        </div> 
        <Link to={`/pgdetails/${props.pg_id}`} style={{ textDecoration: "none" }} className="text-light">
          <img
            className="pg-image border"
            src={`http://localhost:4000/${props.imgURL.replace(/\\/g, "/")}`} 
            alt="PG"
          />
        </Link>
        <div className='d-flex justify-content-between' style={{ padding: '10px' }}>
          <div>
            <p className="pg-font">
              <span className='fw-bold'>{props.name}</span><br />
              {props.address}<br />
              {props.price}
            </p>
          </div> 
          <div className="hide-pg-roomtype" style={{ padding: '10px' }}>
            <pre className="pg-font">Single|Double</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

const PgDetails = () => {
  const [pgs, setPgs] = useState([]);
  const [pg, setPg] = useState({});
  const { pgId } = useParams();
  // console.log(pgId);


  useEffect(() => {
    const fetchpg = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/pgs/${pgId}`);
        // setPg(response.data);
        setPg(response.data.pgExist);
        // console.log("PG Details:", response.data.pgExist.pg_name);


      } catch (error) {
        console.error("Error fetching pg details:", error);
      }
    };
    fetchpg();
  }, [pgId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/pgs");
        setPgs(response.data.pgData); 
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData(); 
  }, []);  



  return ( 
    <>
      <Header />
      <Navbar />  

      <div className="row"> 
        <div className="col-lg-5 col-md-5 col-sm-12 py-2 px-1">
          {/* some pg are not exist in google map so i have added this map for all pg's */}
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14162.535380776555!2d94.88755654454155!3d27.44951973697676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDibrugarh%20University%20nearby%20all%20pg&#39;s!5e0!3m2!1sen!2sin!4v1741972572527!5m2!1sen!2sin"
          style={{ height: '100%', width: '100%', border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>  

        <div className="col-lg-7 col-md-7 col-sm-12 ">
          <div className="row">
            <div style={{ position: 'relative', padding: '0' }} className="col-12 pgDetailBox-height border">
              <PgDetailBox 
                image={`http://localhost:4000/${pg.photo?.replace(/\\/g, "/") || ''}`} 
                name={pg.pg_name || 'Name Not Found'} 
                address={pg.pg_address || 'Address Not Available'} 
                price={pg.pg_price_single && pg.pg_price_double ? `₹${pg.pg_price_single} - ₹${pg.pg_price_double}` : 'Price Not Available'} 
              />
            </div>
          </div>  
        </div>
      </div>


      {/* Appartment details  */}

      {/* <PgCard pg={samplePgData}/> */}
      {pg.pg_name && (
        <PgCard
          pg={{
            name: pg.pg_name,
            address: pg.pg_address,
            ownerNumber: pg.pg_owner_number || "Not Available",
            rating: pg.ratings || 0,
            amenities: pg.amenities || [],
            gender: pg.gender || "Unisex",
            price: {
              single: pg.pg_price_single || "NA", 
              double: pg.pg_price_double || "NA",
              moreThanTwo: pg.pg_price_more || "NA",
            }
          }}
        /> 
      )}

  
      <div className="row ">   
        <h2 style={{ margin: "18px" }}>Similar PGs</h2>
        {pgs.map((pg) => (
          <PgBox 
            key={pg._id}  
            imgURL={pg.photo}
            name={pg.pg_name}
            address={pg.pg_address}
            ratings={pg.ratings} 
            pg_id={pg._id}
            price={`₹${pg.pg_price_single} - ₹${pg.pg_price_double}`}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default PgDetails;
