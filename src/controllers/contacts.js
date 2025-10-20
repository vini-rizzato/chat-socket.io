import User from "../models/user.js";

const contact = async (req, res, next) => {
    try{
        const { email } = req.body;
        const user = await User.findOne({ email });

    }catch(err){

    }
};

export default contact;