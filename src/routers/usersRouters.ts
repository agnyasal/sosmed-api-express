import express from "express";
import { registerUserController } from "../controllers/users/registesUserController";
import { loginUserController } from "../controllers/users/loginUserController";
import { keepLoginController } from "../controllers/users/keepLoginController";
import { verifyToken } from "../middleware/jwtVerifyToken";
import { createTweetController } from "../controllers/tweets/createTweetsController";

const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.get("/keeplogin", verifyToken, keepLoginController);
router.post("/createTweet", createTweetController);

export default router;
