import User from "../../models/user.js";

export async function existingEmailRegister(req, res, next) {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if(user){
        return res.status(409).json({ error: "E-mail já cadastrado." });
    }
    next();
}