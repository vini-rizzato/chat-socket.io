export function validateContact(req, res, next){
    const { email } = req.body;
    
    if(!email){
        return res.status(400).json({ error: "E-mail é um campo obrigatório." });
    }
    next();
}