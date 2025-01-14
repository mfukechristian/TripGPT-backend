import express from "express";
import { generateTripController } from "../controllers/tripGenController.js";

const router = express.Router();

// Define the route for generating a trip with query parameters
router.post("/generate", generateTripController);

export default router;
