import express from "express";
import { validateLogin } from "../middlewares/login/validateLogin.js";
import { findUserLogin } from "../middlewares/login/findUserLogin.js";
import { comparePassword } from "../middlewares/login/comparePassword.js";
import login from "../controllers/login.js";

const loginRouter = express.Router();

loginRouter.post("/", validateLogin, findUserLogin, comparePassword, login);

export default loginRouter;