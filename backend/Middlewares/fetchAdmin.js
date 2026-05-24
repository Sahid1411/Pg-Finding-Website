// Middlewares/fetchAdmin.js
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

const fetchAdmin = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ error: "Please authenticate using a valid token" });
    }

    try {
        console.log("Received Token:", token);
        const data = jwt.verify(token, JWT_SECRET);
        
        req.admin = data.admin; 
        if (!req.admin) {
            return res.status(401).json({ error: "Invalid token structure for admin" });
        }

        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid token, please authenticate again" });
    }
};

export default fetchAdmin;