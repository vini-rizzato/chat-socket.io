import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const login = async (req, res, next) => {
    try{
        const {email} = req.body;

        const findUser = await User.findOne({ email });

        const token = jwt.sign({ id: findUser.id, email: email }, process.env.JWT_KEY, { expiresIn: '1h' });
        console.log(token);

        res.status(200).json({ token: token });
    }catch(err){
        next();
    }
};

export default login;