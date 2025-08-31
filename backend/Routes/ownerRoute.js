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

import fetchOwner from "../Middlewares/fetchAdmin.js";

const route = express.Router();

route.post("/owner", createOwner);
route.get("/owner", getOwners);
route.put("/owner/update/:id", updateOwner);
route.get("/owner/:id", getOwnerById);
route.post("/owner/login", loginOwner);
route.delete("/delete/owner/:id",deleteOwner); 

route.post("/owner/auth/getOwner", fetchOwner, getLoggedInOwnerDetails);

export default route; 
