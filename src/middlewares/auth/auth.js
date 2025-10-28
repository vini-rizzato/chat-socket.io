import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function authMiddleware(req, res, next){
    const token = req.body;

    const verify = jwt.verify(token, process.env.JWT_KEY);
    console.log(verify);

    res.status(200).json({ verify });
}

export default authMiddleware;