import express from "express";
import { createAdmin, getAdmin, getAdminById, GetLoggedInAdminDetails, LoginAdmin, updateAdmin } from "../Controllers/adminController.js";
import fetchAdmin from "../Middlewares/fetchAdmin.js";

const route = express.Router(); 

route.post("/admin",createAdmin);
route.get("/admin",getAdmin);
route.put("/admin/update/:id",updateAdmin);
route.get("/admin/:id",getAdminById);  
route.post("/admin/login",LoginAdmin);

route.post("/admin/auth/getAdmin",fetchAdmin,GetLoggedInAdminDetails);

export default route;