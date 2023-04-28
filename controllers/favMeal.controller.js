import User from "../models/user.model.js";

export const createFavMeal = async(req, res) => {
    const userId = req.user;

    try{
        const { idMeal, strMeal, strMealThumb } = req.body;
        const newFavMeal = {
            idMeal,
            strMeal,
            strMealThumb
        }
        await User.findByIdAndUpdate(userId, { $push: {favMeals: newFavMeal} });
        res.status(201).json({
            status: "success",
            message: "Meal added to favMeals",
            newFavMeal
        })
    } catch(error){
        res.status(500).json({
            status: "fail",
            message: error.message
        })
    }
};