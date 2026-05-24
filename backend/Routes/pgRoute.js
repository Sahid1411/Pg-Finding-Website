import express from "express";
import { deletePg, getAllPg, getPgById, SearchPgByName, updatePg } from "../Controllers/pgController.js";
import multer from "multer";
import path from "path";
import Pg from "../Models/pgModel.js";

const route = express.Router();

// Multer config for single image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
 
const upload = multer({ storage });

route.post("/create/pg", upload.single("photo"), async (req, res) => {
    try {
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

        // Parse JSON strings to arrays
        const parsedAmenities = JSON.parse(amenities || "[]");
        const parsedRoomSharing = JSON.parse(room_sharing || "[]");

        const photo = req.file ? req.file.path : "";

        const pgExist = await Pg.findOne({ pg_name });
        if (pgExist) {
            return res.status(400).json({ message: "PG already exists with this name." });
        }

        const newPg = new Pg({
            pg_name,
            pg_address,
            pg_owner_number,
            pg_price_single,
            pg_price_double,
            pg_price_more_than_2,
            gender,
            ratings,
            amenities: parsedAmenities,
            room_sharing: parsedRoomSharing,
            photo,
        });

        await newPg.save();
        res.status(201).json({ message: "PG created successfully", newPg });

    } catch (error) {
        console.error("Error creating PG:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


route.get("/pgs", getAllPg);  
route.get("/pgs/:id", getPgById);
route.put("/pg/update/:id", upload.single("photo"), updatePg);
route.delete("/delete/pg/:id", deletePg);

route.post("/search",SearchPgByName);

export default route; 
