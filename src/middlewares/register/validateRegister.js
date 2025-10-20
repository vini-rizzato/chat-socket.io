export function validateResgistro (req, res, next){
    const {nome, email, senha} = req.body;

    if(!nome || !email || !senha){
        return res.status(400).json({ error: "Campos 'nome', 'email' e 'senha' são obrigatórios." });
    }
    next();
};