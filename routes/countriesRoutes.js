import express from "express";
import {
  getCountries,
  getCitiesByCountry,
} from "../controllers/countriesController.js";

const router = express.Router();

// Route to get all countries
router.get("/countries", getCountries);

// Route to get cities for a specific country
router.get("/countries/:country/cities", getCitiesByCountry);

export default router;
