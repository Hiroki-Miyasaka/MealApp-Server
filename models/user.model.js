import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    favMeals: Array,
})

const User = mongoose.model("User", userSchema);

export default User;