import User from "../../models/user.js";

export async function findUserContact(req, res, next){
    const {email} = req.body;

    const contact = await User.findOne({email});
    if(!contact){
        return res.status(409).json({ error: "E-mail de usuário não encontrado." });
    };
}