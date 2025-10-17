import express from "express";
import connect from "./src/config/connection.js";
import Router from "./src/routes/index.js";

const app = express();
connect;

app.use("/", Router);

app.listen(8080, () => {
    console.log("Servidor ouvindo");
});

