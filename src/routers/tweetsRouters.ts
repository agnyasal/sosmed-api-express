import express from "express";
import { createTweetController } from "../controllers/tweets/createTweetsController";

const router = express.Router();

router.post("/createTweet", createTweetController);

export default router;
