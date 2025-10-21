export async function comparePassword(req, res, next){
    const {senha} = req.body;

    const compareSenha = await bcrypt.compare(senha, findUser.senha);

    if(!compareSenha){
        return res.status(400).json({ error: "Senha inválida para esse usuário." });
    };
    next();
}