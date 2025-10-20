import express from "express";

const userController =  express.Router();

userController.get("/client/troca-senha/:id", (req, res) => {
    const { senha } = req.body;

    
});

export default userController;