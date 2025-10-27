import express from "express";
import connect from "./src/config/connection.js";
import routerRegister from "./src/routes/routerRegister.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";
import loginRouter from "./src/routes/routerLogin.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
connect;

app.use("/register", routerRegister);
app.use("/login", loginRouter);
app.use(errorHandler);

app.listen(8080, () => {
    console.log("Servidor ouvindo");
});

