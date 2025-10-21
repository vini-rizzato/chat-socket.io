import express from "express";
import { validateLogin } from "../middlewares/login/validateLogin.js";
import login from "../controllers/login.js";

const loginRouter = express.Router();

loginRouter.post("/", validateLogin, login);

export default loginRouter;