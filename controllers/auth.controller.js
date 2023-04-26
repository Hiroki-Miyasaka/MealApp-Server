import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { createToken } from "../service/jwt.service.js";

export const register = async(req, res) => {
    const { fullName, email, password } = req.body;
    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                status: "fail",
                message: "Email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            fullName: fullName,
            email: email,
            password: hashedPassword
        });

        const result = await user.save();

        res.status(201).json({
            message: "User created successfully"
        })
    } catch(err){
        res.status(500).json({
            message: "Something went wrong!",
            err
        })
    }
}

export const login = async(req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                status: "fail",
                message: "Incorrect password"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect){
            return res.status(400).json({
                status: "fail",
                message: "Incorrect password!"
            });
        }

        const token = createToken({id: user._id});

        res.header("Authorization", token).status(200).json({
            status: "Success",
            token,
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email
            }
        })
    } catch(err){
        res.status(500).json({
            message: "Something went wrong",
            err
        })
    }
}

export const logout = async(req, res) => {
    try{
        res.status(200).json({
            status: "Success",
            message: "Logged out successfully"
        })
    } catch(err){
        res.status(500).json({
            status: "fail",
            message: "Something went wrong",
            err
        })
    }
}