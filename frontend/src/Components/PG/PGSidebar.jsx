import React from "react";
import { Box, Typography,Slider , MenuItem, Select, Switch } from "@mui/material";
import axios from "axios";

const PGSidebar = ({ setPgs }) => {
  const [price, setPrice] = React.useState([3000, 64000]);
  const [selectedSharing, setSelectedSharing] = React.useState([]);
  const [gender, setGender] = React.useState('');
  const [selectedAmenities, setSelectedAmenities] = React.useState([]);

  const sharingOptions = ['Private', '2 Sharing', '3 Sharing', 'More than 3 Sharing'];
  const genderOptions = ['Men', 'Women', 'Unisex'];
  const amenitiesOptions = [
    'AC', 'Fan', 'Study Table', 'Bed', 'Wifi', 'Bicycle/Motorbike Parking',
    'Inverter', 'Mess/Food Service', '24/7 Water Supply', 'RO Drinking Water',
    'CCTV Security', 'Visitor Allowed Policy', 'Quiet Study Area', 'Wardrobe'
  ];

  const handleCheckboxChange = (value, setter, currentValues) => {
    if (currentValues.includes(value)) {
      setter(currentValues.filter(item => item !== value));
    } else { 
      setter([...currentValues, value]);
    }
  };

  const handleGenderChange = (value) => {
    setGender(value);
  };

  const handleClearFilters = async () => {
    setPrice([3000, 64000]);
    setSelectedSharing([]);
    setGender('');
    setSelectedAmenities([]);
    
    try {
      const response = await axios.get("http://localhost:4000/api/pgs");
      setPgs(response.data.pgData);
    } catch (error) {
      console.log("Error clearing filters", error);
    }
  };

  const handleChange = (event, index) => {
    const newValue = Number(event.target.value);
    const updatedPrice = [...price];
    updatedPrice[index] = newValue;
    setPrice(updatedPrice);
  };  

  const handleSearch = async () => {
    try {
      const params = {};
      
      // Add price filter if set
      if (price[0] !== 3000 || price[1] !== 64000) {
        params.priceMin = price[0];
        params.priceMax = price[1];
      }
      
      // Add gender filter if selected
      if (gender) {
        params.gender = gender;
      }
      
      // Add sharing filter if any options are selected
      if (selectedSharing.length > 0) {
        params.sharing = JSON.stringify(selectedSharing);
      }
      
      // Add amenities filter if any options are selected
      if (selectedAmenities.length > 0) {
        params.amenities = JSON.stringify(selectedAmenities);
      }
  
      const response = await axios.get("http://localhost:4000/api/pgs", {
        params
      });
  
      setPgs(response.data.pgData);
    } catch (error) {
      console.log("Error fetching filtered PGs", error);
    }
  };
  

  return (
    <div className="px-5 py-1">
      <div className="d-flex justify-content-between my-2">
        <h5>Filters</h5>
        <button onClick={handleSearch} className="btn btn-primary" style={btnStyle}>Search</button>
        <button onClick={handleClearFilters} className="btn btn-primary" style={btnStyle}>Clear</button>
      </div>

      {/* Sharing Type */}
      <div className="my-4">
        <h6>Sharing Type</h6>
        {sharingOptions.map(option => (
          <div key={option}>
            <input
              type="checkbox"
              id={`sharing-${option}`}
              checked={selectedSharing.includes(option)}
              onChange={() => handleCheckboxChange(option, setSelectedSharing, selectedSharing)}
            />
            <label htmlFor={`sharing-${option}`} style={labelStyle}>{option}</label>
          </div>
        ))}
      </div>
      <hr />

      {/* Gender */}
      <div className="my-4">
        <h6>Gender</h6>
        {genderOptions.map(option => (
          <div key={option}>
            <input
              type="radio"
              name="gender"
              id={`gender-${option}`}
              checked={gender === option}
              onChange={() => handleGenderChange(option)}
            />
            <label htmlFor={`gender-${option}`} style={labelStyle}>{option}</label>
          </div>
        ))}
      </div>
      <hr />

      {/* Price Range */}
      <div className="my-4">
        <h6>Price Range</h6>
        <Box sx={{ width: 300, p: 2 }}>
          <Slider
            style={{ width: '160px' }}
            value={price}
            onChange={(_, newValue) => setPrice(newValue)}
            valueLabelDisplay="auto"
            min={100}
            max={100000}
            step={100}
          />
          <Box display="flex" alignItems="center" mt={2}>
            <Select value={price[0]} onChange={(e) => handleChange(e, 0)} sx={selectStyle}>
              {Array.from({ length: 1001 }, (_, i) => i * 100).map(value => (
                <MenuItem key={value} value={value}>
                  <Typography fontSize="10px">Rs. {value}</Typography>
                </MenuItem>
              ))}
            </Select>
            <Typography sx={{ px: 1 }}>-</Typography>
            <Select value={price[1]} onChange={(e) => handleChange(e, 1)} sx={selectStyle}>
              {Array.from({ length: 1001 }, (_, i) => i * 100).map(value => (
                <MenuItem key={value} value={value}>
                  <Typography fontSize="10px">Rs. {value}</Typography>
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
      </div>
      <hr />

     

      {/* Amenities */}
      <div className="my-4">
        <h6>Amenities</h6>
        {amenitiesOptions.map(amenity => (
          <div key={amenity}>
            <input
              type="checkbox"
              id={`amenity-${amenity}`}
              checked={selectedAmenities.includes(amenity)}
              onChange={() => handleCheckboxChange(amenity, setSelectedAmenities, selectedAmenities)}
            />
            <label htmlFor={`amenity-${amenity}`} style={labelStyle}>{amenity}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

const btnStyle = {
  borderRadius: "8px",
  padding: "2px",
  fontSize: "12px",
  width: "66px",
  height: "38px"
};

const labelStyle = {
  marginLeft: "10px",
  fontSize: "13px"
};

const selectStyle = {
  width: "85px",
  height: "32px",
  paddingTop: "8px"
};

export default PGSidebar;