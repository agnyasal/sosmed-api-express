import express from "express";
import { registerUserController } from "../controllers/users/registesUserController";

const router = express.Router();

router.post("/register", registerUserController);

export default router;
