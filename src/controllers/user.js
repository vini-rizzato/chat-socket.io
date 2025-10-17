import express from "express";

const userController =  express.Router();

userController.get("/client", (req, res) => {
    res.send("Client");
});

export default userController;