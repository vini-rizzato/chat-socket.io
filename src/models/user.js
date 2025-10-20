import mongoose from "mongoose";

const schemaUser = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    contatos: {
        email: String
    },
    chats: {
        id: Number
    }
}, {collection: "users"});

const User = mongoose.model("User", schemaUser);

export default User;