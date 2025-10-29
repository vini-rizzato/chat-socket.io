import express from "express";
import authMiddleware from "../middlewares/auth/auth.js";

const authRouter = express.Router();

authRouter.post("/", authMiddleware);

export default authRouter;