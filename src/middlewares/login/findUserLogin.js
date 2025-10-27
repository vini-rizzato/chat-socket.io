import User from "../../models/user.js";

export const findUserLogin = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(409).json({ message: "Usuário não encontrado." });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Erro em findUserLogin:", error);
    return res.status(500).json({ message: "Erro ao buscar usuário." });
  }
};
