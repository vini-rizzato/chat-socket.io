import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function authMiddleware(req, res, next){
    const token = req.body;

    const veify = jwt.verify(token, process.env.JWT_KEY);
}
