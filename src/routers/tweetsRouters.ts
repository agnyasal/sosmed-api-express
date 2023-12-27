import express from "express";
import { createTweetController } from "../controllers/tweets/createTweetsController";
import { allTweetsContoller } from "../controllers/tweets/allTweetsController";
import { deleteTweetController } from "../controllers/tweets/deleteTweetController";
import { updateTweetController } from "../controllers/tweets/updateTweetController";
import { findTweetByIdController } from "../controllers/tweets/findTweetByIdController";

const router = express.Router();

router.post("/create", createTweetController);
router.get("/", allTweetsContoller);
router.delete("/:id", deleteTweetController);
router.patch("/:id", updateTweetController);
router.get("/:id", findTweetByIdController);

export default router;
