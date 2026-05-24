// Routes/ownerRoute.js
import express from "express";

import {
  createOwner,
  getOwnerById,
  updateOwner,  
  loginOwner,
  getOwners,
  getLoggedInOwnerDetails,
  deleteOwner,
} from "../Controllers/ownerController.js";

// Fixed import path here:
import fetchOwner from "../Middlewares/fetchOwner.js"; 

const route = express.Router();

route.post("/owner", createOwner);
route.get("/owner", getOwners);
route.put("/owner/update/:id", updateOwner);
route.get("/owner/:id", getOwnerById);
route.post("/owner/login", loginOwner);
route.delete("/delete/owner/:id",deleteOwner); 

route.post("/owner/auth/getOwner", fetchOwner, getLoggedInOwnerDetails);

export default route;