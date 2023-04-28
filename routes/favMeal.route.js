import express from "express";
import auth from "../middleware/auth.middleware.js";
import { createFavMeal, deleteFavMeal } from "../controllers/favMeal.controller.js";

const router = express.Router();

router.post("/", auth, createFavMeal);
router.delete("/", auth, deleteFavMeal);

export default router;