import express from "express"
import userController from "../controllers/user.js";
import registerController from "../controllers/register.js";
import loginController from "../controllers/login.js";

const Router = express.Router();

Router.use("/", userController);
Router.use("/", registerController);
Router.use("/", loginController);

export default Router;