export function validateLogin(req, res, next) {
    const {email, senha} = req.body;

    if(!email || !senha) {
        return res.status(400).json({ error: "Campos 'email' e 'senha' são obrigatórios." });
    }
    next();
}