export function errorHandler(err, req, res, next){
    console.error("Erro:", err.stack);
    res.status(err.statusCode || 500).json({ error: "Erro interno do servidor." });
};