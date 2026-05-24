import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import './AddPg.css';

const AddPg = () => {
  const adminId = localStorage.getItem("adminId")?.replace(/"/g, "");
  const navigate = useNavigate();

  const [pg, setPg] = useState({
    pg_name: '',
    pg_address: '',
    pg_owner_number: '',  
    pg_price_single: '',  
    pg_price_double: '',
    pg_price_more_than_2: '',
    gender: '',
    ratings: '',
    photo: null,
    amenities: [],
    room_sharing: [],  
  }); 

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setPg({ ...pg, [name]: value });
  };

  const fileHandler = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setPg({ ...pg, photo: file });
    } else {
      toast.error('Please upload a valid image.');
    }
  };

  const checkboxHandler = (e, field) => {
    const { value, checked } = e.target;
    if (checked) {
      setPg({ ...pg, [field]: [...pg[field], value] });
    } else {
      setPg({ ...pg, [field]: pg[field].filter((item) => item !== value) });
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('pg_name', pg.pg_name);
    formData.append('pg_address', pg.pg_address);
    formData.append('pg_owner_number', pg.pg_owner_number);
    formData.append('pg_price_single', pg.pg_price_single);
    formData.append('pg_price_double', pg.pg_price_double);
    formData.append('pg_price_more_than_2', pg.pg_price_more_than_2);
    formData.append('gender', pg.gender);
    formData.append('ratings', pg.ratings);
    formData.append('photo', pg.photo);
    formData.append('amenities', JSON.stringify(pg.amenities));
    formData.append('room_sharing', JSON.stringify(pg.room_sharing));

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/create/pg`, 
        // 'http://10.100.84.103:4000/api/create/pg',

        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', 
          },
        }
      ); 
      toast.success(response.data.message, { position: 'top-right' });
      navigate(`/admin-panel/${adminId}`) 
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong!', { position: 'top-right' });
    }    
  };


  return (
    <section className="bg-primary p-2">
      <div className="addUser">
        <Link
          style={{ textDecoration: 'none' }}
          type="button"
          className="btn btn-secondary"
          to={`/admin-panel/${adminId}`} 
        >
          <i style={{ marginRight: '4px' }} className="fa-solid fa-backward"></i>
          Back
        </Link>
   
        <h3>Add Pg</h3>
        <form className="addUserForm" onSubmit={submitForm} encType="multipart/form-data">
          {/* PG name */}
          <div className="inputGroup">
            <label htmlFor="pg_name">Pg Name:</label>
            <input
              type="text"
              id="pg_name"  
              name="pg_name"
              value={pg.pg_name}
              onChange={inputHandler}
              autoComplete="off"
              placeholder="Enter PG Name"
              // required
            />
          </div>

          {/* PG Address */}
          <div className="inputGroup">
            <label htmlFor="pg_address">Pg Address:</label>
            <input
              type="text"
              id="pg_address"
              name="pg_address"
              value={pg.pg_address}
              onChange={inputHandler}
              autoComplete="off"
              placeholder="Enter PG Address"
              // required
            />
          </div>

          {/* PG Owner Number */}
          <div className="inputGroup">
            <label htmlFor="pg_owner_number">Pg Owner Number:</label>
            <input
              type="text"
              id="pg_owner_number"
              name="pg_owner_number"
              pattern="[0-9]{10}"
              value={pg.pg_owner_number}
              onChange={inputHandler}
              autoComplete="off"
              placeholder="Enter PG Owner Number"
              // required
            />
          </div>

          {/* PG Single Price */}
          <div className="inputGroup">
            <label htmlFor="pg_price_single">Single Room Price:</label>
            <input
              type="text"
              id="pg_price_single"
              name="pg_price_single"
              value={pg.pg_price_single}
              onChange={inputHandler}
              autoComplete="off"
              placeholder="Enter Single Sharing Room Price"
              // required
            />
          </div>

          {/* PG Double Price */}
          <div className="inputGroup">
            <label htmlFor="pg_price_double">Double Room Price:</label>
            <input
              type="text"
              id="pg_price_double"
              name="pg_price_double"
              value={pg.pg_price_double}
              onChange={inputHandler}
              autoComplete="off"
              placeholder="Enter Double Sharing Room Price"
              // required
            />
          </div>

          {/* PG More Than 2 Sharing Price */}
          <div className="inputGroup">
            <label htmlFor="pg_price_more_than_2">More Than 2 Sharing Price:</label>
            <input
              type="text"
              id="pg_price_more_than_2"
              name="pg_price_more_than_2"
              value={pg.pg_price_more_than_2}
              onChange={inputHandler}
              autoComplete="off"
              placeholder="Enter Price for More Than 2 Sharing"
              // required
            />
          </div>

          {/* Gender */}
          <div className="inputGroup">
            <label htmlFor="gender">Gender:</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={pg.gender}
              onChange={inputHandler}
              autoComplete="off"
              placeholder="Enter Gender"
              // required
            />
          </div>

          {/* Ratings */}
          <div className="inputGroup">
            <label htmlFor="ratings">Ratings:</label>
            <input
              type="number"
              id="ratings"
              name="ratings"
              min="1" max="5"
              value={pg.ratings}
              onChange={inputHandler}
              autoComplete="off"
              placeholder="Enter PG Ratings"
            />
          </div>

          {/* Amenities Checkboxes */}
          <div className="inputGroup">
            <label>Amenities:</label>
            <div>
              <label><input type="checkbox" value="WiFi" onChange={(e) => checkboxHandler(e, 'amenities')} /> WiFi</label>
              <label><input type="checkbox" value="Laundry" onChange={(e) => checkboxHandler(e, 'amenities')} /> Laundry</label>
              <label><input type="checkbox" value="Parking" onChange={(e) => checkboxHandler(e, 'amenities')} /> Parking</label>
              <label><input type="checkbox" value="CCTV" onChange={(e) => checkboxHandler(e, 'amenities')} /> CCTV</label>
              <label><input type="checkbox" value="Visitor Allowed Policy" onChange={(e) => checkboxHandler(e, 'amenities')} /> Visitor Allowed Policy</label>
              <label><input type="checkbox" value="RO Drinking Water" onChange={(e) => checkboxHandler(e, 'amenities')} /> RO Drinking Water</label>
              <label><input type="checkbox" value="24/7 Water Supply" onChange={(e) => checkboxHandler(e, 'amenities')} /> 24/7 Water Supply</label>
              <label><input type="checkbox" value="Mess/Food Service" onChange={(e) => checkboxHandler(e, 'amenities')} /> Mess/Food Service</label>
              <label><input type="checkbox" value="Inverter" onChange={(e) => checkboxHandler(e, 'amenities')} /> Inverter</label>
              <label><input type="checkbox" value="Wardrobe" onChange={(e) => checkboxHandler(e, 'amenities')} /> Wardrobe</label>
              <label><input type="checkbox" value="Bed" onChange={(e) => checkboxHandler(e, 'amenities')} /> Bed</label>
              <label><input type="checkbox" value="Study Table" onChange={(e) => checkboxHandler(e, 'amenities')} /> Study Table</label>
              <label><input type="checkbox" value="Fan" onChange={(e) => checkboxHandler(e, 'amenities')} /> Fan</label>
              <label><input type="checkbox" value="AC" onChange={(e) => checkboxHandler(e, 'amenities')} /> AC</label>
              <label><input type="checkbox" value="Quiet Study Area" onChange={(e) => checkboxHandler(e, 'amenities')} /> Quiet Study Area</label>
            </div>
          </div>


          {/* Room Sharing Checkboxes */}
          <div className="inputGroup">
            <label>Room Sharing:</label>
            <div>
              <label><input type="checkbox" value="Single" onChange={(e) => checkboxHandler(e, 'room_sharing')} /> Single</label>
              <label><input type="checkbox" value="Double" onChange={(e) => checkboxHandler(e, 'room_sharing')} /> Double</label>
              <label><input type="checkbox" value="Triple" onChange={(e) => checkboxHandler(e, 'room_sharing')} /> Triple</label>
              <label><input type="checkbox" value="More than 3" onChange={(e) => checkboxHandler(e, 'room_sharing')} /> More than 3</label>
            </div>
          </div>

          {/* Upload Image */}
          <div className="inputGroup">
            <label htmlFor="photo">Upload Image:</label>
            <input type="file" id="photo" name="photo" onChange={fileHandler}  />
          </div>

          {/* Submit Button */}
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

export default AddPg;
