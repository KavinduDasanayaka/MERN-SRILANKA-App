import express from "express";
// controllers
import {createUser,loginUser,logoutcurrentuser,getCurrentUserProfile,updateCurrentUserProfile,getAllUsers} from "../controllers/userController.js";

const router = express.Router();

// middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

router
  .route("/")
  .post(createUser)
  .get(authenticate, authorizeAdmin, getAllUsers);

  
router.post("/auth",loginUser)
router.post("/logout",logoutcurrentuser)

router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);


export default router;