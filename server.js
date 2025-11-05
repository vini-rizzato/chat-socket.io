import express from "express";
import connect from "./src/config/connection.js";
import routerRegister from "./src/routes/routerRegister.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";
import loginRouter from "./src/routes/routerLogin.js";
import authRouter from "./src/routes/routerAuth.js";
import cors from "cors";
import path from "path";
import { Server } from "socket.io";
import { fileURLToPath } from "url";
import connectionSocket from "./src/sockets/chatSocket.js";

const app = express();
const server = app.listen(8080, () => {
    console.log("Servidor ouvindo");
});
const io = new Server(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
connect;

app.use("/register", routerRegister);
app.use("/login", loginRouter);
app.use("/auth", authRouter);
app.use(errorHandler);
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

connectionSocket(server);
