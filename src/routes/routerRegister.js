import express from "express";
import register from "../controllers/register.js";
import { existingEmailRegister } from "../middlewares/register/existingEmailRegister.js";
import { validateRegister } from "../middlewares/register/validateRegister.js";

const routerRegister = express.Router();

routerRegister.post("/", validateRegister, existingEmailRegister, register);

export default routerRegister;

