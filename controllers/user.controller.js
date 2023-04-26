import User from "../models/user.model.js";

export const getMe = async(req, res) => {
    const id = req.user;

    try{
        let user = await User.findById(id);

        res.status(200).json({
            status: "Success",
            user
        })
    } catch(err){
        res.status(500).json({
            status: "fail",
            message: "Something went wrong",
            err
        })
    }
}