import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const loginController = express.Router();

loginController.get("/login", (req, res) => {
    res.send("Login");
});

loginController.post("/login", async (req, res) => {
    const {email, senha} = req.body;

    if(!email || !senha){
        return res.status(404).json({ error: "Há campos inválidos na requisição." })
    }

    const findUser = await User.findOne({ email: email });
    console.log(findUser);
    if(!findUser){
        return res.status(404).json({ error: "Usuário não encontrado." })
    }

    const compareSenha = await bcrypt.compare(senha, findUser.senha);

    if(!compareSenha){
        return res.status(400).json({ error: "Senha inválida para esse usuário." });
    }

    try{
        const token = jwt.sign(({ email: email }), process.env.JWT_KEY, { algorithm: 'RS256' });

        res.status(201).send(`Usuário ${findUser.nome} logado.`);
    }catch(err){
        res.status(500).json({ error: "Erro do servidor."});
    }
})

export default loginController;