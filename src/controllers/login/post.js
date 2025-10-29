import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const postLogin = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(500).json({ message: "Usuário não encontrado no request." });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );

    console.log("Token gerado com sucesso:", token);

    return res.status(200).json({ token });
  } catch (err) {
    console.error("Erro ao gerar token:", err);
    return res.status(500).json({ message: "Erro ao realizar login." });
    next();
  }
};

export default postLogin;
