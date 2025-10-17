import express from "express"
import userController from "../controllers/user.js";

const Router = express.Router();

Router.use("/", userController);

export default Router;