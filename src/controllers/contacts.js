import express from "express";

const contactController = express.Router();

contactController.get("/user/contact", (req, res) => {
    res.send("Contatos.");
});

contactController.post("/user/contact", (req, res) => {
    
});

