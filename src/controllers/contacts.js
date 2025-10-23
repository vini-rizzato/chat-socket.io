import User from "../models/user.js";

const contact = async (req, res) => {
    try{
        const { email } = req.body;
        const user = await User.findOne({ email });

        await User.updateOne({ contatos: {email} })

    }catch(err){

    }
};

export default contact;