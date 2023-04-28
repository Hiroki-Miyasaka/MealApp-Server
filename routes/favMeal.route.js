import express from "express";
import auth from "../middleware/auth.middleware.js";
import { createFavMeal } from "../controllers/favMeal.controller.js";

const router = express.Router();

router.post("/", auth, createFavMeal);

export default router;