import User from "../../models/user.js";

export async function findUserLogin(req, res, next){
    const {email} = req.body;

    const findUser = await User.findOne({email});
    if(!findUser){
        return res.status(409).json({ error: "Usuário não encontrado." });
    };
    next();
}