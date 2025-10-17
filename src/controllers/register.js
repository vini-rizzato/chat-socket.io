import express from "express";
import User from "../models/user.js";

const registerController = express.Router();

registerController.get("/registro", (req, res) => {
    res.send("Registro");
});

registerController.post("/registro", async (req, res) => {
    const {nome, email, senha} = req.body;

    if(!nome || !email || !senha){
        return res.status(400).json({ error: "Há campos inválidos na requisição." });
    }

    if(await User.find({email: email})){
        return res.status(409).json({ error: "E-mail ja cadastrado." })
    }

    try{
        await User.create({nome: nome, email: email, senha: senha});
        res.status(200).json({ message: "Usuário criado." });
    }catch(err){
        res.status(500).json({ error: "Erro de servidor ao registrar o usuário." });
    };
});

export default registerController;