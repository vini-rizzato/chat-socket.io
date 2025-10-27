import User from "../models/user.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const register = async (req, res, next) => {
    const { nome, email, senha } = req.body;

    try{
        const hashedSenha = await bcrypt.hash(senha, 10);
        console.log(hashedSenha);

        await User.create({ nome: nome, email: email, senha: hashedSenha });
        res.status(201).json({ message: "Usuário criado." });

    }catch(err){
        next();
    };
};

export default register;