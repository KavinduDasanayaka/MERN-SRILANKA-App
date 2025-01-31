import express from "express";
const router = express.Router();

//controllers
import {createLocation,getAllLocations,getSpecificLocation,locationReview} from '../controllers/LocationController.js'

// middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import checkId from "../middlewares/checkId.js";

//public routes
router.get("/all-locations",getAllLocations)
router.get("/specific-location/:id",getSpecificLocation)

//Restricted routes
router.post("/:id/reviews",authenticate,checkId,locationReview)

//Admin
router.post("/create-location",authenticate,createLocation)

export default router;