import bcrypt from "bcrypt";

export const comparePassword = async (req, res, next) => {
  try {
    const { senha } = req.body;
    const user = req.user;

    const senhaValida = await bcrypt.compare(senha, user.senha);

    if (!senhaValida) {
      return res.status(401).json({ message: "Senha incorreta." });
    }

    next();
  } catch (error) {
    console.error("Erro em comparePassword:", error);
    return res.status(500).json({ message: "Erro ao comparar senha." });
  }
};
