import express from "express"
import user from "../controllers/user.js";
import register from "../controllers/register.js";
import login from "../controllers/login.js";
import contact from "../controllers/contacts.js";
import { validateLogin } from "../middlewares/login/validateLogin.js";
import { validateResgistro } from "../middlewares/register/validateRegister.js";
import { validateContact } from "../middlewares/contact/validateContact.js";
import { existingEmailRegister } from "../middlewares/register/existingEmailRegister.js";


const Router = express.Router();

Router.use("/:id", user);
Router.post("/register", validateResgistro, existingEmailRegister, register);
Router.post("/login", validateLogin, login);
Router.post("/:id/contact", validateContact, contact);

export default Router;