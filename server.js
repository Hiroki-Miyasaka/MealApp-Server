import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import header_middleware from "./middleware/header.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import favMealRoutes from "./routes/favMeal.route.js";

import db from "./config/db.config.js";

dotenv.config();
const app = express();

app.use(header_middleware);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        author: "Hiroki",
        app: "MealApp"
    });
});

app.use("/api/auth", authRoutes);
app.use("/", userRoutes);
app.use("/api/favMeal",favMealRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Server is running on port" + process.env.PORT + "....");
})