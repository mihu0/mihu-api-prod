import express from "express";
const router = express.Router();
import { getUserProfile, manageFavorites } from "../controllers/userController.js";
import { protect } from "../middleware/auth.js";


router.get("/profile",protect,getUserProfile)
router.post("/manageFavorite",protect,manageFavorites);


export default router;