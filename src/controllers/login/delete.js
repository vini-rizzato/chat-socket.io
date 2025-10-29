import User from "../../models/user.js";

export default async function deleteLogin(req, res, next){
    try{
        const {user} = req.user;

        await User.deleteOne({ email: user.email });

        res.status(204);
    }catch(err){
        next();
    }
}