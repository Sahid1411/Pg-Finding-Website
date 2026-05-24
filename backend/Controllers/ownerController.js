import Owner from "../Models/ownerModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET ;  

// Route 1: create owner, no Login Required
export const createOwner = async (req, res) => {
  try {
    const { name, email, gender, password } = req.body;
    // console.log(req.body);

    // Check in the User collection
    const ownerExist = await Owner.findOne({ email }); 

    if (ownerExist) {
      return res.status(400).json({ message: "Owner already exists." });
    }

    // Hash the password before storing it
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // console.log(hashedPassword);

    const newOwner = new Owner({
      name,
      email,
      gender,
      password: hashedPassword,
    });

    // Sending token with user id
    const data = {
      owner: { 
        id: newOwner.id,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET);
    console.log(authtoken);

    await newOwner.save();
    res.status(200).json({ authtoken, newOwner, message: "Owner created successfully." });

  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};


// For future prospect if more than one owner exist, then getting all owners
export const getOwners = async (req, res) => {
  try {
    const ownerData = await Owner.find();
    if (!ownerData || ownerData.length === 0) {
      return res.status(404).json({ message: "Owner data not found." });
    }
    res.status(200).json(ownerData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getOwnerById = async (req, res) => {
  try {
    const id = req.params.id;
    const ownerExist = await Owner.findById(id);
    if (!ownerExist) {
      return res.status(404).json({ message: "Owner not found." });
    }
    res.status(200).json(ownerExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const updateOwner = async (req, res) => {
  try {
    const id = req.params.id;
    const ownerExist = await Owner.findById(id);
    if (!ownerExist) {
      return res.status(404).json({ message: "Owner not found." });
    }
    const updatedData = await Owner.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Owner Updated successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// deleting owner by their id 
export const deleteOwner = async (req, res) => {
    try {
      const id = req.params.id;
      const ownerExist = await Owner.findById(id);
      if (!ownerExist) {
        return res.status(404).json({ message: "Owner not found." });
      }
      await Owner.findByIdAndDelete(id);
      res.status(200).json({ message: "Owner deleted successfully." });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  };

// Route 2: Authenticate an owner using: POST "/api/owner/login". no Login Required
export const loginOwner = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const owner = await Owner.findOne({ email });

    if (!owner) {
      return res.status(401).json({ message: "Owner not exists." });
    }

    // Compare hashed password
    const passwordCompare = await bcrypt.compare(password, owner.password);
    if (!passwordCompare) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Generate JWT token
    const data = { owner: { id: owner._id } };
    const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      success: true,
      message: "Login successful.",
      ownerId: owner._id,
      authtoken,
    });
  } catch (error) {
    res.status(500).json({ authtoken, errorMessage: error.message });
  }
};

// Route 3: get logged in owner details using: POST "/api/owner/getUser". Login Required
export const getLoggedInOwnerDetails = async (req, res) => {
  try {
    console.log("Request Owner:", req.owner);
    if (!req.owner || !req.owner.id) {
      return res.status(401).json({ error: "Unauthorized access" });
    }

    const ownerId = req.owner.id;
    const owner = await Owner.findById(ownerId).select("-password");
    res.send(ownerId);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
