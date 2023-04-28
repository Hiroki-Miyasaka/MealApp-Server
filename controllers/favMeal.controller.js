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

export const deleteFavMeal = async(req, res) => {
    const userId = req.user;

    try{
        const { id } = req.body;
        await User.findByIdAndUpdate(userId, {$pull: {favMeals: {idMeal: id} } });
        console.log("success");
        res.status(201).json({
            status: "success",
            message: "Meal removed from favorite"
        })
    } catch(error){
        console.log("fail");
        res.status(500).json({
            status: "fail",
            message: error.message
        })
    }
};