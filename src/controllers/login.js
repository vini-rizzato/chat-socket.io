import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const login = async (req, res, next) => {
    try{
        const {email, senha} = req.body;

        const findUser = await User.findOne({ email });

        const compareSenha = await bcrypt.compare(senha, findUser.senha);

        if(!compareSenha){
            return res.status(400).json({ error: "Senha inválida para esse usuário." });
        }
        const token = jwt.sign({ id: findUser.id, email: email }, process.env.JWT_KEY, { expiresIn: '1h' });

        res.status(201).json({ token: token });
    }catch(err){}
};

export default login;