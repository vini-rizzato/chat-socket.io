import express from "express";
import { validateLogin } from "../middlewares/login/validateLogin.js";
import { findUserLogin } from "../middlewares/login/findUserLogin.js";
import { comparePassword } from "../middlewares/login/comparePassword.js";
import postLogin from "../controllers/login/post.js";
import deleteLogin from "../controllers/login/delete.js";

const loginRouter = express.Router();

loginRouter.post("/", validateLogin, findUserLogin, comparePassword, postLogin);
loginRouter.delete("/", findUserLogin, deleteLogin);

export default loginRouter;