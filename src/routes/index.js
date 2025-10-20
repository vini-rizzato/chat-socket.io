import express from "express"
import userController from "../controllers/user.js";
import register from "../controllers/register.js";
import login from "../controllers/login.js";
import { validateLogin } from "../middlewares/validateLogin.js";
import { validateResgistro } from "../middlewares/validateregister.js";

const Router = express.Router();

Router.use("/", userController);
Router.use("/register", validateResgistro, register);
Router.post("/login", validateLogin,login);

export default Router;