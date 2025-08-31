import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import './AddPg.css';

const OwnerUpdatePg = () => {
  const { id } = useParams();
  // console.log('ID:', id); // Debugging

  const [pg, setPg] = useState({
    pg_name: '',
    pg_address: '',
    pg_owner_number: '',
    pg_price_single: '',
    pg_price_double: '',
    pg_price_more_than_2: '',
    gender: '',
    ratings: '',
    amenities: [],
    room_sharing: [],  
    photo: null,
  });  
 

  // Fetch initial data
  useEffect(() => {
    const fetchPg = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/pgs/${id}`);
        // console.log('Response:', res.data); // Should show { pgExist: {...} }
  
        const data = res.data.pgExist; // ✅ Extract actual PG data
  
        setPg({
          pg_name: data.pg_name || '',
          pg_address: data.pg_address || '',
          pg_owner_number: data.pg_owner_number || '',
          pg_price_single: data.pg_price_single || '',
          pg_price_double: data.pg_price_double || '',
          pg_price_more_than_2: data.pg_price_more_than_2 || '',
          gender: data.gender || '',
          ratings: data.ratings || '',
          amenities: data.amenities || [],
          room_sharing: data.room_sharing || [],
          photo: null,
        });
      } catch (err) {
        console.error('Failed to fetch PG:', err);
      }
    };
  
    fetchPg();
  }, [id]);
  

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setPg({ ...pg, [name]: value });
  };

  const fileHandler = (e) => {
    setPg({ ...pg, photo: e.target.files[0] });
  };

  const checkboxHandler = (e, type) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setPg((prev) => {
      const updated = isChecked
        ? [...prev[type], value]
        : prev[type].filter((item) => item !== value);
      return { ...prev, [type]: updated };
    });
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
    formData.append('pg_amenities', JSON.stringify(pg.amenities));
    formData.append('rooms_sharing', JSON.stringify(pg.room_sharing));
    

    if (pg.photo) {
      formData.append('photos', pg.photo);
    }
    

    try { 
        const response = await axios.put(`http://localhost:4000/api/pg/update/${id}`, 

        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      toast.success(response.data.message, { position: 'top-right' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong!', { position: 'top-right' });
    }
  };

  const ownerId = localStorage.getItem("ownerId")?.replace(/"/g, "");


  return (
    <>
      <section className="bg-primary p-2">
        <div className="addUser">
          <Link
            style={{ textDecoration: 'none' }}
            type="button"
            className="btn btn-secondary"
            to={`/owner-panel/${ownerId}`}
          >
            <i style={{ marginRight: '4px' }} className="fa-solid fa-backward"></i>
            Back
          </Link>

          <h3>Update PG</h3>
          <form className="addUserForm" onSubmit={submitForm} encType="multipart/form-data">
            {/* PG name */}
            <div className="inputGroup">
              <label htmlFor="pg_name">PG Name:</label>
              <input
                type="text"
                id="pg_name"
                name="pg_name"
                value={pg.pg_name}
                onChange={inputHandler}
                autoComplete="off"
              />
            </div>

            {/* PG Address */}
            <div className="inputGroup">
              <label htmlFor="pg_address">PG Address:</label>
              <input
                type="text"
                id="pg_address"
                name="pg_address"
                value={pg.pg_address}
                onChange={inputHandler}
                autoComplete="off"
              />
            </div>

            {/* Owner Number */}
            <div className="inputGroup">
              <label htmlFor="pg_owner_number">Owner Number:</label>
              <input
                type="text"
                id="pg_owner_number"
                name="pg_owner_number"
                pattern="[0-9]{10}"
                value={pg.pg_owner_number || ''}
                onChange={inputHandler}
                autoComplete="off"
              />
            </div>

            {/* Prices */}
            <div className="inputGroup">
              <label htmlFor="pg_price_single">Single Room Price:</label>
              <input
                type="text"
                id="pg_price_single"
                name="pg_price_single"
                value={pg.pg_price_single}
                onChange={inputHandler}
              />
            </div>

            <div className="inputGroup">
              <label htmlFor="pg_price_double">Double Room Price:</label>
              <input
                type="text"
                id="pg_price_double"
                name="pg_price_double"
                value={pg.pg_price_double}
                onChange={inputHandler}
              />
            </div>

            <div className="inputGroup">
              <label htmlFor="pg_price_more_than_2">More Than 2 Sharing Price:</label>
              <input
                type="text"
                id="pg_price_more_than_2"
                name="pg_price_more_than_2"
                value={pg.pg_price_more_than_2}
                onChange={inputHandler}
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
              />
            </div>

            {/* Ratings */}
            <div className="inputGroup">
              <label htmlFor="ratings">Ratings:</label>
              <input
                type="number"
                id="ratings"
                name="ratings"
                min="1"
                max="5"
                value={pg.ratings}
                onChange={inputHandler}
              />
            </div>

            {/* Amenities */}
            <div className="inputGroup">
              <label>Amenities:</label>
              <div>
                {['WiFi', 'Laundry', 'Parking', 'CCTV', 'Visitor Allowed Policy', 'RO Drinking Water', '24/7 Water Supply', 'Mess/Food Service', 'Inverter', 'Wardrobe', 'Bed', 'Study Table', 'Fan', 'AC', 'Quiet Study Area'].map((item) => (
                  <label key={item}>
                    <input
                      type="checkbox"
                      value={item}
                      checked={pg.amenities.includes(item)}
                      onChange={(e) => checkboxHandler(e, 'amenities')}
                    />{' '}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Room Sharing */}
            <div className="inputGroup">
              <label>Room Sharing:</label>
              <div>
                {['Single', 'Double', 'Triple', 'More than 3'].map((item) => (
                  <label key={item}>
                    <input
                      type="checkbox"
                      value={item}
                      checked={pg.room_sharing.includes(item)}
                      onChange={(e) => checkboxHandler(e, 'room_sharing')}
                    />{' '}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Image Upload */}
            <div className="inputGroup">
              <label htmlFor="photo">Upload Image:</label>
              <input type="file" id="photo" name="photo" onChange={fileHandler} />
            </div>

            {/* Submit */}
            <div className="inputGroup">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default OwnerUpdatePg;
