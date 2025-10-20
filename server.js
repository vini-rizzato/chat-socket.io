import express from "express";
import connect from "./src/config/connection.js";
import Router from "./src/routes/index.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";
import bodyParser from "body-parser";

const app = express();
connect;

bodyParser.json();

app.use(express.json());
app.use("/", Router);
app.use(errorHandler);

app.listen(8080, () => {
    console.log("Servidor ouvindo");
});

