import mongoose from "mongoose";

const connect = mongoose.connect('mongodb://localhost:27017/client-chat')
    .then(() => console.log("Banco de dados conectado"))
    .catch((err) => console.error("Erro ao conectar ao banco de dados" + err));

export default connect;