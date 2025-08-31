import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import UserRoute from "./Routes/userRoute.js" 
import AdminRoute from "./Routes/adminRoute.js"
import OwnerRoute from "./Routes/ownerRoute.js" 
import PgRoute from "./Routes/pgRoute.js" 
  
const app = express();
app.use(bodyParser.json());
app.use(express.json());  // 🚀 This is required to parse JSON data
app.use(cors());
dotenv.config();

// Serve static files from the uploads folder
app.use("/uploads", express.static("uploads"));

 
const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;
  
mongoose 
  .connect(MONGOURL)
  .then(() => {  
    console.log("DB connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));


  app.use("/api", UserRoute);
  app.use("/api",AdminRoute);
  app.use("/api",OwnerRoute);
  app.use("/api",PgRoute);
  
