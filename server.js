import express from "express";
import connect from "./src/config/connection.js";
import Router from "./src/routes/index.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";

const app = express();
app.use(express.json());
connect;

app.use("/", Router);
app.use(errorHandler);

app.listen(8080, () => {
    console.log("Servidor ouvindo");
});

