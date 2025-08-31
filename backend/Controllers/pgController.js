import Pg from "../Models/pgModel.js";
import mongoose from "mongoose";



export const getAllPg = async (req, res) => {
  try {
    const {
      priceMin,
      priceMax,
      gender,
      sharing,
      amenities,
    } = req.query;

    const query = {};

    // Price Range
    if (priceMin && priceMax) {
      query.$or = [
        { pg_price_single: { $gte: Number(priceMin), $lte: Number(priceMax) } },
        { pg_price_double: { $gte: Number(priceMin), $lte: Number(priceMax) } }
      ];
    }

    // Gender - only add to query if gender is specified
    if (gender && gender !== '') {
      query.gender = gender;
    }

    // Sharing - only if sharing options are selected
    if (sharing) {
      const sharingArray = JSON.parse(sharing);
      if (sharingArray.length > 0) {
        query.room_sharing = { $in: sharingArray };
      }
    }

    // Amenities - only if amenities are selected
    if (amenities) {
      const amenitiesArray = JSON.parse(amenities); 
      if (amenitiesArray.length > 0) {
        query.pg_amenities = { $all: amenitiesArray };
      }
    }

    const pgData = await Pg.find(query);
    res.status(200).json({ pgData });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

   
export const SearchPgByName = async (req, res) => {  
  try {
    const { pg_name } = req.body;

    if (!pg_name) {
      return res.status(400).json({ message: "Pg name is required." });
    }

    // Case-insensitive regex search
    const pgExist = await Pg.findOne({ 
      pg_name: { $regex: new RegExp(pg_name, 'i') } 
    });

    if (!pgExist) { 
      return res.status(404).json({ message: "Pg not available." });
    }

    res.status(200).json({ id: pgExist._id });  
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });  
  }
};
   
   
export const getPgById = async (req, res) => {
    try {
        const id = req.params.id;
        const pgExist = await Pg.findById(id);
        if (!pgExist) {
            return res.status(404).json({ message: 'PG not found.' });
        }
        res.status(200).json({ pgExist });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

export const updatePg = async (req, res) => {
    try {
      const { id } = req.params;
  
      const {
        pg_name,
        pg_address,
        pg_owner_number,
        pg_price_single,
        pg_price_double,
        pg_price_more_than_2,
        gender,
        ratings,
        amenities,
        room_sharing
      } = req.body;
  
      const parsedAmenities = JSON.parse(amenities || "[]");
      const parsedRoomSharing = JSON.parse(room_sharing || "[]");
  
      const updatedData = {
        pg_name,
        pg_address,
        pg_owner_number,
        pg_price_single,
        pg_price_double,
        pg_price_more_than_2,
        gender,
        ratings,
        pg_amenities: parsedAmenities,
        room_sharing: parsedRoomSharing,
      };
  
      if (req.file) {
        updatedData.photo = req.file.path;
      }
  
      const updatedPg = await Pg.findByIdAndUpdate(id, updatedData, { new: true });
  
      if (!updatedPg) {
        return res.status(404).json({ message: "PG not found." });
      }
  
      res.status(200).json({ message: "PG updated successfully", updatedPg });
    } catch (error) {
      console.error("Update Error:", error);
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  };
  
  
  
 
export const deletePg = async (req, res) => {
    try {
        const id = req.params.id;
        const pgExist = await Pg.findById(id);
        if (!pgExist) {
            return res.status(404).json({ message: "PG not found." });
        }
        await Pg.findByIdAndDelete(id);
        res.status(200).json({ message: "PG deleted successfully." });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};
