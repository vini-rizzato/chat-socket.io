import express from "express";
import authMiddleware from "../middlewares/auth/auth";

const authRouter = express.Router();

authRouter.post("/", authMiddleware);

export default authRouter;