import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function authMiddleware(req, res, next){
    try{
        const token = req.body;

        const verify = jwt.verify(token, process.env.JWT_KEY);
        console.log(verify);

        res.status(200).json({ verify });
    }catch(err){
        res.status(500).json({ error: "Erro interno." });
    }
}

export default authMiddleware;